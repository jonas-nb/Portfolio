import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Contexts/MyContext'
import DarkModeButton from './DarkModeButton'
import Navbar from './Navbar'
import NavbarFull from './NavbarFull'

const Menu = () => {
    const { darkModeState } = useContext(MyContext)
    console.log(darkModeState)
    const minWidth = window.innerWidth
    return (
        <div className="h-16 flex flex-row items-center justify-around">
            <Link to="/">
                {darkModeState === false ? (
                    <img
                        className="relative w-12 border border-[#10002b] rounded-full bg-[#E0AAFF] shadow-md shadow-[#E0aaff]/50 p-1"
                        src="src\Assets\img\124610.png"
                        alt=""
                    />
                ) : (
                    <img
                        className="relative w-12 border border-[#10002b] rounded-full bg-[#E0AAFF] shadow-sm shadow-[#7c12be] p-1"
                        src="src\Assets\img\124610.png"
                        alt=""
                    />
                )}
            </Link>
            {minWidth < 667 ? <Navbar /> : <NavbarFull />}
            <DarkModeButton />
        </div>
    )
}

export default Menu
