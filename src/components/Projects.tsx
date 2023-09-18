// import '../../public/projImages'

import useProjectsStore from "../stores/useProjectsStore";
import Modal from "./Modal";
import {useContext} from 'react'
import Theme from "../context/Theme";


const Projects = () => {
  // from zustand store
  let { projArr } = useProjectsStore();
  const {getProject} = useProjectsStore();
  // from context
  const {mode} = useContext(Theme);

  return (
    <>
      <div className="projList" id="proj">
        {projArr.map((val, index) => (
          <div
            // id={mode === "light" ? "cardbox-L" :"cardbox-D"}
            // className="card"
            id="cardbox"
            className={mode === "light" ? "card" : "card text-bg-dark"}
            key={index}
            data-bs-toggle="modal" data-bs-target="#projectModal" onClick={() => getProject(index)}
          >
            <img src={val.prev} className="card-img-top" alt="..." />
            <div className="card-body">
              <span className="card-title" style={{fontSize:'17px'}}>{val.title}</span>
            </div>
          </div>
        ))}
      </div>
        
      {/* Projects Modal */}
      <Modal />
    </>
  );
};

export default Projects;

