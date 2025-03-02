import React, { useState, createContext } from 'react';

export const ThemeStore = createContext(null);

function ThemeController({ children }) {
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeStore.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeStore.Provider>
    );
}

export default ThemeController;
