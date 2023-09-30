
import { create } from "zustand"

const useContactsStore = create(() => (
  {
    contactProps: [
      // {
      //   imgsrc: "images/gmail2.png",
      //   name: "Mail",
      //   link: "mailto:apg.yoojy@gmail.com",
      //   prelink: "Message Me!",
      // },
      {
        imgsrc: "images/fb.png",
        name: "Facebook",
        link: "https://web.facebook.com/Namikaze1000",
        prelink: "/Namikaze1000",
      },
      // {
      //   imgsrc: "images/linkedin.png",
      //   name: "Linked-In",
      //   link: "https://linkedin.com/in/apg-1101yj",
      //   prelink: "/in/apg-1101yj",
      // },
      // {
      //   imgsrc: "images/github1.png",
      //   name: "GitHub",
      //   link: "https://github.com/Nirshat",
      //   prelink: "/Nirshat",
      // },
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
    ],
  }
));

export default useContactsStore