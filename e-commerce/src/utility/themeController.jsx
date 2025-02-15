import React, { useState } from 'react'
import { createContext } from 'react'
const themeStore = createContext(null);
function themeController() {
    const [theme, setTheme] = useState("light")
  return (
    <themeStore.Provider value={{theme, setTheme}}>themeController</themeStore.Provider>
  )
}

export default themeController