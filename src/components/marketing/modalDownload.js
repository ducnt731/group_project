import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteFaculty } from '../../service/userService';
import { toast } from 'react-toastify';

const Download = (props) => {

    const {show, handleClose, dataUser, handleAccountDownload} = props

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Download file</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body-delete">
                    Do you want to download <b>{dataUser.PostID}</b>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={() => handleAccountDownload(dataUser)}>
                Download
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Download