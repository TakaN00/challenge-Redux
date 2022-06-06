import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function Add(props) {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(
    {id : "TEST-T",
    fam : "Product Family",
    subfam : "Product Sub-Family",
    price : "40",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color :"Product Color",
    poster : [
    "images/test.png"]},
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleChange = (e) => setProduct({...product,[e.target.name]:e.target.value})

  const listChanged = () =>{
    props.getAdd(product)
    setProduct(
        {id : "TEST-T",
        fam : "Product Family",
        subfam : "Product Sub-Family",
        price : "40",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        color :"Product Color",
        poster : [
        "images/test.png"]}
    )
  }

  const wrapper = () =>{
      handleClose()
      listChanged()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Product ID"
                name="id"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Product Family"
                name="fam"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Product Sub-Family"
                name="subfam"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Product Price"
                name="price"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Product Color"
                name="color"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Product Poster URL"
                name="poster"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={wrapper}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
