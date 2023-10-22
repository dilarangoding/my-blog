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
Suatu hari, gue lagi ngulik Node.Js, terus gue nemu repo punyanya si bapak Ryan Dahl yang ngebuat si Node.Js ini. Nah, beliau nyantumin link website di akun GitHubnya, dan pas gue klik, gue langsung tertarik buat juga. Di artikel ini, gue gak bahas si Node.JS, melainkan Deno.JS. Kita bakal ngebuat static markdown blog pake Deno, lalu deploy ke server punya Deno sendiri, yaitu Deno Deploy, dan itu GRATIS!

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
Hal pertama yang lo harus lakuin adalah install Deno di laptop/dekstop lo. Caranya cukup gampang.

Buat pengguna Windows, lo bisa ketik perintah berikut di CMD/PowerShell:
```cmd
irm https://deno.land/install.ps1 | iex
```

Sementara buat pengguna MacOs dan Linux, lo bisa ketik perintah ini di terminal:
```cmd
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Nah, tinggal lo tunggu sebentar. Buat ngecek apakah Deno udah terinstall di mesin lo, lo bisa ketik perintah ini:

![](/posts/img/pic-2-deno-version.png)

Kalo muncul seperti gambar di atas, berarti Deno udah terinstall di mesin komputer lo.

## Install dan Setup Blog
Setelah lo install Deno di mesin lo, sekarang lo juga perlu install modul Deno Blog. Lo bisa ketik perintah berikut:
```cmd
deno run -r --allow-read --allow-write https://deno.land/x/blog/init.ts tulisin-nama-blog-lo/
```

![](/posts/img/pic-3-install-deno-blog.png)

## Struktur Folder Deno Blog
Hal yang paling gue suka dari Deno Blog adalah struktur folder yang simpel. Lo cuma butuh 4 file aja buat bikin blog lo sendiri.

![](/posts/img/pic-4-struktur-file-deno.png)

Sekarang, mari kita pahami masing-masing file di atas:
Penjelasan gue soal file-file di Deno udah bener.

- **deno.jsonc**: Ini adalah file yang digunakan untuk menambahkan tugas dan mengimpor file ImportMap. Dalam tugas ini, lo bisa menentukan berbagai hal seperti port yang digunakan untuk menjalankan server, dan sebagainya. ImportMap digunakan untuk mengimpor semua paket atau modul yang dibutuhkan oleh proyek Deno lo.
- **import_map.json**: File ini berisi daftar modul dan paket yang diperlukan oleh proyek lo. Deno akan menggunakan ImportMap untuk mengimpor paket-paket ini saat proyek dijalankan.
- **Posts**: Ini adalah folder tempat lo akan menyimpan semua artikel blog lo dalam format file markdown (.md). Setiap artikel blog akan menjadi file terpisah dalam folder ini.
- **main.tsx**: File ini berisi semua konfigurasi untuk blog lo. Di dalamnya, lo dapat mengatur judul blog, deskripsi, tema, avatar, dan berbagai pengaturan lainnya yang berkaitan dengan penampilan dan perilaku blog lo.

## Jalanin Deno Blog di Komputer Lokal
Sekarang, lo bisa ngejalanin blog di komputer lokal lo dengan cara ketik perintah berikut:
```cmd
deno task dev
```
![](/posts/img/pic-5-deno-run.png)

Setelah menjalankan perintah di atas, lo bisa mengakses blog lo secara lokal melalui http://localhost:8000/ dan tampilannya akan seperti ini:

![](/posts/img/pic-6-priview-deno-loca.png)

Dengan menjalankan perintah di atas, lo dapat menguji dan melihat tampilan blog lo secara lokal sebelum mendeploynya ke server Deno.

## Konfigurasi Tambahan ke Dalam Blog Lo
Lo bisa ganti konfigurasi bawaan dari Deno Blog sesuai dengan keinginan lo. Konfigurasi default dari Deno Blog seperti berikut:
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

Lo dapat menyesuaikan konfigurasi ini dengan mengganti nilai-nilai seperti title, description, avatar, dan lainnya sesuai dengan preferensi lo. Lo juga bisa menambahkan kode kustom di dalamnya untuk mengatur penampilan blog lo lebih lanjut. Misalnya:

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

Untuk custom section footer, pertama lo buat folder Components kalau belum ada, lalu di dalam folder tersebut lo buat file Footer.jsx dengan kode berikut:
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

Untuk membuat artikel menggunakan format Markdown dalam proyek Deno Blog, Lo perlu mengikuti struktur yang sesuai dengan format front matter (metadata) dan konten artikel. Berikut adalah contoh struktur artikel dalam format Markdown:

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

Penting untuk dicatat bahwa elemen-elemen seperti judul (title), tanggal publikasi (publish_date), dan deskripsi (description) harus selalu disertakan dalam file Markdown lo

## Deploy Blog Lo Biar Orang Lain Bisa Liat
Sekarang, setelah semua langkah tersebut selesai, saatnya untuk mendeploy blog lo ke Deno. Salah satu hal yang gue suka tentang Deno Deploy adalah bahwa mereka menyediakan spesifikasi yang sangat baik dan yang terpenting, itu GRATIS! Untuk mendeploy blog lo ke Deno Deploy, lo harus membuat akun di [Deno Deploy](https://deno.com/deploy) dan juga pastikan lo punya akun GitHub. Ini diperlukan agar Deno Deploy dapat terhubung ke repository blog lo.

### Login Deno Deploy
Langkah pertama, lo kunjungi [Deno Deploy](https://deno.com/deploy). Jika lo belum punya akun, silakan lo buat akun terlebih dahulu. Jika sudah memiliki akun, langsung saja login ke akun Deno Deploy lo

![](/posts/img/pic-8-step-0.png)

### Buat Project Baru
Setelah login, lo akan diarahkan ke dashboard Deno. Di sana, lo bisa klik tombol 'New Project'.

![](/posts/img/step-1.png)

### Konfigurasi repo github
Setelah lo mengklik 'New Project', lo akan diarahkan ke langkah konfigurasi yang melibatkan pengaturan repo GitHub dan variabel lingkungan (environment variable).

![](/posts/img/step-2.png)

1. Pilih repo GitHub dari proyek blog lo.
2. Setelah lo memilih repo, pilih branch yang sesuai, dan pilih file `main.tsx`.
3. Beri nama proyek lo, pastikan nama proyek menggunakan huruf kecil dan pisahkan kata dengan tanda "-" jika terdiri dari lebih dari satu kata.
4. Klik "Add Environment Variable" dan tambahkan variabel lingkungan (opsional).
5. Terakhir, klik tombol "Link" dan tunggu hingga proses selesai.

### Website Lo Sudah Publish!
Setelah menyelesaikan konfigurasi di atas, website lo sudah dapat diakses, dan orang lain juga dapat mengaksesnya untuk memeriksanya. Lo cukup klik tombol 'View' di bagian atas kanan.

![](/posts/img/pic-9-dash-project.png)

Lo juga bisa menyesuaikan domain milik lo sendiri, asalkan lo sudah membeli domain tersebut terlebih dahulu. Caranya, pergi ke menu 'Settings,' lalu scrol ke bawah hingga menemukan bagian 'Domain.' Setelah itu, klik tombol 'Add Domain.' Lo akan diminta untuk mengubah DNS record dari domain yang lo miliki. Setelah lo mengubahnya, jangan lupa untuk mengklik 'Validate'.

![](/posts/img/pic-10-custom-domain.png)

Selamat, blog lo sudah dipublikasikan! Oh, juga buat lo yang menggunakan teks editor VS Code, gue punya tip buat lo. Lo bisa menggunakan ekstensi [FrontMatter](https://frontmatter.codes/docs) untuk mempermudah saat lo membuat file Markdown. Dan yaudah gitu aja.

#### Refrensi Bacaan Buat Blog Lo
- [Deno Deploy](https://deno.com/deploy)
- [Deno Blog](https://deno.land/x/blog@0.5.0)
- [FrontMatter](https://frontmatter.codes/docs)
