import React, { useContext, useEffect, useState } from 'react'
import { Dropdown } from 'flowbite-react'
import { BsList } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { MyContext } from '../Contexts/MyContext'

const Navbar = () => {
    const { darkModeState } = useContext(MyContext)

    return (
        <div>
            <Dropdown
                style={{
                    position: 'relative',
                    left: '1rem',
                    backgroundColor:
                        darkModeState === false ? '#240046' : '#C77DFF',
                    color: 'aliceblue',
                    height: '2.5rem',
                    width: '5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '5px',
                    hover: 'outline: "0.2rem #9d4edd solid"',
                }}
                label={<BsList className="text-2xl" />}
            >
                <Dropdown.Item>
                    <Link to="/">Home</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to="/Sobre">Sobre</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to="/Projetos">Projetos</Link>
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export default Navbar
