/** @jsx h */

import blog, { ga, redirects, h} from "https://deno.land/x/blog@0.5.0/blog.tsx";
import { Footer } from './components/Footer.jsx';
import "https://deno.land/x/dotenv@v3.2.0/load.ts";


blog({
  title: "Riyon Aryono",
  author: "Riyon Aryono",
  description: "Pendengar Bossa Nova.",
  avatar: "assets/profile.jpg",
  favicon: "assets/favicon.ico",
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

  //   middlewares: [
//     ga("G-PMYYQYQ8JJ"),
//   ]
});
