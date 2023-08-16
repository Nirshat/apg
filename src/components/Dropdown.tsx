

const Dropdown = () => {
  let items = [
    {
      name: "Home",
      route: 0,
    },
    {
      name: "About",
      route: 1,
    },
    {
      name: "New Tech.",
      route: 2,
    },
    {
      name: "Skills",
      route: 3,
    },
    {
      name: "Experience",
      route: 4,
    },
    {
      name: "Projects",
      route: 5,
    },
    {
      name: "Contacts",
      route: 6,
    },
  ];



  // const [navIndex, setNavIndex] = useState(currentPage);

  // console.log(navIndex);
  // const navHandler = (route:number) => {
  //   if(route !== navIndex)
  //     setNavIndex(route);
  //     console.log(navIndex);
  // }
  // if route is not equal to the current value of navIndex, it will be updated
  // else if it's equal to the current navIndex then nothing happenns 

  return (
    <>
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
        {items.map((item, index) => (
          <li key={index} id="litem">
            <a className="dropdown-item" role='button'>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
