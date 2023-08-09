import About from "./About";
import NewTech from "./NewTech";
import Skills from "./Skills";
import Projects from "./Projects";
import GetInTouch from "./GetInTouch";
import Intro from "./Intro";
import Header from "./Header";
import Footer from "./Footer";

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
      descript: "What technologies i am currently learning?",
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
      title: "Projects",
      descript: "Recent Projects",
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




  return (
    <>
    <Header />
    <Intro />
    {
    contents.map((content, index) => (
      <div className="contentBox" key={index}>
        <div className="title" id={content.pageId}>{content.title}</div>
        <div className="descript"> {content.descript} </div>
        <div className="content"> {content.value} </div>
      </div>
      ))
    }
    <GetInTouch />
    <Footer />
    </>
  );
};

export default Contents;
