import useContactsStore from "../stores/useContactsStore";
import {useContext} from 'react'
import Theme from "../context/Theme";


const GetInTouch = () => {
  let {contactProps} = useContactsStore();
  const {mode} = useContext(Theme);

  return (
    <>
      <div id="gitContent">
        {contactProps.map((item, index) => (
          <div className={mode === "light" ? 'contactbox-light' : 'contactbox-dark'} key={index}>
            <div id="contactIconBox">
              <img src={item.imgsrc} alt="" />
            </div>
            <div id="nameandlinkbox">
              <div id={mode === "light" ? 'contactname-light' : 'contactname-dark'}>{item.name}</div>
              <div id={mode === "light" ? 'contactsrc-light' : 'contactsrc-dark'}>
                <a target="_blank" href={item.link}>{item.prelink}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetInTouch;
