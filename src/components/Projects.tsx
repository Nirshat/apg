// import '../../public/projImages'


interface Mode{
  mode:string;
}

const Projects = ({mode}: Mode) => {
  let projArr = [
    {
      repo: "https://github.com/Nirshat/quo-gen",
      link: "https://nirshat.github.io/quo-gen/",
      title: "Random Quotes Generator",
      prev: "projImages/rqg.png",
      descr: "Is a website that generates random quotes from api.",
      techs: ["React", "TypeScript", "Vanilla CSS"],
    },
    {
      repo: "https://github.com/Nirshat/BCCATS",
      link: "https://github.com/Nirshat/BCCATS",
      title: "Alumni Tracking (capstone)",
      prev: "projImages/ac-dash.png",
      descr:
        "Is a web application for administrator that organizes alumni data and allows the user to post an announcement of events.",
      techs: ["HTML", "CSS", "JS", "PHP", "MySQL", "Bootstrap"],
    },
    {
      repo: "https://github.com/Nirshat/BCCATS",
      link: "https://github.com/Nirshat/BCCATS",
      title: "Alumni Website (capstone)",
      prev: "projImages/alumni-website.png",
      descr:
        "Is a portal site for alumni that contains announcement of events and allows the user to update their status info.",
      techs: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    },
  ];

  return (
    <>
      <div className="projList" id="proj">
        {projArr.map((val, index) => (

          <div className={mode === "light" ? 'card' : 'card text-bg-dark'}  key={index}>
            <img src={val.prev} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><a id={mode === "light" ? 'linklight' : 'linkdark'} target="_blank" href={val.link}>{val.title}</a></h5>
              <p className="card-text">{val.descr}</p>
            </div>

            <div className={mode === "light" ? 'card-footer' : 'card-footer text-bg-dark'} >
              <a target="_blank" href={val.repo} className="btn btn-success">Github <i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
