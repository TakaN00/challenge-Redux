import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import {editProduct} from '../slices/productSlice'

const Edit = (props) => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(
      {id : props.id,
      fam : props.fam,
      subfam : props.subfam,
      price : props.price,
      description : props.description,
      color : props.color,
      poster : props.poster},
    );
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleChange = (e) => setProduct({...product,[e.target.name]:e.target.value})
  
    const listChanged = () =>{
      dispatch(editProduct({id:props.id, edited:product}))
    }
  
    const wrapper = () =>{
        handleClose()
        listChanged()
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
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
                  placeholder={props.id}
                  name="id"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={props.fam}
                  name="fam"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={props.subfam}
                  name="subfam"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder={props.price}
                  name="price"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={props.description}
                  name="description"
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={props.color}
                  name="color"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={props.poster[0]}
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

export default Edit