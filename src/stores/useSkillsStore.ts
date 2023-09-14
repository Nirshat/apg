
import { create } from "zustand"

const useSkillsStore = create(() => (
  {
    frontend : [
      {
        tech: "HTML",
        // src: "images/html.png",
        src: "https://skillicons.dev/icons?i=html",
      },
      {
        tech: "CSS",
        // src: "images/css.png",
        src: "https://skillicons.dev/icons?i=css",
      },
      {
        tech: "JavaScript",
        // src: "images/js.png",
        src: "https://skillicons.dev/icons?i=js",
      },
      {
        tech: "React",
        // src: "images/react.png",
        src: "https://skillicons.dev/icons?i=react",
      },
      {
        tech: "TypeScript",
        // src: "images/typescript.png",
        src: "https://skillicons.dev/icons?i=ts",
      },
      {
        tech: "SCSS",
        src: "https://skillicons.dev/icons?i=scss",
      },
      {
        tech: "Bootstrap",
        // src: "images/bootstrap.png",
        src: "https://skillicons.dev/icons?i=bootstrap",
      },
      {
        tech: "MUI",
        // src: "images/typescript.png",
        src: "https://skillicons.dev/icons?i=mui",
      },
      {
        tech: "Tailwind",
        // src: "images/typescript.png",
        src: "https://skillicons.dev/icons?i=tailwind",
      },
    ],


    backend: [
      {
        tech: "Python",
        // src: "images/laravel.png",
        src: "https://skillicons.dev/icons?i=python",
      },
      {
        tech: "MySQL",
        // src: "images/mysql.png",
        src: "https://skillicons.dev/icons?i=mysql",
      },
      {
        tech: "Php",
        // src: "images/php.png",
        src: "https://skillicons.dev/icons?i=php",
      },
      {
        tech: "Node.js",
        // src: "images/nodejs.png",
        src: "https://skillicons.dev/icons?i=nodejs",
      },
      {
        tech: "Express.js",
        // src: "images/expressjs.png",
        src: "https://skillicons.dev/icons?i=express",
      },
      {
        tech: "Laravel",
        // src: "images/laravel.png",
        src: "https://skillicons.dev/icons?i=laravel",
      },
    ],
    

    others: [
      {
        tech: "XAMPP",
        src: "images/xampp.png",
      },
      {
        tech: "Canva",
        src: "images/canva.jpg",
      },
      {
        tech: "Vite.js",
        // src: "images/vite.png",
        src: "https://skillicons.dev/icons?i=vite",
      },
      {
        tech: "GitHub",
        // src: "images/github.png",
        src: "https://skillicons.dev/icons?i=github",
      },
      {
        tech: "Git",
        // src: "images/git.png",
        src: "https://skillicons.dev/icons?i=git",
      },
      {
        tech: "Postman",
        src: "https://skillicons.dev/icons?i=postman",
      },
    ],
  }
));

export default useSkillsStore