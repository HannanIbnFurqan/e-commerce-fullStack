import { useEffect, useState } from 'react';
// import './App.css';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
       <Outlet/>
      {/* <ShimmerUI></ShimmerUI> */}
    </>
  );
}

export default App;
