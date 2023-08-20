
interface Mode{
  mode:string;
}

const Exp = ({mode}: Mode) => {
  return (
    <>
      <div className={mode === "light" ? 'expBox-light' : 'expBox-dark'}>
        <span id="role"> <b>Full-stack Developer</b> (Hands-on Exp.) </span>
        <span> Alumni Tracking System (Capstone Project) </span>
        <span> <i>Jan. 2023 - April 2023</i> </span>
        <p>
          I developed a system for administrator that organizes alumni data and allows the user to post an announcement of events. I also developed a portal site for alumni that contains announcement of events and allows the user to update their employment status.
        </p>
        <span><b>Tasks</b></span>
        <ul>
          <li> Created conceptual design of the project (prototype). </li>
          <li> Implemented the database structure with MySQL. </li>
          <li> Front-end Development with HTML, CSS, JS, Bootstrap. </li>
          <li> Back-end Development with PHP. </li>
        </ul>
      </div>
    </>
  )
}

export default Exp