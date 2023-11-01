import React from "react";

const Modal = ({ isOpen, setIsOpen, children }) => {
  const handleClose = () => setIsOpen(!isOpen);

  return (
    <div className={`${isOpen ? "" : ""} ""`}>
      <div className="">
        {children}
        <button className="" onClick={handleClose}>
          <img src={""} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
