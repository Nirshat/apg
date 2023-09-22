
import { create } from "zustand"

const useSkillsStore = create(() => (
  {
    frontend : [
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
        tech: "JavaScript",
        // src: "images/js.png",
        src: "https://skillicons.dev/icons?i=js",
      },
      {
        tech: "Bootstrap",
        // src: "images/bootstrap.png",
        src: "https://skillicons.dev/icons?i=bootstrap",
      },
      {
        tech: "Tailwind",
        // src: "images/typescript.png",
        src: "https://skillicons.dev/icons?i=tailwind",
      },
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
        tech: "SCSS",
        src: "https://skillicons.dev/icons?i=scss",
      },
      {
        tech: "MUI",
        // src: "images/typescript.png",
        src: "https://skillicons.dev/icons?i=mui",
      },
    ],


    backend: [
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
        tech: "Laravel",
        // src: "images/laravel.png",
        src: "https://skillicons.dev/icons?i=laravel",
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
        tech: "Python",
        // src: "images/laravel.png",
        src: "https://skillicons.dev/icons?i=python",
      },
    ],
    

    others: [
      {
        tech: "Vite.js",
        // src: "images/vite.png",
        src: "https://skillicons.dev/icons?i=vite",
      },
      {
        tech: "Postman",
        src: "https://skillicons.dev/icons?i=postman",
      },
      {
        tech: "Git",
        // src: "images/git.png",
        src: "https://skillicons.dev/icons?i=git",
      },
      {
        tech: "GitHub",
        // src: "images/github.png",
        src: "https://skillicons.dev/icons?i=github",
      },
      {
        tech: "XAMPP",
        src: "images/xampp.png",
      },
    ],
  }
));

export default useSkillsStore