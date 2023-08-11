
const GetInTouch = () => {
  return (
    <>
    <div className="landing" id="git">landing</div>
    <div className="gitBox"> 
      <div className="title">Get in touch</div>
      <div className="content" id="contentbox">
        <div id="gitContent">
          <div data-aos="zoom-in-left">
            <p className="" id="">Whether you have any questions or want to discuss with me, I'm interested so i'll give my best to get back to you as soon as possible!</p>
          </div>
          <br/>
          <div data-aos="zoom-in-right">
            <a target="_blank" href="mailto:aronpaulgonzales1215@gmail.com"  id="cvlink">
            <button className="buttons" id="mailbtn">
              <span className="text">Message Me!</span>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default GetInTouch;