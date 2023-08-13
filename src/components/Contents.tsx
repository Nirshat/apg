import About from "./About";
import NewTech from "./NewTech";
import Skills from "./Skills";
import Projects from "./Projects";
import GetInTouch from "./GetInTouch";
import Intro from "./Intro";
import Header from "./Header";
import Footer from "./Footer";
import Exp from "./Exp";

const Contents = () => {
  const contents = [
    {
      title: "About",
      descript: "Personal",
      value: <About /> ,
      pageId: 'about',
    },
    {
      title: "New Tech",
      descript: "Technologies that i just started learning",
      value: <NewTech /> ,
      pageId: 'newtech',
    },
    {
      title: "Skills",
      descript: "What i can provide?",
      value: <Skills /> ,
      pageId: 'skills',
    },
    {
      title: "Experience",
      descript: "What experiences have I undergone?",
      value: <Exp /> ,
      pageId:'exp',
    },
    {
      title: "Projects",
      descript: "What projects i have done?",
      value: <Projects /> ,
      pageId: 'proj',
    },
    // {
    //   title: "Get in touch",
    //   descript: "",
    //   value: <GetInTouch /> ,
    //   pageId: 'git',
    // },
  ];


{/* <div className="landing" id={content.pageId}>landing</div> */}

  return (
    <>
    <Header />
    <Intro />
    {
    contents.map((content, index) => (
      <div key={index}>
        <div className="contentBox">
          <div className="landing" id={content.pageId}>landing</div>
          <div className="title">{content.title}.</div>
          <div className="descript"> - {content.descript} </div>
          <div className="content"> {content.value} </div>
          <div className="landing">landing</div>
        </div>
      </div>
      ))
    }
    <GetInTouch />
    <Footer />
    </>
  );
};

export default Contents;
