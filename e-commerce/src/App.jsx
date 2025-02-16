import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import ThemeController from './utility/themeController'; // Fix: Capitalized import

function App() {
  return (
    <ThemeController> {/* Fix: Capitalized component */}
      <Navbar />
      <Outlet />
    </ThemeController>
  );
}

export default App;
