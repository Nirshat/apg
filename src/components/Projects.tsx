// import '../../public/projImages'


interface Mode{
  mode:string;
}

const Projects = ({mode}: Mode) => {
  let projArr = [
    {
      repo: "https://github.com/Nirshat/weather-site",
      link: "https://nirshat.github.io/weather-site/",
      title: "Weather Site",
      prev: "projImages/weather-site.png",
      descr: "is a minimal site that provides weather information of a certain location through api calls. ",
      techs: ["React", "TypeScript", "Vanilla CSS", "OpenWeather api"],
    },
    {
      repo: "https://github.com/Nirshat/movpichub",
      link: "https://nirshat.github.io/movpichub/",
      title: "MovPicHub",
      prev: "projImages/movpichub.png",
      descr: "is a minimal website that simply renders posters of movie through api calls based from your search.",
      techs: ["React", "TypeScript", "Vanilla CSS", "OMDb API"],
    },
    {
      repo: "https://github.com/Nirshat/to-do-list",
      link: "https://nirshat.github.io/to-do-list/",
      title: "To-Do List",
      prev: "projImages/todo.png",
      descr: "is a simple website designed to help users manage and organize their tasks effectively.",
      techs: ["React", "TypeScript", "Material UI", "Bootstrap", "CSS"],
    },
    {
      repo: "",
      link: "https://nirshat.github.io/stellarquiz/",
      title: "StellarQuiz",
      prev: "projImages/stlrqz.png",
      descr: "is a celestial-themed quiz website designed to challenge your knowledge in astronomy.",
      techs: ["React", "TypeScript", "Material UI",  "CSS"],
    },
    {
      repo: "https://github.com/Nirshat/quo-gen",
      link: "https://nirshat.github.io/quo-gen/",
      title: "Random Quotes Generator",
      prev: "projImages/rqg.png",
      descr: "is a website that generates random quotes through api calls.",
      techs: ["React", "TypeScript", "Vanilla CSS", "quotable api"],
    },
    {
      repo: "https://github.com/Nirshat/BCCATS",
      link: "https://github.com/Nirshat/BCCATS",
      title: "Alumni Tracking (capstone)",
      prev: "projImages/ac-dash.png",
      descr:
        "is a web app that organizes alumni data and allows the admin to post an announcement of events.",
      techs: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "Bootstrap"],
    },
    {
      repo: "https://github.com/Nirshat/BCCATS",
      link: "https://github.com/Nirshat/BCCATS",
      title: "Alumni Website (capstone)",
      prev: "projImages/alumni-website.png",
      descr:
        "is a portal site that contains announcement of events and allows the alumni to update their status info.",
      techs: ["HTML", "Vanilla CSS", "Javascript", "PHP", "MySQL"],
    },
  ];

  return (
    <>
      <div className="projList" id="proj">
        {projArr.map((val, index) => (

          <div className={mode === "light" ? 'card' : 'card text-bg-dark'}  key={index}>
            <img src={val.prev} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">{val.descr}</p>
              <div className="techs">
                {val.techs.map(tech => ( <div>{tech}</div> ))}
              </div>
            </div>

            <div className={mode === "light" ? 'card-footer' : 'card-footer text-bg-dark'} id="cadfuta">
              <a target="_blank" href={val.repo} className="btn btn-success">Github <i className="fa-brands fa-github"></i></a>
              <a target="_blank" href={val.link} className="btn btn-secondary">
                Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
