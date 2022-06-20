import React from 'react'
import { Button } from 'react-bootstrap'

export const Items = ({ todo, onDelete }) => {



  return (
    <div className='singleItem'>
      <h5>{todo.title}</h5>
      <p>{todo.description}</p>
      <Button variant="warning" size='sm' onClick={onDelete}>Remove</Button>

    </div>
  )
}
