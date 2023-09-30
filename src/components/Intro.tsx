

import '../../public/scss/intro.scss'


const Intro = () => {

  return (
    <>
      <div className="intro">
        <div className="myname">
          <span>Aron Paul Gonzales</span>
        </div>
        <p className="p">
          I'm a React JS Developer proficient in react, typescript, javascript, tailwind css, sass.
        </p>
        <div className="paa">
          <div>
            <a target='_blank' href="https://github.com/Nirshat">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <div>
            <a target='_blank' href="https://linkedin.com/in/apg-1101yj">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <div>
            <a href="mailto:apg.yoojy@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          
          <div>
            <a target="_blank" href="./supporting files/apg-cv.pdf">
              <i className="fa-solid fa-file"></i>
            </a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Intro
