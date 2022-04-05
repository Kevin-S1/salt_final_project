import React, {useEffect, useRef, useState} from "react";
import './deleteModal.css'
import {Button, Form, Modal, Nav} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";


// TODO: add props which should be Toy ID
const DeleteModal = ({id, show}: any) => {
    
    const [showStatus, setShowStatus] = useState(show)
    
    const handleDelete = () => {
        deleteToy()
    };
    
    const cancelHandler = () => {
        setShowStatus(false);
    }
    
    const deleteToy = async () => {
        await fetch('https://localhost:7275/api/toys/' + id,{
            method:'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        setShowStatus(false);
    }


    return(
        <Modal
            show = {showStatus}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to delete this item?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link to={'/toys'}> <Button variant="secondary" onClick={cancelHandler}>No, go back</Button> </Link>
                    <Button variant="primary" onClick={handleDelete}>Yes, delete it</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
        
        )
    
    
}
export default DeleteModal;

