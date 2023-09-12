import useSkillsStore from "../stores/useSkillsStore";

interface Mode{
  mode:string;
}

const Skills = ({mode}: Mode) => {

  // from zustand store
  let {frontend} = useSkillsStore();
  let {backend} = useSkillsStore();
  let {others} = useSkillsStore();


  return (
    <>
      <div className="tech">
        <div className="skillbox">
          <div className={mode === "light" ? 'skillabel-l' : 'skillabel-d' }>
            <span> Frontend Development </span>
            <i className="fa-solid fa-code"></i>
          </div>

          <div className="icons-holder">
            {frontend.map((obj, index) => (
              <div className={mode === "light" ? 'iconbox-light' : 'iconbox-dark' } key={index}>
                <div id="icons">
                  <img src={obj.src} alt="" />
                </div>
                <div id="alt">
                  <b> {obj.tech} </b>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="skillbox">
          <div className={mode === "light" ? 'skillabel-l' : 'skillabel-d' }>
            <span> Backend Development </span>
            <i className="fa-solid fa-code-branch"></i>
          </div>

          <div className="icons-holder">
            {backend.map((obj, index) => (
              <div className={mode === "light" ? 'iconbox-light' : 'iconbox-dark' } key={index}>
                <div id="icons">
                  <img src={obj.src} alt="" />
                </div>
                <div id="alt">
                  <b> {obj.tech} </b>
                </div>
              </div>
            ))}
          </div>
        </div>



        <div className="skillbox">
          <div className={mode === "light" ? 'skillabel-l' : 'skillabel-d' }>
            <span> Others </span> 
            <i className="fa-solid fa-screwdriver-wrench"></i>
          </div>

          <div className="icons-holder">
            {others.map((obj, index) => (
              <div className={mode === "light" ? 'iconbox-light' : 'iconbox-dark' } key={index}>
                <div id="icons">
                  <img src={obj.src} alt="" />
                </div>
                <div id="alt">
                  <b> {obj.tech} </b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
