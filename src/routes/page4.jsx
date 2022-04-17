import React from 'react'
import Buton from '../Buton'
import Navigation from '../Navigation'
export default function Page4(props) {
  return (
    <div>
        <Navigation/>
    <div paddingTop='40px'>
         <h1>Page 4</h1>
        <Buton counter={props.counter} handler={props.handler}/>
    </div>
    </div>
  )
}
