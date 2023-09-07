import { useState, useEffect, useContext } from "react";

import Contents from "./Contents";
import Theme from "../context/Theme";

const Header = () => {
  // Hide navbar/header on Scroll Down
  const [prevScrollPos, setPrevScrollPos] = useState<number>(
    window.scrollY || 0
  );
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY || 0;
    const isScrolledUp = prevScrollPos > currentScrollPos;

    setVisible(isScrolledUp);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const headerStyle = {
    transform: visible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.1s ease-in-out",
  };

  let navs = [
    {
      no: 0,
      name: "home",
      pageId: "introbox",
    },
    {
      no: 1,
      name: "about",
      pageId: "about",
    },
    {
      no: 2,
      name: "skills",
      pageId: "skills",
    },
    {
      no: 3,
      name: "experience",
      pageId: "exp",
    },
    {
      no: 4,
      name: "projects",
      pageId: "proj",
    },
    {
      no: 5,
      name: "contacts",
      pageId: "git",
    },
  ];

  const [navIndex, setNavIndex] = useState(0);
  // const [clicked, setClicked] = useState(false);

  const navHandler = (route: number) => {
    if (route !== navIndex){
      setNavIndex(route);
    }
  };
  // if route is not equal to the current value of navIndex, it will be updated
  // else if it's equal to the current navIndex then nothing happens

  const { mode, toggleMode } = useContext(Theme);

  //  trigger darkmode
  useEffect(() => {
    document.body.classList.toggle('dark-mode', mode === 'dark');
  }, [mode]);

  return (
    <>
      <nav
        id={mode === "light" ? "navbar-box-light" : "navbar-box-dark"}
        className="navbar bg-body-tertiary px-3 mb-3"
        style={headerStyle}
      >
        {/* Dropdown -start- */}
        <div
          className="nav-link dropdown-toggle"
          id={mode === "light" ? "apg1-light" : "apg1-dark"}
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          @aronpaulgonzales
        </div>

        <ul
          className={
            mode === "light"
              ? "dropdown-menu dropdown-menu-light"
              : "dropdown-menu dropdown-menu-dark"
          }
          id="durapdownu"
        >
          {navs.map((item, index) => (
            <li key={index}>
              <a
                className="dropdown-item"
                role="button"
                onClick={() => navHandler(item.no)}
                id={item.no == navIndex ? "active" : ""}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Dropdown -end- */}

        {/* {mode === "light" ? '' : '' } */}

        {/* Navbar -start- */}
        <div id={mode === "light" ? "apg2-light" : "apg2-dark"}>
          @aronpaulgonzales.
        </div>
        <ul className="nav nav-pills" id="linksbox2">
          {navs.map((link, index) => (
            <li className="nav-item" id="navitem" key={index}>
              <a
                className="nav-link"
                id={
                  // if
                  mode === "light"
                    ? link.no == navIndex
                      ? "nav-link-light-active"
                      : "nav-link-light"

                  // else (dark)
                  :
                    link.no == navIndex
                    ? "nav-link-dark-active"
                    : "nav-link-dark"
                }
                onClick={() => navHandler(link.no)}
                role="button"
              >
                {link.name}
              </a>
            </li>
          ))}

          <li id="special-nav" className="nav-item">
            <label className="ui-switch">
              <input type="checkbox" onChange={toggleMode} />
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label>
          </li>
        </ul>
        {/* Navbar -end- */}
      </nav>

      {/* Containing Contents */}
      <Contents contentVal={navIndex} modeVal={mode} />
    </>
  );
};

export default Header;
