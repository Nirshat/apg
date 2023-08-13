// import '../../public/projImages'

const Projects = () => {
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
        "Is a portal site for alumni that contains announcement of events and allows the user to update their employment status.",
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
          <div id="pDiv" key={index}>
            <div className="projTitle">{val.title}</div>
            <div id="divprev">
              <img src={val.prev} alt="" id="projprev" />
            </div>
            <p className="descProj"> {val.descr} </p>
            <div id="belowbox">
              <div id="techs">
                {val.techs.map((tech, index) => (
                  <div key={index}>{tech}</div>
                ))}
              </div>

              <div className="ext">
                <a target="_blank" href={val.repo} id="repo">
                  <div  id="projsrcbox">
                    <i className="fa-solid fa-code-branch"></i>
                  </div>
                </a>
                <a target="_blank" href={val.link} id="projsrc">
                  <div  id="projsrcbox">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
