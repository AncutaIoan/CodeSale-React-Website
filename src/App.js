
import './App.css';
import { HomePage } from './containers/HomePage';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomerAccessPage } from './containers/customerAccessPage';
import { SidePage } from './containers/SidePage';

function App() {


  return <div className='App'>
    
    <Router>
      <Routes>
      <Route path='/' exact element={<HomePage/>} />     
      <Route path='/customer/access/:action' exact element={<CustomerAccessPage/>} />         
      <Route path='/join' exact element={<SidePage/>} />         
    
      </Routes>
    </Router>
  </div>
}

export default App;
