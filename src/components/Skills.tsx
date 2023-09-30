import useSkillsStore from "../stores/useSkillsStore";
import '../../public/scss/skills.scss'


const Skills = () => {

  // from zustand store
  let {techs} = useSkillsStore();

  return (
    <>
      <div className="tech">
        <div className="skillbox">
          <div className="icons-holder">
            {techs.map((obj, index) => (
              <div className='iconbox dark' key={index}>
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
