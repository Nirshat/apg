// import '../../public/projImages'


interface Mode{
  mode:string;
}

const Projects = ({mode}: Mode) => {
  let projArr = [
    {
      repo: "https://github.com/Nirshat/to-do-list",
      link: "https://nirshat.github.io/to-do-list/",
      title: "To-Do List",
      prev: "projImages/todo.png",
      descr: "Is a simple website designed to help users manage and organize their tasks effectively.",
      techs: ["React", "TypeScript", "Material UI", "Bootstrap", "CSS"],
    },
    {
      repo: "",
      link: "https://nirshat.github.io/stellarquiz/",
      title: "StellarQuiz",
      prev: "projImages/stlrqz.png",
      descr: "Is a celestial-themed quiz website designed to challenge your knowledge in astronomy.",
      techs: ["React", "TypeScript", "Material UI",  "CSS"],
    },
    {
      repo: "https://github.com/Nirshat/quo-gen",
      link: "https://nirshat.github.io/quo-gen/",
      title: "Random Quotes Generator",
      prev: "projImages/rqg.png",
      descr: "Is a website that generates random quotes through api calls.",
      techs: ["React", "TypeScript", "Vanilla CSS", "Quotable api"],
    },
    {
      repo: "https://github.com/Nirshat/BCCATS",
      link: "https://github.com/Nirshat/BCCATS",
      title: "Alumni Tracking (capstone)",
      prev: "projImages/ac-dash.png",
      descr:
        "Is a web app that organizes alumni data and allows the admin to post an announcement of events.",
      techs: ["HTML", "CSS", "JS", "PHP", "MySQL", "Bootstrap"],
    },
    {
      repo: "https://github.com/Nirshat/BCCATS",
      link: "https://github.com/Nirshat/BCCATS",
      title: "Alumni Website (capstone)",
      prev: "projImages/alumni-website.png",
      descr:
        "Is a portal site that contains announcement of events and allows the alumni to update their status info.",
      techs: ["HTML", "Vanilla CSS", "JS", "PHP", "MySQL"],
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
