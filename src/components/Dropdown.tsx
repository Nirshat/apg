const Dropdown = () => {
  let items = [
    {
      name: "Home",
      route: "#introbox",
    },
    {
      name: "About",
      route: "#about",
    },
    {
      name: "New Tech.",
      route: "#newtech",
    },
    {
      name: "Skills",
      route: "#skills",
    },
    {
      name: "Experience",
      route: "#exp",
    },
    {
      name: "Projects",
      route: "#proj",
    },
    {
      name: "Contacts",
      route: "#git",
    },
  ];

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
            <a className="dropdown-item" href={item.route}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
