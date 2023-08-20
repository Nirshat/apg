
interface Mode{
  mode:string;
}

const GetInTouch = ({mode}: Mode) => {
  let contactProps = [
    {
      imgsrc: "images/gmail.png",
      name: "G-mail",
      link: "mailto:aronpaulgonzales1215@gmail.com",
      prelink: "Message Me!",
    },
    {
      imgsrc: "images/fb.png",
      name: "Facebook",
      link: "https://web.facebook.com/Namikaze1000",
      prelink: "/Namikaze1000",
    },
    {
      imgsrc: "images/linkedin.png",
      name: "Linked-In",
      link: "https://linkedin.com/in/apg-1101yj",
      prelink: "/in/apg-1101yj",
    },
    {
      imgsrc: "images/insta.png",
      name: "Instagram",
      link: "https://www.instagram.com/apgdomain/",
      prelink: "@apgdomain",
    },
    {
      imgsrc: "images/twitter.png",
      name: "Twitter",
      link: "https://twitter.com/codeyron",
      prelink: "@codeyron",
    },
    {
      imgsrc: "images/github.png",
      name: "GitHub",
      link: "https://github.com/Nirshat",
      prelink: "/Nirshat",
    },
  ];

  return (
    <>
      <div id="gitContent">
        {contactProps.map((item, index) => (
          <div className={mode === "light" ? 'contactbox-light' : 'contactbox-dark'} key={index}>
            <div id="contactIconBox">
              <img src={item.imgsrc} alt="" />
            </div>
            <div id="nameandlinkbox">
              <div id={mode === "light" ? 'contactname-light' : 'contactname-dark'}>{item.name}</div>
              <div id={mode === "light" ? 'contactsrc-light' : 'contactsrc-dark'}>
                <a target="_blank" href={item.link}>{item.prelink}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetInTouch;

{
  /* <p className="" id="">Whether you have any questions or want to discuss with me, I'm interested so i'll give my best to get back to you as soon as possible!</p> */
}

{
  /* <br/>
          <div>
            <a target="_blank" href="mailto:aronpaulgonzales1215@gmail.com"  id="cvlink">
            <button className="buttons" id="mailbtn">
              <span className="text">Message Me!</span>
            </button>
            </a>
          </div> */
}
