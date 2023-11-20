import dropdownArrow from "../../img/arrow_back.png";
import { useState } from "react";
import PropTypes from "prop-types";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stayClosed, setStayClosed] = useState(true);

  function opener() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setStayClosed(false);
    }
  }
  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={opener}>
        {title}
        <img
          src={dropdownArrow}
          alt="Une fleche indiquant le déroulement du menu"
          className={
            isOpen === true
              ? " dropdown__button__arrow opened"
              : "dropdown__button__arrow closed"
          }
        />
      </button>
      <div
        className={`dropdown__container ${isOpen ? "showed" : "hidden"} ${
          stayClosed ? "default" : ""
        }`}
      >
        <div
          className={
            isOpen === true
              ? " dropdown__container__content showed"
              : "dropdown__container__content hidden"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  // css: PropTypes.node,
  children: PropTypes.node,
};

export default Dropdown;
