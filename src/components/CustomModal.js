import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CustomModal = ({
  show,
  handleClose,
  handleAddToPlan,
  title,
  body,
  img,
}) => {
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState(1);
  const [weight, setWeight] = useState(1);

  const handleAddClick = () => {
    handleAddToPlan(title, Number(sets), Number(reps), Number(weight));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} style={{ fontWeight: "bold" }}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: "bold" }}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {body}
        {img && <img src={img} alt={title} className="img-fluid mb-3" />}
        <Form>
          <Form.Group controlId="formSets">
            <Form.Label>Sets(組數)</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={sets}
              onChange={(e) => setSets(Math.max(1, e.target.value))}
            />
          </Form.Group>
          <Form.Group controlId="formReps">
            <Form.Label>Reps(次數)</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={reps}
              onChange={(e) => setReps(Math.max(1, e.target.value))}
            />
          </Form.Group>
          <Form.Group controlId="formWeight">
            <Form.Label>重量(KG)</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          關閉
        </Button>
        <Button variant="primary" onClick={handleAddClick}>
          加入我的計畫
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
