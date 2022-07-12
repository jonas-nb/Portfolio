import React, { useContext } from 'react'
import { GlobalStorage } from './Components/Contexts/MyContext'
import Header from './Components/Headers/Header'
import { Route, Routes } from 'react-router-dom'
import InitialPage from './Components/main/Home/InitialPage'
import About from './Components/main/Sobre/About'
import ProjectsContainer from './Components/main/Projects/ProjectsContainer'
import { Footer } from 'flowbite-react'
import MyFooter from './Components/Footer/MyFooter'

const App = () => {
    return (
        <div>
            <GlobalStorage>
                <Header />
                <Routes>
                    <Route path="/" element={<InitialPage />} />
                    <Route path="/Sobre" element={<About />} />
                    <Route path="/Projetos" element={<ProjectsContainer />} />
                </Routes>
            </GlobalStorage>
        </div>
    )
}

export default App
