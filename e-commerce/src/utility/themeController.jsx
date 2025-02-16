import React, { useState } from 'react'
import { createContext } from 'react'
export const themeStore = createContext(null);
function themeController({children}) {
    const [theme, setTheme] = useState("light")
  return (
    <themeStore.Provider value={{theme, setTheme}}>themeController</themeStore.Provider>
  )
}

export default themeController