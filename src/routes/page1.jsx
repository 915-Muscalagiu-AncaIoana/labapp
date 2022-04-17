
import React, { useState } from 'react';
import Navigation from '../Navigation';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import Buton from '../Buton';
import { Button } from 'reactstrap';


function Page1(props) {
  const [ state, setState ] = useState('');
  const handleChange = (event) => {
    setState(event.target.value)
  }
  return (
    <div>
      <Navigation className="nav1"/>
    <div textAlign='center' className="Page1" paddingTop='40px'>
       <h1>Page 1</h1> 
      <Button color='success' onClick={() => {
        setState('')
    }}> 
    Clear
    </Button>
      <input onChange={(event) => setState(event.target.value)} type='text' value={state}></input>
      <br/>
      <label>{state}</label>
      <br/>
      Counter is : {props.counter}
    </div>
    </div>
  );
}

export default Page1;
