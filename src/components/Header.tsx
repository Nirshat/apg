import { useState} from "react";
import '../../public/scss/header.scss'
import '../../public/scss/dropdown.scss'
import '../../public/scss/toggle.scss'
import useNavsStore from "../stores/useNavsStore";



const Header = () => {

  // Hide navbar/header on Scroll Down
  // const [prevScrollPos, setPrevScrollPos] = useState<number>(
  //   window.scrollY || 0
  // );
  // const [visible, setVisible] = useState<boolean>(true);

  // const handleScroll = () => {
  //   const currentScrollPos = window.scrollY || 0;
  //   const isScrolledUp = prevScrollPos > currentScrollPos;

  //   setVisible(isScrolledUp);
  //   setPrevScrollPos(currentScrollPos);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  // const headerStyle = {
  //   transform: visible ? "translateY(0)" : "translateY(-100%)",
  //   transition: "transform 0.1s ease-in-out",
  // };

  

  const {navs, setActive} = useNavsStore();
  const [navIndex, setNavIndex] = useState(0);

  const navHandler = (route: number, key:string) => {
    // if (route !== navIndex){
      setNavIndex(route);
      setActive(key);
    // }
  };



  return (
    <>
      <nav
        id="navbar-box"
        className="navbar bg-body-tertiary px-3 mb-3"
        // style={headerStyle}
      >
        {/* Dropdown -start- */}
        <div
          className="nav-link dropdown"
          id="apg1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-bars"></i>
        </div>


        <ul
          className="dropdown-menu dropdown-menu"
          id="durapdownu"
        >
          {navs.map((item, index) => (
            <li key={index}>
              <a
                href={"#"+item.pageId}
                className="dropdown-item"
                role="button"
                onClick={() => navHandler(item.no, item.pageId)}
                id={item.no == navIndex ? "active" : ""}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Dropdown -end- */}

        {/* Navbar -start- */}
        <div id="apg2">
          @apg.
        </div>
        <ul className="nav nav-pills" id="linksbox2">
          {navs.map((link, index) => (
            <li className="nav-item" id="navitem" key={index}>
              <a
                href={"#"+link.pageId}
                className="nav-link"
                id={
                  link.no == navIndex
                  ? "nav-link-active"
                  : "nav-link"
                }
                onClick={() => navHandler(link.no, link.pageId)}
                role="button"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* <li id="special-nav" className="nav-item">
          </li> */}
        </ul>
        {/* Navbar -end- */}
      </nav>
    </>
  );
};

export default Header;
