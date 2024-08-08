import React from "react";
import { CiSettings } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { menuItemsTop } from "@/constants/menuConfig";

const Sidebar = ({ currentIndex, collaped }) => {
  return (
    <div
      className={`sidebar-container_sidebar${
        collaped ? " sidebar_collapsed" : ""
      }`}
    >
      <div className="menu-item-container">
        <ul className="menu-items">
          {menuItemsTop.map((config) => (
            <li key={config.id}>
              <div
                className={`menu_option${
                  currentIndex === config.id ? " menu_option_selected" : ""
                }`}
              >
                <config.icon size={"20px"} />
                {!collaped ? <span>{config.label}</span> : ""}
              </div>
            </li>
          ))}
        </ul>
        <ul className="menu-items">
          <li>
            <div className="menu_option">
              <CiSettings size={"20px"} />
              {!collaped ? <span>Setting</span> : ""}
            </div>
          </li>
          <li>
            <button className="menu_option logout_button">
              <AiOutlineLogout size={"20px"} />
              {!collaped ? <span>Logout</span> : ""}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
