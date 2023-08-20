import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Exp from "./Exp";
import Projects from "./Projects";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";

interface ContentProps {
  contentVal: number;
  modeVal: string;
}


// This serves as a blueprint or contract that specifies what properties an object of this type should have.
// Para ma-access yung bawat attributes sa loob ng objects na parang normal array lang.
interface ContentItem {
  title: string;
  descript: string;
  value: JSX.Element; // JSX type
  pageId: number;
}


const Contents = ({ contentVal, modeVal }: ContentProps) => {
  const contents: ContentItem[] = [
    {
      title: "",
      descript: "",
      value: <Intro mode={modeVal} />,
      pageId: 0,
    },
    {
      title: "About.",
      descript: "Personal",
      value: <About mode={modeVal} />,
      pageId: 1,
    },
    {
      title: "Skills.",
      descript: "What i can provide?",
      value: <Skills mode={modeVal} />,
      pageId: 2,
    },
    {
      title: "Experience.",
      descript: "What experiences have I undergone?",
      value: <Exp mode={modeVal} />,
      pageId: 3,
    },
    {
      title: "Projects.",
      descript: "What projects i have done?",
      value: <Projects mode={modeVal} />,
      pageId: 4,
    },
    {
      title: "Contacts.",
      descript: "",
      value: <GetInTouch mode={modeVal} />,
      pageId: 5,
    },
  ];


  const filteredContents = contents.filter(
    (item) => item.pageId === contentVal
  );



  return (
    <>
    <div className={modeVal === "light" ? 'main-container-light' : 'main-container-dark'}>
      {filteredContents.map((item) => (
        <div className="contentBox" key={item.pageId}>
          <div className="landing">landing</div>
          <div className={modeVal === "light" ? 'title-light' : 'title-dark'}> {item.title} </div>
          <div className={modeVal === "light" ? 'descript-light' : 'descript-dark'}> {item.descript} </div>
          <div className="content"> {item.value} </div>
          <div className="landing"></div>
        </div>
      ))}
      <Footer mode={modeVal} />
    </div>
    </>
  );
};

export default Contents;
