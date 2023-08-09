
import './App.css'
import '../node_modules/animate.css/animate.css'
import '../public/css/header.css'
import '../public/css/intro.css'
import '../public/css/about.css'
import '../public/css/newtech.css'
import '../public/css/skills.css'
import '../public/css/projects.css'
import '../public/css/btns.css'
import '../public/css/git.css'
import '../public/css/footer.css'
import Contents from './components/Contents'

const App = () => {

  return (
    <>
    <div className="main-container">
      {/* this will handle the content */}

      <Contents />
    </div>
    </>
  )
}

export default App
