import React from 'react'
import Buton from '../Buton'
import Navigation from '../Navigation'
export default function Page2(props) {
  return (
    <div>
        <Navigation />
    <div paddingTop='40px'>
        <h1>Page 2</h1>
        Counter is : {props.counter}
    </div>
    </div>
  )
}
