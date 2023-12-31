
import { create } from "zustand"

type State = {
  projArr: {
    id: string
    repo: string
    link: string
    title: string
    prev: string
    descr: string
    techs: string[]
    devtype: string
  }[]
}


const useProjectsStore = create<State>(() => (
  {
    projArr: [
      {
        id: "chef",
        repo: "https://github.com/Nirshat/chefweb",
        link: "https://nirshat.github.io/chefweb/",
        title: "ChefWeb",
        prev: "projImages/chefweb.png",
        descr: "is an online resource for meal recipes, ingredients, and step-by-step cooking instructions.",
        techs: ["themealdb api", "React", "TypeScript", "Axios", "Zustand", "Tailwind", "SCSS"],
        devtype: "Rest API with Frontend",
      },
      {
        id: "et",
        repo: "https://github.com/Nirshat/expense-tracker",
        link: "https://nirshat.github.io/expense-tracker/",
        title: "Expense Tracker",
        prev: "projImages/expense.png",
        descr: "is a minimal app that helps you to track your expenses with log histories.",
        techs: ["React", "TypeScript", "Tailwind", "Zustand"],
        devtype: "Frontend Development",
      },
      {
        id: "tdl",
        repo: "https://github.com/Nirshat/to-do-list",
        link: "https://nirshat.github.io/to-do-list/",
        title: "To-Do List",
        prev: "projImages/todo.png",
        descr:
          "is a minimal app designed to help users manage and organize their tasks effectively.",
        techs: ["React", "TypeScript", "Material UI", "Bootstrap", "CSS"],
        devtype: "Frontend Development",
      },
      {
        id: "ch",
        repo: "https://github.com/Nirshat/coffeehub",
        link: "https://nirshat.github.io/coffeehub/",
        title: "CoffeeHub",
        prev: "projImages/coffeehub.png",
        descr:
          "is a minimal landing page of a coffee website that i developed just to enhance my frontend skills.",
        techs: ["React", "TypeScript", "SCSS"],
        devtype: "Frontend Development",
      },
      {
        id: "mph",
        repo: "https://github.com/Nirshat/movpichub",
        link: "https://nirshat.github.io/movpichub/",
        title: "MovPicHub",
        prev: "projImages/movpichub.png",
        descr:
          "is a minimal website that simply renders posters of movie through api calls based from your search.",
        techs: ["React", "TypeScript", "Vanilla CSS", "OMDb API"],
        devtype: "Rest API with Frontend",
      },
      {
        id: "phvq",
        repo: "https://github.com/Nirshat/phvistaquest",
        link: "https://nirshat.github.io/phvistaquest/",
        title: "PH Vista Quest",
        prev: "projImages/phquest.png",
        descr: "is a simple landing page with banners of some beautiful places in philippines that i developed just to enhance my frontend skills.",
        techs: ["React", "TypeScript", "SCSS", "Glassmorphism"],
        devtype: "Frontend Development",
      },
      {
        id: "atc",
        repo: "",
        link: "",
        title: "Alumni Tracker (capstone)",
        prev: "projImages/ac-dash.png",
        descr:
          "is a web app that organizes alumni data and allows the admin to post an announcement of events.",
        techs: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "Bootstrap", "DataTables", "Apex chart"],
        devtype: "Fullstack Development",
      },
      {
        id: "apc",
        repo: "",
        link: "",
        title: "Alumni Portal (capstone)",
        prev: "projImages/alumni-website.png",
        descr:
          "is a portal site that contains announcement of events and allows the alumni to update their status info.",
        techs: ["HTML", "Vanilla CSS", "Javascript", "PHP", "MySQL"],
        devtype: "Fullstack Development",
      },
      {
        id: "stq",
        repo: "",
        link: "https://nirshat.github.io/stellarquiz/",
        title: "StellarQuiz",
        prev: "projImages/stlrqz.png",
        descr:
          "is a celestial-themed quiz site designed to challenge your knowledge in astronomy.",
        techs: ["React", "TypeScript", "Material UI", "CSS"],
        devtype: "Frontend Development",
      },
      {
        id: "rqg",
        repo: "https://github.com/Nirshat/quo-gen",
        link: "https://nirshat.github.io/quo-gen/",
        title: "Random Quotes Generator",
        prev: "projImages/rqg.png",
        descr: "is a minimal site that generates random quotes through api calls.",
        techs: ["quotable api", "React", "TypeScript", "Axios", "Vanilla CSS"],
        devtype: "Rest API with Frontend",
      },
    ]
  }
));

export default useProjectsStore


// {
//   repo: "https://github.com/Nirshat/weather-site",
//   link: "https://nirshat.github.io/weather-site/",
//   title: "Weather Site",
//   prev: "projImages/weather-site.png",
//   descr: "is a minimal site that provides weather information of a certain location through api calls. ",
//   techs: ["React", "TypeScript", "Vanilla CSS", "OpenWeather api"],
// },