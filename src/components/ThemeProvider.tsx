import { ReactNode, useState } from "react"
import Theme from "../context/Theme"


interface AppContent {
  children: ReactNode;
}


const ThemeProvider = ({children}: AppContent) => {
  
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(prevMode => prevMode === "light" ? 'dark' : 'light')
  }

  return (
    <Theme.Provider value={{mode, toggleMode}}>
      {children}
    </Theme.Provider>
  )
}

export default ThemeProvider