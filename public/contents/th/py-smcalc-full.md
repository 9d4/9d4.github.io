ref: [Part 1](/writings/thp-py-smcalc-1)

## Membuat function 

Membuat function dengan nama hello.
```python
def hello():
    print("Hello")

# memanggil function hello
hello()
```

## Keluar dari program

Menggunakan function exit, cukup memanggil function exit. 
```python
exit()
```

Jika di jupyter notebook, maka menggunakan module `sys`:
```python
# import module sys
import sys

# memanggil function exit dari module sys akan mengeluarkan dari program.
sys.exit(0)
```

## Task: Small Calculator Full

- Tambahkan header ketika program baru berjalan
    ```text
    Welcome to Small Calculator
    ```
- Tambahkan pilihan menu
    ```text
    Select menu:
    0) exit
    1) Addition       3) Multiplication
    2) Substraction   4) Division
    
    >>> 
    ```

    Pilihan menu dapat ditempatkan dalam function agar rapi.

    ```python
    import sys

    # function untuk menu pertambahan
    def addition():
        print("Implementasi pertambahan")

    # function untuk menu pengurangan
    def substraction():
        print("Implementasi pengurangan")

    # function untuk menu perkalian
    def multiplication():
        print("Implementasi perkalian")

    # function untuk menu pembagian
    def division():
        print("Implementasi pembagian")

    def menu():
        print("""Select menu:
        0) exit
        1) Addition       3) Multiplication
        2) Substraction   4) Division
        """)

        pilihan = input(">>> ")

        if pilihan == "0":
            sys.exit(0)
        
        if pilihan == "1":
            addition()

        ...

    
    # memanggil function menu ketika program dijalankan
    while True:
        menu()
    ```

    Implementasi harus seperti di [Part 1](/writings/thp-py-smcalc-1).
