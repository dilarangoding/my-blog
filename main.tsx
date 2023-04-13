/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Riyon Aryono",
  description: "Pendengar Bossa Nova.",
  avatar: "assets/profile.jpg",
  avatarClass: "full",
  author: "Riyon Aryono",
  lang:"id",
  links: [
    { title: "Email", url: "mailto:riyonaryono14@gmail.com" },
    { title: "GitHub", url: "https://github.com/dilarangoding" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/riyonaryono/" },
  ],
  favicon: "assets/favicon.ico",
  middlewares: [
    ga("G-PMYYQYQ8JJ"),
  ]
});
