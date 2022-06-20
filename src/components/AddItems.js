import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const AddItems = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!title || !description) {
      alert("Title and description can't be empty");
    }
    else {
      onAdd(title, description);

    }

  }

  return (
    <div className='container my-3'>
      <h2>Add Tasks</h2>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3 mx-3 label" controlId="forTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 mx-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} id="desc" value={description} onChange={(event) => setDescription(event.target.value)} />
        </Form.Group>

        <Button variant="primary btn-success mx-3" type="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  )
}
