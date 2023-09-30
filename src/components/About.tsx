
import '../../public/scss/about.scss'

const About = () => {

  return (
    <>

      <div className="aboutflex">
        <div id="mebox">
          <p className="p"> I'm an aspiring professional front-end web developer and i wanted to share that before, I was not interested in any programming stuff. However, my interests took a significant turn when we began our web development lessons. I discovered a newfound passion and since then, I have gained three years of valuable experience in web development.
          </p>

          {/* <a target="_blank" href="./supporting files/apg-cv.pdf">
            <button className="btn btn-success" id="cvbtn">
              <span className="text">Resume <i id="faicons" className="fa-solid fa-arrow-up-right-from-square"></i></span>
            </button>
          </a> */}
        </div>

        <div className="picbox">
          <img src="./supporting files/coding3.png" alt="me" id="me" />
        </div>
      </div>
    </>
  )
}

export default About