import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Exp from "./Exp";
import Projects from "./Projects";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";

interface ContentProps {
  contentVal: number;
}


// This serves as a blueprint or contract that specifies what properties an object of this type should have.
// Para ma-access yung bawat attributes sa loob ng objects na parang normal array lang.
interface ContentItem {
  title: string;
  descript: string;
  value: JSX.Element; // JSX type
  pageId: number;
}

const Contents = ({ contentVal }: ContentProps) => {
  const contents: ContentItem[] = [
    {
      title: "",
      descript: "",
      value: <Intro />,
      pageId: 0,
    },
    {
      title: "About.",
      descript: "Personal",
      value: <About />,
      pageId: 1,
    },
    {
      title: "Skills.",
      descript: "What i can provide?",
      value: <Skills />,
      pageId: 2,
    },
    {
      title: "Experience.",
      descript: "What experiences have I undergone?",
      value: <Exp />,
      pageId: 3,
    },
    {
      title: "Projects.",
      descript: "What projects i have done?",
      value: <Projects />,
      pageId: 4,
    },
    {
      title: "Contacts.",
      descript: "",
      value: <GetInTouch />,
      pageId: 5,
    },
  ];


  const filteredContents = contents.filter(
    (item) => item.pageId === contentVal
  );

  return (
    <>
      {filteredContents.map((item) => (
        <div className="contentBox" key={item.pageId}>
          <div className="landing">landing</div>
          <div className="title"> {item.title} </div>
          <div className="descript"> {item.descript} </div>
          <div className="content"> {item.value} </div>
          <div className="landing"></div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Contents;
