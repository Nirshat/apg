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



const Contents = ({modeVal }: ContentProps) => {
  const contents = [
    {
      title: "",
      descript: "",
      value: <Intro mode={modeVal} />,
      pageId: 0,
      hrefno:"0",
    },
    {
      title: "About.",
      descript: "",
      value: <About mode={modeVal} />,
      pageId: 1,
      hrefno:"1",
    },
    {
      title: "Skills.",
      descript: "Technologies and Tools",
      value: <Skills mode={modeVal} />,
      pageId: 2,
      hrefno:"2",
    },
    {
      title: "Experience.",
      descript: "experiences have I undergone.",
      value: <Exp mode={modeVal} />,
      pageId: 3,
      hrefno: "3",
    },
    {
      title: "Projects.",
      descript: "projects i have done.",
      value: <Projects mode={modeVal} />,
      pageId: 4,
      hrefno: "4",
    },
    {
      title: "Contacts.",
      descript: "Social Media Links",
      value: <GetInTouch mode={modeVal} />,
      pageId: 5,
      hrefno: "5",
    },
  ];


  // const filteredContents = contents.filter(
  //   (item) => item.pageId === contentVal
  // );



  return (
    <>
      <div className="main-app-box">
        {contents.map((item) => (
          <div className="contentBox" key={item.pageId}>
            <div className="landing" id={item.hrefno}></div>
            {/* <div className={modeVal === "light" ? 'title-light' : 'title-dark'}> {item.title} </div> */}
            <div className={modeVal === "light" ? 'descript-light' : 'descript-dark'}>{item.descript} </div>
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
