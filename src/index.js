import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Page2 from './routes/page2'
import Page3 from './routes/page3'
import Page4 from './routes/page4'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <div>
  <App/>
</div>
  
);
