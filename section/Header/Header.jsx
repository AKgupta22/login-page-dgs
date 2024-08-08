import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";

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
            <div className="header-dropdown">
              <img src="/images/gw_logo.png" alt="gw_logo.png" />
              <button>
                <IoIosArrowDown size={"14px"} color="#667085" />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                className="table-search-box-container_input header-search"
                placeholder="Search"
              />
              <div className="table-search-box-container_search">
                <CiSearch size={"18px"} />
              </div>
            </div>
          </div>
          <div className="profile-button">
            <img
              src="/images/gw_logo.png"
              alt="gw_logo.png"
              height="30px"
              width="42px"
            />
            <div className="profile-icon">
              <span>AK</span>
            </div>
          </div>
          <div className="bell-icons">
            <span>|</span>
            <FaBell size="16px" />
            <span>|</span>
            <PiDotsNineBold size="23px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
