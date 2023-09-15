
interface Mode {
  mode: string;
}

const About = ({mode}: Mode) => {
  return (
    <>
      <div className="aboutflex">
        <div id="mebox">
          <h5 id={mode === "light" ? 'wi32do-light' : 'wi32do-dark'}>what i love to do?</h5>
          <p className={mode === "light" ? 'p-light' : 'p-dark'}> I'm an aspiring professional front-end developer and i wanted to share that before, I was not interested in any programming stuff. However, my interests took a significant turn when we began our web development lessons. I discovered a newfound passion and since then, I have gained three years of valuable experience in web development.
          </p>

          <a target="_blank" href="supporting files/cv.pdf">
            <button className="btn btn-success" id="cvbtn">
              <span className="text">Resume <i id="faicons" className="fa-solid fa-arrow-up-right-from-square"></i></span>
            </button>
          </a>
        </div>

        <div className="picbox">
          <img src="./supporting files/coding4.png" alt="me" id="me" />
          {/* <img src="./supporting files/doing2.jpg" alt="me" id="me" /> */}
          {/* <img src="./supporting files/doing4.png" alt="me" id="me" /> */}
          {/* <img src="./supporting files/grad3.jpeg" alt="me" id="me" /> */}
        </div>
      </div>

      {/* <hr id="hline" /> */}
    </>
  )
}

export default About