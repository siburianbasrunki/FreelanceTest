# FREELANCE TEST (VITE REACT JS) 👨‍💻

Deskripsi singkat tentang proyek ini.

## Tech Stack 🕹

- **Front-end**: React.js
- **State Management**: React Hooks
- **CSS Framework**: Tailwind CSS
- **API**: Axios
- **Pengembangan**: JavaScript (ES6)

## Fitur ⚒

- Menampilkan daftar produk dengan pagination.
- Mencari produk berdasarkan nama.
- Memfilter produk berdasarkan kategori.
- Menampilkan loading state menggunakan skeleton loader.
- Menangani error saat mengambil data dari API.
  
## Cara Clone 🚀
Untuk meng-clone repositori ini, ikuti langkah-langkah berikut:
- Pastikan Anda telah menginstal Git di komputer Anda.
- Buka terminal atau command prompt.
- Jalankan perintah berikut:
  ```
  https://github.com/siburianbasrunki/FreelanceTest.git
  ```
- Masuk ke direktori proyek
  ```
  cd FreelanceTest
  ```
- Instal dependensi
  ```
  npm install
  ```
- Jalankan aplikasi
  ```
  npm run dev
  ```
## API yang Digunakan

Proyek ini menggunakan [Fake Store API](https://fakestoreapi.com/) untuk mengambil data produk.
### GET
```
https://fakestoreapi.com/products
```

### Contoh Response

Berikut adalah contoh response yang diperoleh dari API:

```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and hikes in the forest.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
]
