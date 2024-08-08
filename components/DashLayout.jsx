import React from "react";
import SideBarWrapper from "@/section/Sidebar/SideBarWrapper";
import Header from "@/section/Header/Header";

const DashLayout = ({ currentIndex, children }) => {
  return (
    <main className="bg-[#F6F7F8] main-container">
      <Header />
      <SideBarWrapper currentIndex={currentIndex}>{children}</SideBarWrapper>
    </main>
  );
};

export default DashLayout;
