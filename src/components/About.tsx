
interface Mode {
  mode: string;
}

const About = ({mode}: Mode) => {
  return (
    <>
      <div className="aboutflex">
        <div id="mebox">
          <h5 id={mode === "light" ? 'wi32do-lioght' : 'wi32do-dark'}>what i love to do?</h5>
          <p className={mode === "light" ? 'p-light' : 'p-dark'}> I'm a ambitious web developer and i wanted to share that before, I was interested in computer hardware and troubleshooting, leading me to pursue the BSIT course. However, my interests took a significant turn when we began our web development lessons. I discovered a newfound passion for creating websites, and since then, I have gained over three years of valuable hands-on experience in web development.
          </p>

          <br />
          <a target="_blank" href="supporting files/cv.pdf">
            <button className="buttons" id="cvbtn">
              <span className="text">Resume <i id="faicons" className="fa-solid fa-arrow-up-right-from-square"></i></span>
            </button>
          </a>

          {/* <div id="aboutfooter">
            <div className="cwm">Connect with me:</div>
            <div className="aboutIcons">
              <a target="_blank" href="mailto:aronpaulgonzales1215@gmail.com"><img src="./rsrc-dev/green/gmail.png" alt="" /></a>
              <a target="_blank" href="https://web.facebook.com/Namikaze1000"><img src="./rsrc-dev/green/fb.png" alt="" /></a>
              <a target="_blank" href="https://github.com/Nirshat"><img src="./rsrc-dev/green/github.png" alt="" /></a>
              <a target="_blank" href="https://linkedin.com/in/apg-1101yj"><img src="./rsrc-dev/green/linkedin.png" alt="" /></a>
            </div>
          </div> */}
        </div>

        <div className="picbox">
          <img src="./supporting files/grouf1.jpg" alt="me" id="me" />
          <img src="./supporting files/doing2.jpg" alt="me" id="me" />
          <img src="./supporting files/doing4.png" alt="me" id="me" />
          <img src="./supporting files/grad3.jpeg" alt="me" id="me" />
        </div>
      </div>

      {/* <hr id="hline" /> */}
    </>
  )
}

export default About