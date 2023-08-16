import { useState, useEffect } from "react";

import Contents from "./Contents";



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
      pageId: 'introbox',
    },
    {
      no: 1,
      name: "about",
      pageId: 'about',
    },
    {
      no: 2,
      name: "skills",
      pageId: 'skills',
    },
    {
      no: 3,
      name: "experience",
      pageId:'exp',
    },
    {
      no: 4,
      name: "projects",
      pageId: 'proj',
    },
    {
      no: 5,
      name: "contacts",
      pageId: 'git',
    },
  ];


  const [navIndex, setNavIndex] = useState(0);

  const navHandler = (route:number) => {
    if(route !== navIndex)
      setNavIndex(route);
  }
  // if route is not equal to the current value of navIndex, it will be updated
  // else if it's equal to the current navIndex then nothing happenns 

  return (
    <>
      <nav
        id="navbar-box"
        className="navbar bg-body-tertiary px-3 mb-3"
        style={headerStyle}
      >


        {/* Dropdown -start- */}
        <div
        className="nav-link dropdown-toggle"
        id="apg1"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        >
          @aronpaulgonzales
        </div>

        <ul className="dropdown-menu">
          {navs.map((item, index) => (
            <li key={index} id="litem">
              <a className="dropdown-item" role='button' onClick={() => navHandler(item.no)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Dropdown -end- */}



        {/* Navbar -start- */}
        <div id="apg2">@aronpaulgonzales.</div>
        <ul className="nav nav-pills" id="linksbox2">
          {navs.map((link, index) => (
            <li
              className="nav-item"
              id="navitem"
              key={index}
            >
              <a className="nav-link" onClick={() => navHandler(link.no)} role="button">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Navbar -end- */}
      </nav>

      <Contents contentVal={navIndex} />
    </>
  );
};

export default Header;
