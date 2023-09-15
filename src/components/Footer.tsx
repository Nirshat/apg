
import { BsFillSuitHeartFill } from 'react-icons/bs'

interface Mode{
  mode:string;
}

const Footer = ({mode}: Mode) => {
  return (
    <div className={mode === "light" ? 'footerBox-light' : 'footerBox-dark'}>
      <div>
        Made with <BsFillSuitHeartFill color="#0fa50f" /> by Aron Paul Gonzales.All rights reserved
      </div>
      <span className="techs">
        React | TypeScript | Zustand | Bootstrap
      </span>
    </div>
  )
}

export default Footer