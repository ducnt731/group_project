import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { addNewAccount, fetchAllFaculty } from '../../service/userService';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddAccount = (props) => {

    const {show, handleClose, handleAddNewAccount} = props
    const [userData, setUserData] = useState("")
    const [listAccount, setListAccount] = useState([])


    const handleSaveAccount = async () => {
        let res = await addNewAccount(userData)
        if (res && res.id) {
            handleClose()
            setUserData('')
            toast.success("Create new account successful!!!")
            handleAddNewAccount({userData})
        }else{
            toast.error("Fail to create new account")
        }
        console.log(res);
    }
    const getAllFaculty = async () =>{
        let res = await fetchAllFaculty()
        if (res) {
            // setTotalAccounts(res.total)
            setListAccount(res.data)
            // setTotalPages(res.total_pages)
        }
    }
    useEffect(() => {
        getAllFaculty()
    }, [])

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>New Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body-add">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={userData} onChange={(e) => setUserData(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <select className="form-select">
                        <option>IT</option>
                        <option>Business</option>
                        <option>Design</option>
                    </select>
                    <br/>
                    <select className="form-select">
                        <option>Student</option>
                        <option>Manager MKT</option>
                        <option>User</option>
                        <option>Admin</option>
                    </select>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Image</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={() => handleSaveAccount()}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddAccount