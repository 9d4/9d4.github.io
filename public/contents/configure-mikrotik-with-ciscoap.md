Hey there...

I found an old Cisco Aironet 3500 series and I had been wondering for a week maybe how to configure it. It has 2 radios, 2.4GHz and 5GHz, with 3 antennas each. 
Then what I wanted is 3 SSIDs of 2.4GHz and 1 SSID of 5GHz, and every SSID bound with
a VLAN. But then I'm not gonna use the AP with Cisco switch, instead Mikrotik. Mikrotik
and Cisco have different terms on VLAN things, so how do we make them work together.

After wandering around in the internet, I found a tutorial that suits with my needs.

What I found from internet:
- [Mikrotik RouterOS work with Cisco Aironet AP](https://www.xfelix.com/2018/05/mikrotik-routeros-work-with-cisco-aironet-ap/).
- [Configure SSIDs and VLANs on Autonomous APs](https://www.cisco.com/c/en/us/support/docs/wireless-mobility/service-set-identifier-ssid/210516-SSIDs-and-VLANs-configuration-on-Autonom.html)
- [Multiple SSID With Multiple VLANs configuration example on Cisco Aironet APs](https://community.cisco.com/t5/wireless-mobility-knowledge-base/multiple-ssid-with-multiple-vlans-configuration-example-on-cisco/ta-p/3118056)

Let's dive in real quick.

#### Gears:
- Mikrotik RB2011UiAS
- Cisco AP AIR-CAP3502P-C-K9


#### What I wanted from the AP:

- 2.4GHz: (all authentication is open)
    - SSID: "Perakitan Hub" VLAN: no. It's native
    - SSID: "Perakitan" VLAN: **100**
    - SSID: "Pemrograman" VLAN: **300**

- 5GHz: (all authentication is open)
    - SSID: "Engineer" VLAN: **20**

#### Mikrotik Configuration

ether1: (internet source natted)

ether2: (to the AP)
- IP: 192.168.8.1/24 (dhcp enabled) 
- VLANS:
    - 20: `192.163.200.1/24` (dhcp enabled)
    - 100: `192.163.100.1/24` (dhcp enabled)
    - 300: `192.168.30.1/24` (dhcp enabled)

*Be careful with 168 and 163, they are correct. This setup is really bad actually, 
remember this is just an testing.*

#### Cisco Configuration

I reset the AP by pressing a button for several seconds in it's back until the light
blinking. Then just connect the gigabit ethernet to the `ether2` of mikrotik. The ap
will try to gain ip from the dhcp server in mikrotik, make sure to enable dhcp server.

Then how to check that the AP got an IP address? Just check it in the leases in winbox
or connect via telnet to mikrotik to check it.

Make sure we can ping the IP of the AP. You can either connect your laptop to the same
network through a swith hub, or just bridge the `ether2` with `ether3`, or make another
network in another ether, it works though.

Now let's configure it using telnet.


Once you connected you'll got like this. Default username and password is `Cisco`. 
Then enter config mode.
```
User Access Verification

Username: Cisco
Password: 
ap>ena
Password: 
ap#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
ap(config)#
```

**Configuring Interface Gigabit Ethernet**

VLAN: 10

waitt... We don't have VLAN 10 right? Yesss this is just (I don't know), just do it
or change it to 1 or whataver. It's native, directly to `ether2`.

```
#interface GigabitEthernet0.10
#encapsulation dot1Q 10 native
#bridge-group 1

#interface Dot11Radio0.10
#encapsulation dot1Q 10 native
#bridge-group 1

```

What I understand is, `interface GigabitEthernet0.10` configuring the sub interface
of gigabit ethernet 0.10, then assign encapsulation (vlan thing in cisco), native means
directly connect without vlan (as I understand). Then the bridge-group is like creating
group `1` then we'll use it together with the first SSID that I have noted above.

Then the second group from line 5, is just the same but the interface is the sub interface
of desired radio interface.


Let's do another

**VLAN 20**
```
#interface GigabitEthernet0.20
#encapsulation dot1Q 20
#bridge-group 20


#interface Dot11Radio0.20
#encapsulation dot1Q 20
#bridge-group 20
```

**VLAN 100**
```
#interface GigabitEthernet0.100
#encapsulation dot1Q 100
#bridge-group 100

#interface Dot11Radio0.100
#encapsulation dot1Q 100
#bridge-group 100
```

**VLAN 300**
```
#interface GigabitEthernet0.300
#encapsulation dot1Q 300
#bridge-group 30

#interface Dot11Radio0.300
#encapsulation dot1Q 300
#bridge-group 30
```

Waittt.... Why the group is 30??? Yes my convention is bad, but 300 is not allowed
it's more than the max allowed.

---

Now let's create the SSIDs

```
#dot11 ssid Perakitan Hub
#vlan 10
#authentication open 
#mbssid guest-mode
```

What I got is line 1 creating SSID(Perakitan Hub), then assign it to VLAN 10,
no authentication(because I'll use mikrotik hotspot), lastly `mbssid` is kindof
`multi BSSID`.

Let's do the rest.

```
#dot11 ssid Engineer
#vlan 20
#authentication open 
#guest-mode

#dot11 ssid Perakitan
#vlan 100
#authentication open 
#mbssid guest-mode

#dot11 ssid Pemrograman
#vlan 300
#authentication open 
#mbssid guest-mode
```

If you see the Engineer SSID, I did not use mbssid, because I don't want to use
it in multi ssid. It'll be assigned to 5GHz radio without other ssid.

We have created our SSIDs, what next is assigning each SSID to desired radio interface.

We have 2 radio interfaces, interface `Dot11Radio0` and `Dot11Radio1`, they are 2.4GHz and 5GHz
respectively.

```
#interface Dot11Radio0
#mbssid
#ssid Perakitan Hub
#ssid Perakitan
#ssid Pemrograman

#interface Dot11Radio1
#ssid Engineer
```

Now i'm done.

But if you find that there are no wifi network broadcasted, then maybe the interface
still down.

```
#interface Dot11Radio0
#no shutdown

#interface Dot11Radio1
#no shutdown
```

Or maybe the frequency is not correct, so change it. I change the frequency through
AP web interface, so don't ask me how to do through the IOS Command Line. I don't know.

That's It. Thank yeww....
