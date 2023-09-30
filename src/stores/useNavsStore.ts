import { create } from "zustand";


type State = {
  navs: {
    no: number
    name: string
    pageId: string
    icon: string
  }[]
  active: string
}

type Action = {
  setActive: (ind: string) => void
}

const useNavsStore = create<State & Action>((set) => (
  {
    navs: [
      {
        no: 0,
        name: "home",
        pageId: "0",
        icon: "fa-solid fa-house",
      },
      {
        no: 1,
        name: "about",
        pageId: "1",
        icon: "fa-solid fa-user",
      },
      {
        no: 2,
        name: "projects",
        pageId: "2",
        icon: "fa-solid fa-folder-open",
      },
      {
        no: 3,
        name: "contacts",
        pageId: "3",
        icon: "fa-solid fa-message",
      },
    ],
    active: "0",
    setActive: (ind) => set((state) => {
      return {...state, active: ind }
    }),
  }
))

export default useNavsStore