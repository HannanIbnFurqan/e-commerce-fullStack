import { useEffect, useState } from 'react';
// import './App.css';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import themeController from './utility/themeController';
function App() {

  return (
    <themeController>
      <Navbar />
       <Outlet/>
    </themeController>
  );
}

export default App;
