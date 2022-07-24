Contents

- [Database](#database)
- [DBMS](#database-management-system)
- [Fungsi Database](#fungsi-database)
- [Jenis Database](#jenis-database)
- [Catatan](#catatan)
- [Menggunakan Beekeeper](#menggunakan-beekeeper-studio)
- [Referensi](#references)

---

![Database Sketch](/contents/th/db.webp)

## Database

Database (basis data) adalah kumpulan data yang terorganisir yang disimpan dan diakses secara elektronik.
Database biasanya dikontrol menggunakan DBMS.

Contoh: MySQL, PostgreSQL, Microsoft SQL Server

## Database Management System

Database Management System (DBMS) adalah perangkat lunak yang dirancang untuk menyimpan, mengambil, mendefinisikan, dan mengelola data dalam database.

Contoh: Beekeeper Studio, Adminer, phpMyAdmin

## Fungsi Database

- Mengelompokan data dan informasi.
- Memudahkan dalam identifikasi data.
- Memudahkan proses akses, menyimpan, pembaharuan, dan penghapusan data.
- Menjadi alternatif terkait masalah penyimpanan ruang dalam suatu aplikasi.
- Menjaga kualitas data yang diakses sesuai input.
- Menunjang kinerja aplikasi yang memerlukan penyimpanan data.

## Jenis Database

1. Operational Database. Database jenis ini berfungsi sebagai wadah mengelola data dinamis secara real-time atau langsung.

2. Database Warehouse Database jenis ini sering digunakan untuk melakukan analisis dan pelaporan data.

3. Distributed Database Distributed database berbeda dengan sistem paralel yang terhubung erat dan memiliki sistem pada data tunggal. Sistem ini terdistribusi melalui suatu situs yang tergabung dan tidak memiliki komponen fisik.

4. Relational Database Relational database mengorganisir data berdasarkan model hubungan data. Basis data relasional ini digunakan oleh banyak perangkat lunak untuk mengatur dan memelihara informasi melalui hubungan setipa data. Beberapa produk relational database yang sering digunakan adalah SQL, Oracle, MySQL, SQLite, dan sebagainya.

5. End-User Database Basis data yang satu ini dikembangkan oleh end-user melalui workstation meraka. Adapun contohnya seperti spreadsheet, word processing, dan download file.

Terdapat basis data lainnya yakni analytical database, real-time database, external database, navigation database, hypermedia database, in memory database, dan document oriented database.

## Catatan

**Database Engine** adalah perangkat lunak yang mengatur keseluruhan database. Pada umumnya Database Engine
memiliki protokol yang berjalan di atas TCP/IP. Contoh: Postgres.

**DBMS** adalah perangkat lunak yang mengontrol Database Engine. Contoh: Beekeeper Studio.

**SQL** adalah bahasa yang digunakan oleh DBMS untuk memerintah Database Engine melakukan operasi.

**Database** adalah tempat menyimpan tabel.

**Tabel** adalah tempat menyimpan data. Satu baris data pada tabel disebut _row_. Tabel secara unik diidentifikasi dengan nama mereka dan terdiri dari kolom dan baris. Kolom berisi nama kolom, tipe data, dan atribut lainnya.

_Under simple term_

> Database adalah ember. Tabel adalah buku. Kita menulis data(row) di dalam buku.
> Kemudian buku tersebut dimasukkan ke dalam ember. Jika kita punya dua database(ember),
> tidak mungkin meletakkan buku di dua tempat, sedangkan bukunya hanya satu.

Jadi, database satu dengan database yang lain tidak berhubungan. Sedangkan tabel yang satu
dengan tabel yang lain dapat berhubungan.

Database dan Tabel adalah 2 hal yang jauh berbeda.

_Another simple term_

> Database Engine adalah koki. DBMS adalah pelayan. SQL adalah bahasa yang kita gunakan untuk menjelaskan
> makanan yang kita inginkan kepada koki melalui perantara pelayan.

## Menggunakan Beekeeper Studio

Alat & Bahan
- [Postgres](https://www.postgresql.org/)
- [Beekeeper Studio](https://www.beekeeperstudio.io/)

Steps
- [Membuat Koneksi](#membuat-koneksi)
- [Membuat Database](#membuat-database)
- [Membuat Table](#membuat-tabel)
- [Memasukkan Data](#memasukkan-data)

### Membuat Koneksi
Karena kita menggunakan database engine Postgres, maka pada Connection Type kita pilih Postgres.
![New Connection](/contents/th/newconn.png)

Isikan Host, Port, User, dan Password sesuai dengan konfigurasi Database engine.

Secara *default* Postgres berjalan pada port `5432` dan user default `postgres`.

Setelah itu klik connect, atau boleh juga disimpan terlebih dahulu jika ingin menggunakannya di kemudian hari.

### Membuat Database
**Ingat!** Database adalah ember, tempat dimana kita menyimpan tabel.

Pada **sidebar database** bagian kiri atas terdapat daftar database(ember) yang kita punya.
Secara bawaan hanya ada satu database dengan nama `postgres` yang mana merujuk pada user `postgres`.

Untuk membuat database baru, kita bisa menjalankan query berikut.

```sql
CREATE DATABASE db1;
```

Dengan menjalankan query tersebut kita mengirimkan perintah kepada Database Engine untuk membuat ember dengan nama `db1`.

Sekarang refresh daftar database, jika sudah ada kita langsung pindah ke dalam database yang baru saja kita buat dengan mengklik database pada daftar.

![New DB](/contents/th/changedb.png)

### Membuat Tabel
Beekeeper Studio menyediakan fitur membuat database tanpa dengan menuliskan query secara manual.
Kita bisa memanfaatkan fitur GUI yang dimilikinya. Tetapi syarat agar fitur tersebut bisa digunakan ialah harus ada kolom dengan atribut `primary key` pada tabel. 

Contoh tabel: `users`
| id  | name    | age |
| --- | ------- | --- |
| 1   | Foo     | 15  |
| 2   | Foo Bar | 15  |
| 3   | Foo Baz | 16  |
| 4   | Bar Foo | 16  |
| 5   | Bar Baz | 17  |

Untuk membuat tabel klik ikon **+** pada **Entities**

![New DB](/contents/th/newusers.png)

Kemudian pastikan ada salah satu kolom `primary` yaitu kolom `id` dengan tipe data `autoincrement` ataupun `serial` yang mana digunakan
untuk membuat angka secara otomatis.

Kolom name karena berisi nama maka tipe datanya bisa `TEXT` ataupun `VARCHAR`.

Sedangkan untuk age berisi angka bulat maka tipe datanya `INT`.

Setelah itu tinggal klik Create Table.


### Memasukkan Data
Tabel `users` telah dibuat, sekarang kita coba masukkan data ke dalamnya.

Lihat **sidebar database**. Kemudian pada **Entities** folder public terdapat daftar tabel yang kita buat.

Klik 2 kali pada tabel `users` untuk membukanya.

![Insert Data](/contents/th/insertdata.png)

Untuk menambah baris klik tanda **+** pada kanan bawah atau shortcut `CTRL + N`.

Kemudian simpan data dengan klik Apply.

> Untuk mengedit data tinggal klik kolom pada baris yang diinginkan, lalu apply.


Jika ingin menggunakan query untuk memasukkan data, maka
query berikut ekuivalen dengan cara sebelumnya.

```sql
INSERT INTO users(name, age)
VALUES ('Foo', 15),
('Foo Bar', 15),
('Foo Baz', 16),
('Bar Foo', 16),
('Bar Baz', 17);
```

More...

Menyaring data bisa dilakukan dengan fitur filter yang terdapat pada bagian atas tabel.

Misal menyaring baris dengan `age` sama dengan `15`.

![Filter Data](/contents/th/filterdata.png)

Maka hanya data dengan `age` = `15` akan ditampilkan.  

---

## References

- [W3Schools SQL Reference](https://www.w3schools.com/sql/sql_ref_keywords.asp)
- [Postgres Cheat Sheet](https://postgrescheatsheet.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

