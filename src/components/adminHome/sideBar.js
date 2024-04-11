import React from "react";

const SideBar = ({openSidebarToggle, OpenSidebar}) => {
    return(
        <>
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <i className="fa-solid fa-film icon_header"></i> Greenwich Blog
                </div>
                <span className='icon close_icon' onClick={OpenSidebar} >X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="/admin/event">
                    <i className="fa-solid fa-calendar-days icon"></i> Manage Event
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/admin">
                        <i className="fa-solid fa-users icon"></i> Manage Accounts
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/admin/faculty">
                    <i className="fa-solid fa-folder icon"></i>Manage Faculties
                    </a>
                </li>
            </ul>
        </aside>
        </>
    )
}

export default SideBar