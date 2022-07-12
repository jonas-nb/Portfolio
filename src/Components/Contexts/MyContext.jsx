import React, { createContext, useState } from 'react'

export const MyContext = createContext()

export const GlobalStorage = ({ children }) => {
    const [darkModeState, setDarkModeState] = useState(false)
    const BgColors = { lightColor: '#fcebff', darkColor: '#10002B' }
    return (
        <MyContext.Provider
            value={{ darkModeState, setDarkModeState, BgColors }}
        >
            {children}
        </MyContext.Provider>
    )
}
