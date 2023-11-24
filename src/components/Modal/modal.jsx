"use client";

import "./modal.css";

export const Modal = ({
  width = 300,
  isOpen = false,
  isEdit = false,
  children,
}) => {
  return (
    <div
      className="modal"
      style={{ display: isOpen || isEdit ? "flex" : "none" }}
    >
      <div className="modal-content" style={{ width }}>
        {children}
      </div>
    </div>
  );
};
