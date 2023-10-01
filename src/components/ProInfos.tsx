import About from "./About"
import Exp from "./Exp"
import Skills from "./Skills"
import {useState} from 'react'

const ProInfos = () => {

  const filters = [<Exp/>, <Skills/>, <About/>];
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="btn-group" role="group" style={{width:'max-content', marginBottom:'2rem'}} aria-label="">
        <button type="button" onClick={() => setActive(0)} className={active === 0 ? "btn btn-success active" : "btn btn-dark"}>Experience</button>
        <button type="button" onClick={() => setActive(1)} className={active === 1 ? "btn btn-success active" : "btn btn-dark"}>Techs.</button>
        <button type="button" onClick={() => setActive(2)} className={active === 2 ? "btn btn-success active" : "btn btn-dark"}>Story</button>
      </div>
      {filters[active]}
    </>
  )
}

export default ProInfos