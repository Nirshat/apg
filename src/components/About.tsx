
const About = () => {
  return (
    <>
      <div className="aboutflex">
        <div id="mebox">
          <h3 id="wi32do">what i love to do?</h3>
          <p className="p"> I'm a ambitious web developer and i wanted to share that before, I was interested in computer hardware and troubleshooting, leading me to pursue the BSIT course. However, my interests took a significant turn when we began our web development lessons. I discovered a newfound passion for creating websites, and since then, I have gained over three years of valuable hands-on experience in web development.
          </p>

          <a target="_blank" href="supporting files/cv.pdf">
            <button className="buttons" id="cvbtn">
              <span className="text">Download CV <i id="faicons" className="fa-solid fa-circle-arrow-down"></i></span>
            </button>
          </a>

          <div id="aboutfooter">
            <div className="cwm">Connect with me:</div>
            <div className="aboutIcons">
              <a target="_blank" href="mailto:aronpaulgonzales1215@gmail.com"><img src="./rsrc-dev/green/gmail.png" alt="" /></a>
              <a target="_blank" href="https://web.facebook.com/Namikaze1000"><img src="./rsrc-dev/green/fb.png" alt="" /></a>
              <a target="_blank" href="https://github.com/Nirshat"><img src="./rsrc-dev/green/github.png" alt="" /></a>
              <a target="_blank" href="https://linkedin.com/in/apg-1101yj"><img src="./rsrc-dev/green/linkedin.png" alt="" /></a>
              {/* <a target="_blank" href="https://www.upwork.com/freelancers/~01279057677113aa81"><img src="./rsrc-dev/green/upwork.png" alt="" /></a> */}
            </div>
          </div>
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