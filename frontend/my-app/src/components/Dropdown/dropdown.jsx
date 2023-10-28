import dropdownArrow from "../../img/arrow_back.png";
import { useState } from "react";
import DropdownContent from "./Dropdown_content/dropdown_content";

function Dropdown(infos) {
  const [isOpen, setIsOpen] = useState(false);

  function opener() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  if (isOpen) {
    console.log(infos);
    return (
      <div className="dropdown">
        <button className="dropdown__button">
          Description
          <img
            src={dropdownArrow}
            alt="Une fleche indiquant le déroulement du menu"
            className="dropdown__button__arrow open"
            onClick={opener}
          />
        </button>
        <DropdownContent contents={infos.info.description} />
      </div>
    );
  } else {
    return (
      <div className="dropdown">
        <button className="dropdown__button">
          Description
          <img
            src={dropdownArrow}
            alt="Une fleche indiquant le déroulement du menu"
            className="dropdown__button__arrow"
            onClick={opener}
          />
        </button>
      </div>
    );
  }
}

export default Dropdown;
