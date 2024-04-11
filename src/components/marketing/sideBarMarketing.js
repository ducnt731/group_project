import React from "react";

const SideBarManager = ({openSidebarToggle, OpenSidebar, children}) => {
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
                    <a href="/marketing/home">
                        <i className="fa-solid fa-house icon"></i> Home
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/marketing/dashboard">
                    <i className="fa-solid fa-chart-simple"></i> DashBoard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/marketing">
                    <i className="icon fa-solid fa-download"></i> Download file
                    </a>
                </li>
            </ul>
        </aside>
        </>
    )
}

export default SideBarManager