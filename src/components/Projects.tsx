import { useState } from "react";
import "../../public/scss/projects.scss";

import useProjectsStore from "../stores/useProjectsStore";


const Projects = () => {
  // from zustand store
  let { projArr } = useProjectsStore();

  const [actives, setActives] = useState<String[]>([]);

  const toggle = (id:string) => {
    if(!actives.includes(id)){
      setActives([...actives, id]);
    }
    else{
      const inactive = actives.filter(actives => actives !== id);
      setActives((prevActives) => prevActives = inactive);
    }
  }


  return (
    <>
      <div className="accord" id="proj">
        {projArr.map((val, index) => (
          <div key={index} className="accord-item dark">
            <div
              className="head"
              onClick={() =>
                toggle(val.id)
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
                <i className={actives.includes(val.id) ? "fa-solid fa-angle-down active" : "fa-solid fa-angle-down"}></i>
              </div>
            </div>

            <div className={actives.includes(val.id) ? "body-active" : "body"}>
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
