
const Skills = () => {
  let frontend = [
    {
      tech: "HTML",
      src: "rsrc-dev/green/github.png",
    },
    {
      tech: "CSS",
      src: "images/css.png",
    },
    {
      tech: "JavaScript",
      src: "images/js.png",
    },
    {
      tech: "Bootstrap",
      src: "images/bootstrap.png",
    },
    {
      tech: "React.JS",
      src: "images/react.png",
    },
    {
      tech: "Typescript",
      src: "images/typescript.png",
    },
  ];

  let backend = [
    {
      tech: "Php",
      src: "images/php.png",
    },
    {
      tech: "MySQL",
      src: "images/mysql.png",
    },
    {
      tech: "Laravel",
      src: "images/laravel.png",
    },
    {
      tech: "Node.JS",
      src: "images/nodejs.png",
    },
    {
      tech: "Express.JS",
      src: "images/expressjs.png",
    },
  ];

  let others = [
    {
      tech: "XAMPP",
      src: "images/xampp.png",
    },
    {
      tech: "GitHub",
      src: "images/github.png",
    },
    {
      tech: "Canva",
      src: "images/canva.jpg",
    },
    {
      tech: "VS Code",
      src: "images/vscode.png",
    },
  ];


  return (
    <>
      <div className="tech">
        <div className="skillbox">
          <div className="skillabel">
            <span> Frontend Development  </span>
            <i className="fa-solid fa-code"></i>
          </div>

          <div className="icons-holder">
            {frontend.map((obj, index) => (
              <div key={index}>
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
          <div className="skillabel">
            <span> Backend Development </span>
            <i className="fa-solid fa-code-branch"></i>
          </div>

          <div className="icons-holder">
            {backend.map((obj, index) => (
              <div key={index}>
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
          <div className="skillabel">
            <span> Dev. Tools </span> 
            <i className="fa-solid fa-screwdriver-wrench"></i>
          </div>

          <div className="icons-holder">
            {others.map((obj, index) => (
              <div key={index}>
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
