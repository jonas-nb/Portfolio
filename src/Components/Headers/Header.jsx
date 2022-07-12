import React, { useContext } from 'react'
import { MyContext } from '../Contexts/MyContext'
import Menu from './Menu'

const Header = () => {
    const { darkModeState } = useContext(MyContext)

    return (
        <div
            className={
                darkModeState === false
                    ? 'bg-[#Ee76ba] fixed w-full'
                    : 'bg-black fixed w-full'
            }
        >
            <Menu />
        </div>
    )
}

export default Header
