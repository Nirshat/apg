import {create} from "zustand"


const usePagesStore = create(() => (
  {
    pages: [
      {
        title: "",
        descript: "",
        value: 0,
        hrefno:"0",
      },
      {
        title: "About.",
        descript: "Get to know more about me.",
        value: 1,
        hrefno:"1",
      },
      {
        title: "Projects.",
        descript: "projects i have done.",
        value: 2,
        hrefno: "2",
      },
      {
        title: "Contacts.",
        descript: "Social Media Links",
        value: 3,
        hrefno: "3",
      },
    ]
  }
))

export default usePagesStore