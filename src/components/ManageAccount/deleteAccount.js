import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteAccount } from '../../service/userService';
import { toast } from 'react-toastify';

const DeleteAccount = (props) => {

    const {show, handleClose, dataUserDelete, handleAccountDelete} = props

    const confirmDelete = async () => {
        let res = await deleteAccount(dataUserDelete._id)
        if (res && res.statusCode === 204) {
            toast.success("Delete successful!!!")
            handleClose()
            handleAccountDelete(dataUserDelete)
        }else{
            toast.error("Error delete")
        }
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Delete Accounts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body-delete">
                    This action can't be undo!
                    Do you want to delete <b>{dataUserDelete.name}</b>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={() => confirmDelete()}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteAccount