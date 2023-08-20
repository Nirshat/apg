import './App.css'
import '../public/css/header.css'
import '../public/css/dropdown.css'
import '../public/css/intro.css'
import '../public/css/about.css'
import '../public/css/newtech.css'
import '../public/css/exp.css'
import '../public/css/skills.css'
import '../public/css/projects.css'
import '../public/css/btns.css'
import '../public/css/git.css'
import '../public/css/footer.css'
import '../public/css/toggle.css'


import Header from './components/Header'
import ThemeProvider from './components/ThemeProvider'



const App = () => {

  return (
    <>
      <ThemeProvider>
          {/* this will handle the content */}
          <Header />
      </ThemeProvider>
    </>
  )
}

export default App
