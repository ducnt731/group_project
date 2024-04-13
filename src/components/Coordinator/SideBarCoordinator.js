import React from "react";

export default function SideBarCoordinator({
  openSidebarToggle,
  OpenSidebar,
  children,
}) {
  return (
    <>
      <aside
        id="sidebar"
        className={openSidebarToggle ? "sidebar-responsive" : ""}
      >
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <i className="fa-solid fa-film icon_header"></i> Greenwich Blog
          </div>
          <span className="icon close_icon" onClick={OpenSidebar}>
            X
          </span>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="/coordinator/home">
              <i className="fa-solid fa-house icon"></i> Home
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
