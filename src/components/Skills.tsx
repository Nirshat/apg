
const Skills = () => {
  let frontend = [
    {
      tech: "HTML",
      // src: "images/html.png",
      src: "https://skillicons.dev/icons?i=html",
    },
    {
      tech: "CSS",
      // src: "images/css.png",
      src: "https://skillicons.dev/icons?i=css",
    },
    {
      tech: "JavaScript",
      // src: "images/js.png",
      src: "https://skillicons.dev/icons?i=js",
    },
    {
      tech: "Bootstrap",
      // src: "images/bootstrap.png",
      src: "https://skillicons.dev/icons?i=bootstrap",
    },
    {
      tech: "React",
      // src: "images/react.png",
      src: "https://skillicons.dev/icons?i=react",
    },
    {
      tech: "TypeScript",
      // src: "images/typescript.png",
      src: "https://skillicons.dev/icons?i=ts",
    },
  ];

  let backend = [
    {
      tech: "Php",
      // src: "images/php.png",
      src: "https://skillicons.dev/icons?i=php",
    },
    {
      tech: "MySQL",
      // src: "images/mysql.png",
      src: "https://skillicons.dev/icons?i=mysql",
    },
    {
      tech: "Node.js",
      // src: "images/nodejs.png",
      src: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      tech: "Express.js",
      // src: "images/expressjs.png",
      src: "https://skillicons.dev/icons?i=express",
    },
    {
      tech: "Laravel",
      // src: "images/laravel.png",
      src: "https://skillicons.dev/icons?i=laravel",
    },
  ];

  let others = [
    {
      tech: "XAMPP",
      src: "images/xampp.png",
    },
    {
      tech: "Canva",
      src: "images/canva.jpg",
    },
    {
      tech: "VS Code",
      // src: "images/vscode.png",
      src: "https://skillicons.dev/icons?i=vscode",
    },
    {
      tech: "Vite.js",
      // src: "images/vite.png",
      src: "https://skillicons.dev/icons?i=vite",
    },
    {
      tech: "GitHub",
      // src: "images/github.png",
      src: "https://skillicons.dev/icons?i=github",
    },
    {
      tech: "Git",
      // src: "images/git.png",
      src: "https://skillicons.dev/icons?i=git",
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
            <span> Others </span> 
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
