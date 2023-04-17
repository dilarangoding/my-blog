---
title: Buat Blog Pribadi Lo Kurang Dari 5 Menit Pake Deno Blog
description: Cara buat blog markdown menggunakan deno blog dan deploy ke Deno Deploy
author: Riyon Aryono
publish_date: 2023-04-18
tags:
  - blog
  - deno
  - javascript
categories:
  - tech
keywords:
  - buat deno blog
  - make deno blog
  - buat static blog
slug: buat-blog-pribadi-lo-kurang-dari-5-menit-pake-deno-blog
---
Suatu hari gue lagi ngulik Node.Js terus gue nemu repo punyanya si bapak Ryan Dahl yang ngebuat si Node.Js ini, nah beliau nyantumin link website diakun github nya dan pas gue klik gue langsung tertarik mau buat juga. Diartikel ini gue ga bahas si Node.JS melainkan Deno.JS  kita akan ngebuat static makdown blog Deno lalu deploy ke server punya nya si Deno yaitu Deno Deploy dan itu GRATIS!!!

*btw node itu kalo dibalik jadi deno

![](/posts/img/pic-1-tutorial-deno.png)

Lo bisa cek repo gue [disini](https://github.com/dilarangoding/my-blog)

Daftar Isi
- [Install Dulu Deno Ke Mesin Komputer Lo](#install-dulu-deno-ke-mesin-komputer-lo)
- [Install dan Setup Blog](#install-dan-setup-blog)
- [Struktur Folder Deno Blog](#struktur-folder-deno-blog)
- [Jalanin Deno Blog di Komputer Lokal](#jalanin-deno-blog-di-komputer-lokal)
- [Konfigurasi Tambahan ke Dalam Blog Lo](#konfigurasi-tambahan-ke-dalam-blog-lo)
- [Deploy Blog Lo Biar Orang Lain Bisa Liat](#deploy-blog-lo-biar-orang-lain-bisa-liat)

## Install Dulu Deno ke Mesin Komputer Lo
Hal yang harus dilakukan pertama kali adalah install deno ke laptop/dekstop lo cara nya cukup mudah

Untuk windows lo bisa ketikan perintah berikut di CMD/PowerSheel
```cmd
irm https://deno.land/install.ps1 | iex
```

untuk MacOs dan Linux bisa ketikan perintah ini di terminal
```cmd
curl -fsSL https://deno.land/x/install/install.sh | sh
```

nah tunggu beberapa saat. Untuk mengecek apakah deno sudah terinstall dimesin lo bisa ketikan perintah ini

![](/posts/img/pic-2-deno-version.png)

Kalo muncul seperti gambar di atas berarti deno sudah terinstall di mesin komputer lo.

## Install dan Setup Blog
Setalah lo install Deno di mesin lo sekarang lo juga perlu install Deno Blog Module. Lo bisa ketikan perintah berikut
```cmd
deno run -r --allow-read --allow-write https://deno.land/x/blog/init.ts tulisin-nama-blog-lo/
```

![](/posts/img/pic-3-install-deno-blog.png)

## Struktur Folder Deno Blog
Hal yang paling gue suka dari Deno Blog adalah struktur folder yang simpel. Lo cuma butuh 4 file aja buat bikin blog lo sendiri.

![](/posts/img/pic-4-struktur-file-deno.png)

Oke sekarang kita pahamin dari setiap file diatas
- deno.jsonc: file ini untuk menambahakn task dan mengimport file ImportMap
- import_map.json: file ini digunakan untuk mengimport semua package dari Deno untuk ngejalanin project lo
- Posts: di folder ini nanti nya akan berisi file file artikel lo yang ekstensi nya .md atau markdown file
- main.tsx: ini adalah file yang berisi untuk  semua konfigurasi dari blog lo

## Jalanin Deno Blog di Komputer Lokal
Sekarang lo bisa ngejalanin blog di komputer lokal lo dengan cara ketikan perintah berikut
```cmd
deno task dev
```
![](/posts/img/pic-5-deno-run.png)

Setelah ngejalanin perintah diatas lo bisa akses http://localhost:8000/ dan tampilanya akan  seperti ini

![](/posts/img/pic-6-priview-deno-loca.png)

## Konfigurasi Tambahan ke Dalam Blog Lo
Lo bisa ganti konfigurasi bawaan dari deno blog. Untuk default konfigurasi dari deno blog seperti ini
```javascript
/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "My Blog",
  description: "This is my new blog.",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "An author",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});

```

Kustom Konfigurasi

![](posts/img/pic-7-deno-custom.png)

Lo bisa Kustom konfigurasi bawan Deno Blog sesuai sama apa  yang lo mau, contoh nya gue ubah title, tema, author dll lo juga bisa custom style, link dan section. Disini gue custom section footer untuk kode nya lo bisa cek dibawah

**File main.tsx**
```javascript
/** @jsx h */

import blog, { ga, redirects, h } from "blog";
import { Footer } from './components/Footer.jsx';


blog({
    title: "Riyon Aryono",
    author: "Riyon Aryono",
    description: "Pendengar Bossa Nova.",
    avatar: "assets/profile.svg",
    favicon: "assets/profile.svg",
    avatarClass: "full",
    theme:"dark",
    links: [
        { title: "Email", url: "mailto:riyonaryono14@gmail.com" },
        { title: "GitHub", url: "https://github.com/dilarangoding" },
        { title: "Linkedin", url: "https://www.linkedin.com/in/riyonaryono/" },
      ],
    lang:"id-Id",
    footer: <Footer />,
    style: `ul { list-style: disc; } ol { list-style: decimal; } iframe { aspect-ratio:16/9; }`,
  });
```

Untuk custom section footer nya pertama lo buat folder Components/Footer.jsx, dan ini untuk kode nya
```javascript
/** @jsx h */
import { h } from "blog";

export  function Footer() {
  return (
    <footer class="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
      <p class="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm">
        <span>© {(new Date().getFullYear())} - Made with ❤ by Riyon Aryono</span>
        ·
        <a href="/feed" class="inline-flex items-center gap-1 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" title="Atom Feed"><svg class="inline-block w-4 h-4" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path><path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path></svg> RSS</a>
      </p>

      <script dangerouslySetInnerHTML={{ __html: `
        window.addEventListener('load', () => {
          if (window.location.pathname !== '/') {
            return;
          };

          window.requestIdleCallback = window.requestIdleCallback || function (cb) {
            const start = Date.now();
            return setTimeout(function () {
              cb({
                didTimeout: false,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - start));
                }
              });
            }, 1);
          };

          const io = new IntersectionObserver(
            async (entries) => {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  requestIdleCallback(() => {
                    document.head.insertAdjacentHTML('beforeend', '<link rel="prefetch" href="'+ entry.target.href +'" />');
                    io.unobserve(entry.target);
                  });
                }
              });
            }
          );

          Array.from(document.querySelectorAll('h3 a'))
            .forEach(link => io.observe(link));
        });
      `}} />
    </footer>
  );
}
```

Untuk post artikel karena kita menggunakan blog markdown maka untuk ngebuat artikel lo harus menggunakan ekstensi .md. Struktur dari markdown nya seperti ini

![](/posts/img/struktur.png)

```javascript
---
title: Hello world!
author : "dilarangoding"
publish_date: 2023-04-17
description: "Deksripsi Artikel Lo"
og:image: "https://deno-avatar.deno.dev/avatar/fc1dd4.svg"
tags : ["Deno"]
cover_html: <img src="https://deno-avatar.deno.dev/avatar/fc1dd4.svg" alt="Hello World" />

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

```

Nah untuk title, publish_date, dan description wajib tercantum di field markdown file lo

## Deploy Blog Lo Biar Orang Lain Bisa Liat
Nah setelah hal itu semua selesai kita lakukan sekarang waktu nya deploy blog lo ke Deno, yang gue suka dari Deno deploy mereka ngasih spesifikasi yang lebih dari cukup dan GRATIS!. Untuk deploy blog lo ke Deno, lo harus ngebuat akun di [Deno Deploy](https://deno.com/deploy) dan buat akun github untuk nantinya Deno Deploy connect ke repo blog lo

### Login Deno Deploy
Pertama, lo pergi ke [Deno Deploy](https://deno.com/deploy) kalo lo belum buat akun silahkan lo buat terlebih dahulu kalau sudah silahkan langsung login ke akun Deno Deploy lo

![](/posts/img/pic-8-step-0.png)

### Buat Project Baru
Setelah login lo akan diarahkan ke dalam Deno dashboard. Lo bisa klik button new project

![](/posts/img/step-1.png)

### Konfigurasi repo github
Setelah lo klik new project lo akan diarakah untuk konfigurasi repo github dan environment variable

![](/posts/img/step-2.png)

1. Pilih Repo github dari project blog lo
2. Steleh lo pilih repo, pilih branch dan pilih file main.tsx
3. Buat nama project lo pastikan nama project kecil semua dan pake (-) kalau lebih dari satu kata
4. Click add env variable dan tambah envoirment (opsional)
5. Terakhir klik button link dan tunggu proses nya sampai selesai

### Website Lo Sudah Publish!
Setelah Konfigurasi di atas selesai, website lo sudah bisa lo akses dan orang lain akses untuk mengecek nya lo bisa klik button view diatas kanan

![](/posts/img/pic-9-dash-project.png)

Lo juga bisa custom domain punya lo sendiri dengan syarat lo udah beli domain dulu. Cara nya lo pergi ke menu settings lalu scroll ke bawah sampai nemu section domain setelah itu lo klik button Add Domain, lo akan diminta untuk mengubah DNS Records dari domain bawaan lo. Setelah diubah jangan lupa klik validate

![](/posts/img/pic-10-custom-domain.png)

Selamat blog lo sudah publish. Oh iya buat lo yang pake teks editor VS Code gue ada tips buat lo. Lo bisa pake Ekstension [FrontMatter](https://frontmatter.codes/docs) buat mempermudah saat lo bikin markdown file. Dan yaudah gitu aja.

#### Refrensi Bacaan Buat Blog Lo
- [Deno Deploy](https://deno.com/deploy)
- [Deno Blog](https://deno.land/x/blog@0.5.0)
- [FrontMatter](https://frontmatter.codes/docs)
