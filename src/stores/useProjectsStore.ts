
import { create } from "zustand"

const useProjectsStore = create(() => (
  {
    projArr: [
      {
        repo: "https://github.com/Nirshat/coffeehub",
        link: "https://nirshat.github.io/coffeehub/",
        title: "CoffeeHub",
        prev: "projImages/coffeehub.png",
        descr:
          "is a minimal mock-up website design to showcase my front-end skills.",
        techs: ["React", "TypeScript", "SCSS"],
      },
      {
        repo: "https://github.com/Nirshat/to-do-list",
        link: "https://nirshat.github.io/to-do-list/",
        title: "To-Do List",
        prev: "projImages/todo.png",
        descr:
          "is a simple website designed to help users manage and organize their tasks effectively.",
        techs: ["React", "TypeScript", "Material UI", "Bootstrap", "CSS"],
      },
      {
        repo: "",
        link: "",
        title: "Alumni Tracking (capstone)",
        prev: "projImages/ac-dash.png",
        descr:
          "is a web app that organizes alumni data and allows the admin to post an announcement of events.",
        techs: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "Bootstrap"],
      },
      {
        repo: "",
        link: "",
        title: "Alumni Portal (capstone)",
        prev: "projImages/alumni-website.png",
        descr:
          "is a portal site that contains announcement of events and allows the alumni to update their status info.",
        techs: ["HTML", "Vanilla CSS", "Javascript", "PHP", "MySQL"],
      },
      {
        repo: "https://github.com/Nirshat/movpichub",
        link: "https://nirshat.github.io/movpichub/",
        title: "MovPicHub",
        prev: "projImages/movpichub.png",
        descr:
          "is a minimal website that simply renders posters of movie through api calls based from your search.",
        techs: ["React", "TypeScript", "Vanilla CSS", "OMDb API"],
      },
      {
        repo: "",
        link: "https://nirshat.github.io/stellarquiz/",
        title: "StellarQuiz",
        prev: "projImages/stlrqz.png",
        descr:
          "is a celestial-themed quiz website designed to challenge your knowledge in astronomy.",
        techs: ["React", "TypeScript", "Material UI", "CSS"],
      },
      {
        repo: "https://github.com/Nirshat/quo-gen",
        link: "https://nirshat.github.io/quo-gen/",
        title: "Random Quotes Generator",
        prev: "projImages/rqg.png",
        descr: "is a website that generates random quotes through api calls.",
        techs: ["React", "TypeScript", "Vanilla CSS", "quotable api"],
      },
    ],
  }
));

export default useProjectsStore