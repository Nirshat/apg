
import {useContext} from 'react'
import Theme from "../context/Theme";


const Intro = () => {
  // let msg = [
  //   'My expertise lies in the realm of web design and development.',
  //   'My expertise lies in designing and developing web-related projects.',
  //   'I′m skilled in crafting and building web-based solutions.',
  //   'The focus of my work revolves around creating and implementing web designs and developments.',
  //   'I engage in the design and development of various web-based elements.',
  //   'My area of specialization involves creating and developing content for the web.',
  //   'I am involved in the conceptualization and execution of web design and development projects.',
  //   'My profession centers on crafting and building digital experiences for the web.',
  //   'The core of my work revolves around designing and developing web-based applicationsx.',
  //   'I specialize in the creation and implementation of web-centric solutions.',
  // ];

  const {mode} = useContext(Theme);

  return (
    <>
      <div className="intro">
        <div className="intropicbox">
          <img src="./supporting files/coding.png" alt="" id="intropic" />
          {/* <img src="./supporting files/me5.png" alt="" id="intropic" /> */}
        </div>


        <div className="intromsgbox">
          <div className={mode === "light" ? 'hello-light' : 'hello-dark'}>Hello, I'm Aron Paul <span className="wave">✋</span></div>
          <div className={mode === "light" ? 'intromsg-light' : 'intromsg-dark'}>
            Providing <span id="word1">front-end</span> web solutions.
          </div>

          <div id="introFooter">
            {/* <a target="_blank" href="https://linkedin.com/in/apg-1101yj">
              <button className="buttons">
                Let's Socialize!
                <i id="projIcon" className="fa-solid fa-thumbs-up"></i>
              </button>
            </a> */}
            <p className={mode === "light" ? 'plight' : 'pdark'}>
              I'm a React JS Developer based in Philippines.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Intro
