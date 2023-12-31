import Intro from "./Intro";
import Projects from "./Projects";
import GetInTouch from "./GetInTouch";
import usePagesStore from "../stores/usePagesStore";
import ProInfos from "./ProInfos";
import useNavsStore from "../stores/useNavsStore";

const Contents = () => {
  const { pages } = usePagesStore();
  const contents = [<Intro />, <ProInfos />, <Projects />, <GetInTouch />];
  const { active } = useNavsStore();
  const filt = pages.filter((f) => f.hrefno !== "0");

  return (
    <>
      <div className="main-app-box">

        {contents[0]}

        {filt.map((item, index) => (
          <div key={index}>
            <div
              className={item.hrefno === active ? item.hrefno !== "3" ? "landing on" : "landing" : "landing"}
              id={item.hrefno}
            ></div> 
            <div className= "contentBox">
              {item.descript !== "" ? (
                <div className="descript">
                  {item.descript}
                  <br /> <br />
                </div>
              ) : ""}
              {contents[item.value]}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contents;
