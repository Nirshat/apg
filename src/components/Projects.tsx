// import '../../public/projImages'

import useProjectsStore from "../stores/useProjectsStore";

interface Mode {
  mode: string;
}

const Projects = ({ mode }: Mode) => {

  // from zustand store
  let {projArr} = useProjectsStore();

  return (
    <>
      <div className="projList" id="proj">
        {projArr.map((val, index) => (
          <div
            // id={mode === "light" ? "cardbox-L" :"cardbox-D"}
            // className="card"
            className={mode === "light" ? "card" : "card text-bg-dark"}
            key={index}
          >
            <img src={val.prev} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">{val.descr}</p>
              <div className="techs">
                {val.techs.map((tech, index) => (
                  <div key={index}>{tech}</div>
                ))}
              </div>
            </div>

            <div
              // id={mode === "light" ? "cadfuta-L" : "cadfuta-D"}
              // className="card-footer"
              className={
                mode === "light" ? "card-footer" : "card-footer text-bg-dark"
              }
            >
              {/* Repository */}
              {val.repo !== "" ? (
                <a target="_blank" href={val.repo} className="btn btn-success">
                  Github <i className="fa-brands fa-github"></i>
                </a>
              ) : (
                <button className="btn btn-success">
                  Github <i className="fa-brands fa-github"></i>
                </button>
              )}


              {/* Live Demo */}
              {val.link !== "" ? (
                <a
                  target="_blank"
                  href={val.link}
                  className="btn btn-secondary"
                >
                  Demo{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              ) : (
                <button className="btn btn-secondary">
                  Demo{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;

// {
//   repo: "https://github.com/Nirshat/weather-site",
//   link: "https://nirshat.github.io/weather-site/",
//   title: "Weather Site",
//   prev: "projImages/weather-site.png",
//   descr: "is a minimal site that provides weather information of a certain location through api calls. ",
//   techs: ["React", "TypeScript", "Vanilla CSS", "OpenWeather api"],
// },
