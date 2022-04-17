import React from 'react'
import Page1 from './routes/page1';
import Page2 from './routes/page2'
import Page3 from './routes/page3'
import Page4 from './routes/page4'
import "./App.css"
import { BrowserRouter , Route, Routes} from "react-router-dom";
import { useState } from 'react';
export default function App() {
    const [counter, setCounter] = useState(0) 
    const handlerInc = () => {
            setCounter((prevCounter) => prevCounter+1)
    }
    const handlerDec = () => {
        setCounter((prevCounter) => prevCounter-1)
    }
  return (
    <BrowserRouter>
  <Routes>
      <Route path="/" element={<Page1 counter={counter}/>} />
      <Route path="/2" element={< Page2 counter={counter}/>} />
      <Route path="/3" element={< Page3 counter={counter} handler={handlerInc}/>} />
      <Route path="/4" element={< Page4 counter={counter} handler={handlerDec}/>} />
    </Routes>
  </BrowserRouter>
  )
}
