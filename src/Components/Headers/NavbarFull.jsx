import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Contexts/MyContext'

const NavbarFull = () => {
    const { darkModeState } = useContext(MyContext)

    return (
        <div className="w-8/12 flex items-center justify-around mt-2 relative left-5 text-sm">
            <Link
                to="/"
                className={
                    darkModeState === false
                        ? 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg  px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                        : 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  pink-500/50  dark:pink-800/80 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2'
                }
            >
                Home
            </Link>
            <Link
                to="/Sobre"
                className={
                    darkModeState === false
                        ? 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg  px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                        : 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  pink-500/50  dark:pink-800/80 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2'
                }
            >
                Sobre
            </Link>
            <Link
                to="/Projetos"
                className={
                    darkModeState === false
                        ? 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg  px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                        : 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  pink-500/50 dark: dark:pink-800/80 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2'
                }
            >
                Projetos
            </Link>
        </div>
    )
}

export default NavbarFull
