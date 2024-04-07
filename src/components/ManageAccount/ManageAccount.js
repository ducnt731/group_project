import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import "../../style/manageAccounts.css"
import AddAccount from "./addAccount";
import EditAccount from "./editAccount";
import DeleteAccount from "./deleteAccount";
import { fetchAllUser } from "../../service/userService"

const Account = () => {
    const [isShowModalAdd, setIsShowModalAdd] = useState(0)
    const [isShowModalEdit, setIsShowModalEdit] = useState(false)
    const [isShowModalDelete, setIsShowModalDelete] = useState(false)
    const [dataEdit, setDataEdit] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [totalAccounts, setTotalAccounts] = useState(0)
    const [listAccount, setListAccount] = useState([])

    const handleClose = () => {
        setIsShowModalAdd(false)
        setIsShowModalEdit(false)
        setIsShowModalDelete(false)
    }
    const handleAddNew = (account) => {
        setListAccount([account, ...listAccount])
    }
    const handleEdit = (accountEdit) => {
        setDataEdit(accountEdit)
        setIsShowModalEdit(true)
    }
    const handleDelete = (accountDelete) => {
        setIsShowModalDelete(true)
        setDataDelete(accountDelete)
    }
    const handleEditFromModal = (user) => {
        let cloneListAccount = [...listAccount]
        let index = listAccount.findIndex(item => item.id === user.id)
        cloneListAccount[index].name = user.name
        setListAccount(cloneListAccount)
    }
    const handleDeleteFromModal = (user) =>{
        let cloneListAccount = [...listAccount]
        cloneListAccount = cloneListAccount.filter(item => item._id !== user._id)
        setListAccount(cloneListAccount)
    }
    const getAllUser = async () =>{
        let res = await fetchAllUser()
        if (res) {
            setTotalAccounts(res.total)
            setListAccount(res.data)
            // setTotalPages(res.total_pages)
        }
    }
    useEffect(() => {
        getAllUser()
    }, [])

    return(
        <>
        <div className="account-container">
            <div className="account-list">
                <div className="button-account">
                    <h3>All Account</h3>
                    <button
                    className="btn btn-primary"
                    onClick={() => setIsShowModalAdd(true)}
                    >Add new</button>
                </div>
                <div className="table-account">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Faculty</th>
                            <th>Role</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listAccount && listAccount.length > 0 &&
                                listAccount.map((item, index) => {
                                    return(
                                        <tr key={`users-${index}`}>
                                            <td><img src={item.image} style={{width: "80px", display: "block", margin: "auto"}}/></td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.faculty_name}</td>
                                            <td>{item.role}</td>
                                            <td>
                                                <div className="button-action">
                                                    <button className="btn btn-warning" onClick={() => handleEdit(item)}>Edit</button>
                                                    <button className="btn btn-danger" onClick={() => handleDelete(item)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        <AddAccount
            show = {isShowModalAdd}
            handleClose = {handleClose}
            handleAddNewAccount = {handleAddNew}
        />
        <EditAccount
            show = {isShowModalEdit}
            dataEditAccount = {dataEdit}
            handleClose = {handleClose}
            handleAccountEdit = {handleEditFromModal}
        />
        <DeleteAccount
            show = {isShowModalDelete}
            handleClose = {handleClose}
            dataUserDelete = {dataDelete}
            handleAccountDelete = {handleDeleteFromModal}
        />
        </>
    )
}

export default Account