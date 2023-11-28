
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import MainBody from './components/mainBody/MainBody';
import Admin from "./components/admin/Admin";



function App() {
  return (
    <>
    <Routes>
   
    <Route path='/' element={<MainBody/>}/>
    <Route path='/Admin' element={<Admin/>}/>
   
    </Routes>
      
    </>
  );
}

export default App;
