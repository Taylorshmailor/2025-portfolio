import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Salsa from "./Salsa";
import Found from "./Found";
import Art1 from "./Art1";
import Weather from "./Weather";
import Bridges from "./Bridges";
import Art2 from "./Art2";

const Modals = ({ show, handleClose, selectedItem }) => {
    const componentMap = {
        1: <Salsa />,
        2: <Found />,
        3: <Art1 />,
        4: <Weather />,
        5: <Bridges />,
        6: <Art2 />
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>
                {selectedItem?.title || "Default Title"} {/* Display the item's title */}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {componentMap[selectedItem?.id] || <p>No content available for this item.</p>}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Modals;
