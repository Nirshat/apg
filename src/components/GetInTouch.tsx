import useContactsStore from "../stores/useContactsStore";
import '../../public/scss/git.scss'

const GetInTouch = () => {
  let {contactProps} = useContactsStore();

  return (
    <>
      <div id="gitContent">
        {contactProps.map((item, index) => (
          <div className="contactbox dark" key={index}>
            <div id="contactIconBox">
              <img src={item.imgsrc} alt="" />
            </div>
            <div id="nameandlinkbox">
              <div id="contactname">{item.name}</div>
              <div id="contactsrc">
                <a target="_blank" href={item.link} className="">{item.prelink}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetInTouch;
