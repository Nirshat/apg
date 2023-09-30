import { create } from "zustand";


type State = {
  navs: {
    no: number
    name: string
    pageId: string
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
      },
      {
        no: 1,
        name: "about",
        pageId: "1",
      },
      {
        no: 2,
        name: "projects",
        pageId: "2",
      },
      {
        no: 3,
        name: "contacts",
        pageId: "3",
      },
    ],
    active: "0",
    setActive: (ind) => set((state) => {
      return {...state, active: ind }
    }),
  }
))

export default useNavsStore