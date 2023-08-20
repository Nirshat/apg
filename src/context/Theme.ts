import { createContext } from "react";


const defaultVal = {
  mode: '',
  toggleMode: () => {},
}

const Theme = createContext(defaultVal)

export default Theme