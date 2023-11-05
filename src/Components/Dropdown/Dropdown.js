import React, { useEffect, useRef } from "react";
import "./Dropdown.css";

function Dropdown(props) {
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  });

  const handleClick = (event) => {
    if (dropdownRef && !dropdownRef.current?.contains(event.target)) 
    { if(props.onClose())props.onClose()
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`dropdown custom-scroll ${props.class ? props.class : ""}`}
    >
      {props.children}
    </div>
  );
}

export default Dropdown;