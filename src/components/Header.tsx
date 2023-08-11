import { useState, useEffect } from "react";

// import Modal from "./Modal";
import Dropdown from "./Dropdown";

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
      name: "home",
      route: "#introbox",
    },
    {
      name: "about",
      route: "#about",
    },
    {
      name: "skills",
      route: "#skills",
    },
    {
      name: "projects",
      route: "#proj",
    },
    {
      name: "contact",
      route: "#git",
    },
  ];

  return (
    <>
      <nav
        id="navbar-box"
        className="navbar bg-body-tertiary px-3 mb-3"
        style={headerStyle}
      >

        <Dropdown />


        <div id="apg2">
            @aronpaulgonzales
        </div>
        <ul className="nav nav-pills" id="linksbox2">
          {navs.map((link, index) => (
            <li className="nav-item" id="navitem" key={index}>
              <a className="nav-link" href={link.route}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
