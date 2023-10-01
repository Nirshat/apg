

import '../../public/scss/intro.scss'


const Intro = () => {

  return (
    <>
      <div className="asd">
        <div className='coverphoto'>
          <img src="./public/supporting files/dcd.jpg" alt="" />
        </div>


        <div className="pakilala">
          <div className="profile">
            <img src="./public/supporting files/ako.png" alt="" />
          </div>

          <div>
            <span className="myname">Aron Paul Gonzales</span>
            <p className="p">I'm a React JS Developer based in philippines. I provide frontend web solutions with React, TypeScript, JavaScript, Bootstrap, Tailwind, Sass. Currently learning Vue js. </p>
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
                  <i className="fa-solid fa-file-lines"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
