import React from 'react'
import Buton from '../Buton'
import Navigation from '../Navigation'
export default function Page3(props) {
  return (
    <div>
        <Navigation/>
    <div paddingTop='40px'v>
         <h1>Page 3</h1>
        <Buton counter={props.counter} handler={props.handler}/>    
    </div>
    </div>
  )
}
