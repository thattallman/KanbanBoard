import React, { useState, useEffect } from "react";
const Navbar = ({ control, setControl, sort, setSort }) => {
  const [activeButton, setActiveButton] = useState(control);
  const [activeButtonSort, setActiveButtonSort] = useState("true");
  useEffect(() => {
    const storedControl = localStorage.getItem("control");
    const storedSort = localStorage.getItem("sort");
    if (storedControl) {
      setControl(storedControl);
    }
    setActiveButton(storedControl);
    if (storedSort) {
      setSort(storedSort);
    }
    setActiveButtonSort(storedSort);
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setControl(button);
  };
  const handleButtonClickSort = (bool) => {
    setActiveButtonSort(bool);
    setSort(bool);
  };

  return (
    <div className="navbar">
      <button
        className={activeButton === "status" ? "active" : ""}
        onClick={() => handleButtonClick("status")}
      >
        Status
      </button>
      <button
        className={activeButton === "priority" ? "active" : ""}
        onClick={() => handleButtonClick("priority")}
      >
        Priority
      </button>
      <button
        className={activeButton === "name" ? "active" : ""}
        onClick={() => handleButtonClick("name")}
      >
        Name
      </button>

      <button
        className={activeButtonSort === "true" ? "active" : ""}
        id="by-Priority"
        onClick={() => handleButtonClickSort("true")}
      >
        by-Priority
      </button>

      <button
        className={activeButtonSort === "false" ? "active" : ""}
        id="by-name"
        onClick={() => handleButtonClickSort("false")}
      >
        by-Title
      </button>
    </div>
  );
};

export default Navbar;
