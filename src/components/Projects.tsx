import "../../public/scss/projects.scss";

import useProjectsStore from "../stores/useProjectsStore";

const Projects = () => {
  // from zustand store
  let { projArr, toggling } = useProjectsStore();

  const toggle = (ind:number) => {
    toggling(ind);
  }

  return (
    <>
      <div className="accord" id="proj">
        {projArr.map((val, index) => (
          <div key={index} className="accord-item dark">
            <div
              className="head"
              onClick={() =>
                toggle(index)
              }
            >
              <div className="infobox">
                <img src={val.prev} alt="" />
                <div className="texts">
                  <span className="title">{val.title}</span>
                  <span className="sub">{val.devtype}</span>
                </div>                
              </div>
              <div className="icon">
                <i className={val.active === true ? "fa-solid fa-angle-down active" : "fa-solid fa-angle-down"}></i>
              </div>
            </div>

            <div className={val.active === true ? "body-active" : "body"}>
              <p>{val.descr}</p>
              <div className="techs">
                {val.techs.map((t, index) => (
                  <span key={index}>{t}</span>
                ) )}
              </div>
              <div className="footer">
                {val.repo !== "" ? (<a target="_blank" href={val.repo} className="btn btn-success">GitHub</a>) : null}
                
                {val.link !== "" ? (<a target="_blank" href={val.link} className="btn btn-dark">Demo</a>) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
