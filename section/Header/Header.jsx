import React from "react";

const Header = () => {
  return (
    <div className="w-full header-container">
      <div className="header_menu-items">
        <div>
          <img
            className="logo-image"
            src="/images/appeals_tax.png"
            alt="logo"
          />
        </div>
        <div className="left-container">
          <div className="flex gap-2 items-center">
            <span className="text-xs font-semibold text-[#2C4E6C]">
              Client Workspace:
            </span>
            <select className="h-10 min-w-24 rounded border border-[#EDF0F3] outline-none">
              <option>logo</option>
            </select>
          </div>
          <div>icon</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
