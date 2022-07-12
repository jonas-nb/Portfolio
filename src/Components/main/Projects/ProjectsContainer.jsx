import React, { useContext } from 'react'
import ProjectComponent from './ProjectComponent'
import pokeinit from '../../../Assets/img/Pokeinit.jpg'
import advice from '../../../Assets/img/advice.jpg'
import 'animate.css'
import { MyContext } from '../../Contexts/MyContext'
import MyFooter from '../../Footer/MyFooter'
import { CgDanger } from 'react-icons/cg'

//recebe props, titulo, sobre e imagem
const ProjectsContainer = () => {
    const { darkModeState, BgColors } = useContext(MyContext)

    return (
        <div
            className={`${
                darkModeState === true
                    ? `bg-[${BgColors.darkColor}]`
                    : `bg-[${BgColors.lightColor}] `
            } `}
        >
            <div className="pt-24">
                <h1
                    className={`${
                        darkModeState === true
                            ? `bg-[#8821ff]`
                            : `bg-[#da407b] `
                    } text-white m-auto w-8/12 lg:w-6/12 rounded-lg h-16 text-xl flex items-center justify-center font-mono uppercase font-medium`}
                >
                    Projetos Dinâmicos
                </h1>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pt-16 pb-16 h-full">
                <ProjectComponent
                    link="https://fancy-chebakia-587538.netlify.app/"
                    titulo="Pokeinit"
                    sobre="Consumindo uma api pública que traz informações sobre os pokemons, pokeinit vem com uma proposta de apresentar de forma interativa o mundo pokemon."
                    imagem={pokeinit}
                />

                <ProjectComponent
                    link="https://stirring-jalebi-9adf6d.netlify.app/"
                    titulo="Advice"
                    sobre="Advice vem com uma proposta de a cada interação mostrar um conselho aleatório, consumindo uma api pública que retorna esses conselhos."
                    imagem={advice}
                />
            </div>
            <div className="">
                <h1
                    className={`${
                        darkModeState === true
                            ? `bg-[#8821ff]`
                            : `bg-[#da407b] `
                    } text-white m-auto w-10/12 lg:w-6/12 rounded-lg h-16 text-xl text-center flex items-center justify-center  uppercase font-medium font-mono`}
                >
                    Projetos Estáticos e Landing Pages
                </h1>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pt-16  h-full"></div>
            <div className="bg-[#d635ef] mb-5 h-52 rounded m-auto w-8/12 flex items-center justify-center flex-row border ">
                <h1 className="text-5xl">Sessão em construção</h1>
                <CgDanger className="text-6xl block" />
            </div>
            <MyFooter />
        </div>
    )
}

export default ProjectsContainer
