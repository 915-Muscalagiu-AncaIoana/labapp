import React from 'react'
import { Button } from 'reactstrap';

export default function Buton(props) {
  return (
    <div>
        <Button color="success" onClick={() => {props.handler()}}>
        {props.counter}
        </Button>
    </div>
  )
}
