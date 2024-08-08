"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const SideBarWrapper = ({ currentIndex, children }) => {
  const [collaped, setCollaped] = useState(false);

  return (
    <div className="sidebar-container relative">
      <Sidebar collaped={collaped} currentIndex={currentIndex} />
      <div
        className={`sidebar-container_content${
          collaped ? " sidebar-container_content_collapsed" : ""
        }`}
      >
        {children}
      </div>
      <button
        className={`floating-button${
          collaped ? " floating-button_collapsed" : ""
        }`}
        onClick={() => setCollaped(!collaped)}
      >
        <img src="/images/icons/arrow-circle-right.svg" />
      </button>
    </div>
  );
};

export default SideBarWrapper;
