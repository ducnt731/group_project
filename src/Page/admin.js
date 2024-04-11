import React, { useEffect } from "react";
import AdminHome from "../components/adminHome/adminHome"
import LayoutAdmin from "../layouts/layoutAdmin"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import LayoutMarketing from "../layouts/layoutMarketing";

const Admin = () => {
    return(
        <LayoutMarketing>
            <AdminHome/>
        </LayoutMarketing>
    )
}

export default Admin