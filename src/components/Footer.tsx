
import { BsFillSuitHeartFill } from 'react-icons/bs'

interface Mode{
  mode:string;
}

const Footer = ({mode}: Mode) => {
  return (
    <div className={mode === "light" ? 'footerBox-light' : 'footerBox-dark'}>
      Designed & Built by Aron Paul Gonzales <BsFillSuitHeartFill color="#0fa50f" />
    </div>
  )
}

export default Footer