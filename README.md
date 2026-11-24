# EDUVORA — Starter Implementation

Fondasi aplikasi LMS + Adventure World 3D menggunakan Next.js, TypeScript, Tailwind, Firebase, React Three Fiber, Drei, Framer Motion-ready architecture, dan Lucide.

## Kebutuhan
- Node.js 26.x (sesuai konfigurasi Vercel yang diminta)
- Project Firebase aktif
- Firebase Authentication (Email/Password), Firestore, Storage, dan Realtime Database diaktifkan

## Menjalankan lokal
```bash
npm install
cp .env.example .env.local
# isi semua NEXT_PUBLIC_FIREBASE_* dari Firebase Console
npm run dev
```
Buka http://localhost:3000.

## Firebase setup
1. Buat project di Firebase Console.
2. Aktifkan Authentication > Email/Password.
3. Buat Firestore Database, Storage, dan Realtime Database.
4. Salin konfigurasi Web App ke `.env.local`.
5. Deploy `firestore.rules`, `storage.rules`, dan `database.rules.json` melalui Firebase Console atau Firebase CLI.

## Routes yang tersedia
- `/` landing page
- `/login` login Firebase
- `/register` pendaftaran akun
- `/teacher/dashboard` dashboard guru (kerangka UI)
- `/student/dashboard` dashboard siswa (kerangka UI)
- `/adventure` prototipe scene 3D dan pilihan dunia

## Implementasi yang sudah ada
- Next.js App Router + TypeScript + Tailwind
- Landing page responsif
- Register/login dengan Firebase Auth dan profil Firestore
- Role routing dasar setelah login
- Dashboard awal guru dan siswa
- React Three Fiber scene 3D interaktif dengan orbit camera, island, pohon, dan collectible visual
- Fungsi upload materi ke Firebase Storage dengan progress callback dan metadata Firestore
- Contoh Firestore, Storage, dan Realtime Database Rules (harus ditinjau dan diperketat sebelum produksi)

## Belum diimplementasikan penuh
Question Bank/import XLSX, video upload/player, assignment workflow, class enrollment, server-authoritative XP/coins, leaderboard, 25 level playable, 30 rigged avatar assets, Rapier character controller, boss battles, multiplayer room lifecycle, Cloud Functions validation, analytics, notifications, audio assets, admin dashboard, serta automated tests.

Jangan membuka pendaftaran role guru secara publik untuk produksi. Buat mekanisme undangan/approval dan tetapkan role admin/guru melalui backend tepercaya. Rules contoh saat ini hanya fondasi awal dan bukan konfigurasi keamanan final untuk semua koleksi.

## Deployment Vercel
1. Push repository ke GitHub.
2. Import repository ke Vercel.
3. Set Node.js Version ke 26.x.
4. Masukkan seluruh environment variable dari `.env.example` di Vercel.
5. Deploy dan periksa Authentication authorized domains.

## Catatan aset
Scene 3D memakai geometri procedural sehingga tidak memerlukan file model eksternal. Untuk karakter final yang memiliki animasi skeletal, siapkan aset GLB/GLTF original berlisensi dan animation clips yang sesuai.
