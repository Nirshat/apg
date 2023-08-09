
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

  return (
    <>
    <div className="contentBox">
      <div className="intro">
        <div className="intropicbox">
          <img src="./supporting files/digme5.png" alt="" id="intropic" />
          {/* <img src="./supporting files/me5.png" alt="" id="intropic" /> */}
        </div>
        <div className="intromsgbox">
          <div className="hello">Hellow Motherfvckers!, I'm Aron Paul.</div>
          <div className="intromsg">
            Doing web <span id="word1">design</span> and <span id="word2">development</span> things.
          </div>

          <div id="introFooter">
            <div>
              <a href="#proj">
                <button className="buttons">
                  projects 
                  <i id="projIcon" className="fa-solid fa-diagram-project"></i>
                </button>
              </a>
            </div>
            <div className="introIcons">
              <a target="_blank" href="mailto:aronpaulgonzales1215@gmail.com"><img src="./rsrc-dev/green/gmail.png" alt="" /></a>
              <a target="_blank" href="https://web.facebook.com/Namikaze1000"><img src="./rsrc-dev/green/fb.png" alt="" /></a>
              <a target="_blank" href="https://github.com/Nirshat"><img src="./rsrc-dev/green/github.png" alt="" /></a>
              <a target="_blank" href="https://linkedin.com/in/apg-1101yj"><img src="./rsrc-dev/green/linkedin.png" alt="" /></a>
              {/* <a target="_blank" href="https://www.upwork.com/freelancers/~01279057677113aa81"><img src="./rsrc-dev/green/upwork.png" alt="" /></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Intro
