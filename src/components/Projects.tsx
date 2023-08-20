// import '../../public/projImages'


interface Mode{
  mode:string;
}

const Projects = ({mode}: Mode) => {
  let projArr = [
    {
      repo: "https://github.com/Nirshat/BCCATS",
      link: "https://github.com/Nirshat/BCCATS",
      aos: "zoom-in-right",
      title: "Alumni Tracking (capstone)",
      prev: "projImages/ac-dash.png",
      descr:
        "Is a web application for administrator that organizes alumni data and allows the user to post an announcement of events.",
      techs: ["HTML", "CSS", "JS", "PHP", "MySQL", "Bootstrap"],
    },
    {
      repo: "https://github.com/Nirshat/BCCATS",
      link: "https://github.com/Nirshat/BCCATS",
      aos: "zoom-in-right",
      title: "Alumni Website (capstone)",
      prev: "projImages/alumni-website.png",
      descr:
        "Is a portal site for alumni that contains announcement of events and allows the user to update their status info.",
      techs: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    },
    {
      repo: "https://github.com/Nirshat/to-do-list",
      link: "https://nirshat.github.io/to-do-list/",
      aos: "zoom-in-right",
      title: "Simple To-Do List",
      prev: "projImages/todolist.png",
      descr: "Is a simple to-do-list app to manage and organize tasks.",
      techs: ["HTML", "CSS", "JS"],
    },
    {
      repo: "https://github.com/Nirshat/simpleos.github.io",
      link: "https://nirshat.github.io/simpleos.github.io/index.html",
      aos: "zoom-in-right",
      title: "Simple Food Ordering",
      prev: "projImages/spos.png",
      descr:
        "Is a simple food ordering that will automatically compute total amount of order and change.",
      techs: ["HTML", "CSS", "JS"],
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
