import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { MyContext } from '../../Contexts/MyContext'
import Foto from '../../../Assets/img/foto.jpg'
import '../Projects/animationCard.css'
import MyFooter from '../../Footer/MyFooter'

const About = () => {
    const { BgColors, darkModeState } = useContext(MyContext)
    //
    const [idade, setIdade] = useState()
    useEffect(() => {
        setAgeFunction()
    }, [])

    //
    const setAgeFunction = () => {
        const data = new Date()
        let ano = data.getFullYear()
        setIdade(ano - 1995)
    }

    return (
        <>
            <div
                className={`p-6 pt-20`}
                style={
                    darkModeState === true
                        ? { backgroundColor: BgColors.darkColor }
                        : { backgroundColor: BgColors.lightColor }
                }
            >
                <article
                    className={`${
                        darkModeState === true ? 'text-white' : 'text-black'
                    } text-2xl text-start leading-9`}
                >
                    <img
                        className={`${
                            darkModeState === true
                                ? 'outline-purple-400'
                                : 'outline-rose-300'
                        } slide-in-top outline  float-right w-3/12 rounded-lg m-2 mt-14 ml-10 hidden md:block`}
                        src={Foto}
                        alt=""
                    />
                    <h1 className="text-4xl text">Olá!</h1>
                    <p className="">
                        Me chamo <em>Jonas Batista</em>, tenho {idade} anos de
                        idade e resido na cidade de João Pessoa-PB. <br /> Sou
                        entusiasta da tecnologia, programador e estudante de
                        ciência da computação. Busco por meio das minhas{' '}
                        <em>skills</em>
                        <small>(habilidades)</small>, transformar as vidas das
                        pessoas de maneira positiva buscando fazer com que a
                        interação entre homem e máquina torne-se cada vez mais
                        acessível tornando o mundo um lugar melhor para se
                        viver.
                        <br />
                        Desde criança tenho afinidade com tecnologia, mesmo não
                        tendo uma infância com tantas oportunidades tive o
                        prazer de conhecer um computador por meio de familiares
                        distantes e foi amor a primeira vista, desde lá eu sou
                        apaixonado por fazer as coisas funcionarem e resolver
                        problemas relacionado com a área. <br /> No ensino médio
                        tive minha segunda oportunidade na área, existiam
                        computadores em minha escola publica parados enquanto
                        tudo era escrito a mão eu vi uma oportunidade de
                        automatizar algumas coisas mergulhei fundo até que eu
                        consegui com algum esforço prestando consultoria sobre
                        informática básica fazer com que a direção pudesse
                        adotar uma nova maneira de trabalho facilitando-o e
                        acelerando-o. <br /> Após o ensino médio, depois de
                        varias tentativas consegui passar em engenharia da
                        computação pela UFPB no ano de 2016, o que parecia ser
                        um sonho realizado infelizmente se tornou algo inviável
                        pelo fato dos custos de estadia serem surreais decidi da
                        um tempo nos estudos o que me abriu uma oportunidade na
                        área de Analista de Suporte(TI), atuando na Getway
                        Automação de 2017 à 2019 onde pude ter minha primeira
                        experiência profissional com TI.
                        <br /> Com advento da pandemia o que parecia um plano
                        distante se tornou minha nova rotina torna-se
                        programador, conciliando o trabalho de vendedor e
                        entregador com uma rotina de estudo pude aprender mais
                        sobre html5, css3 e Javascript o que me abriu novo
                        horizonte para minha carreira, hoje eu sou estudante de
                        react js e dedico cem por cento do meu tempo ao
                        desenvolvimento em ênfase no front-end, crendo que
                        quando produzimos em relação ao que amamos nos tornamos
                        mais que profissionais pessoas melhores, quero está
                        sempre aprendendo e mergulhando mais fundo nesse mundo.
                    </p>
                </article>
            </div>
            <MyFooter />
        </>
    )
}

export default About
