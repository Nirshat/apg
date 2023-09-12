import useContactsStore from "../stores/useContactsStore";

interface Mode{
  mode:string;
}

const GetInTouch = ({mode}: Mode) => {
  let {contactProps} = useContactsStore();

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
