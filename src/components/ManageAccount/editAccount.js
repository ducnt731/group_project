import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editAccount } from '../../service/userService';
import { toast } from 'react-toastify';

const EditAccount = (props) => {

    const {show, handleClose, dataEditAccount, handleAccountEdit} = props
    const [name, setName] = useState("")

    const handleEditAccount = async () => {
        let res = await editAccount(name)
        if (res && res.updatedAt) {
            handleAccountEdit({
                name: name,
                id: dataEditAccount.id
            })
            handleClose()
            toast.success("Update successful!!!")
        }
    }
    useEffect(() => {
        if (show) {
            setName(dataEditAccount.name)
        }
    }, [dataEditAccount])

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Accounts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="body-add">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
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
                        <option>Manager</option>
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
            <Button variant="primary" onClick={() => handleEditAccount()}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditAccount