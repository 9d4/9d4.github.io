## Mengambil Input Teks
Mengambil input dapat dilakukan dengan memanggil fungsi `input` dengan argumen berupa string.
Input dapat disimpan dalam variable untuk kemudian diolah.
```py
name = input("Who are you? ")
```

Kode tersebut akan menampilkan `Who are you? ` dan menunggu sampai `Enter` ditekan. Kemudian masukan dari keyboard akan
disimpan dalam variable nama.

## Konversi Input
Input selalu bertipe string/teks, jika ingin mengambil angka dari input, maka harus melakukan konversi terlebih dahulu.
Konversi di python sangat simple, cukup memanggil fungsi yang mana adalah nama dari tipe data target.

```py
ask = input("Enter number: ")
# ask adalah string, meskipun user memasukkan angka
# konversi ask ke int
wholeNumber = int(ask)

#konversi ke float
floatNumber = float(ask)
```


# Task: Small Calculator

<video src="/contents/th/task_smallcalculator-1.mp4" title="Task: Small Calculator" controls></video>

```
Masukkan angka: 10
Masukkan angka: 10
lagi (y/n)? y
Masukkan angka: 10
lagi (y/n)? n
30
```

Meminta memasukkan angka 2 kali, kemudian tanya lagi(y/n). Jika jawaban 'y' maka meminta memasukkan angka lagi.
Begitu seterusnya sampai jawaban 'n' lalu tampilkan hasil.

Untuk membuat kalkulator seperti pada video tersebut, dibutuhkan pengetahuan:
- While (Perulangan)
- If
- Konversi tipe data
- Input



> What you have
> - Internet
> - Google
> - Brain
> 
> Don't forget to be grateful.


