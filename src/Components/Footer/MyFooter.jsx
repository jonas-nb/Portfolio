import React, { useState, useEffect } from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const MyFooter = () => {
    const [ano, setAno] = useState()
    useEffect(() => {
        setAgeFunction()
    }, [])

    //
    const setAgeFunction = () => {
        const data = new Date()
        let ano = data.getFullYear()
        setAno(ano)
    }
    return (
        <div className="pt-5 bg-[#8900d8] border-t-4 border-[#a265c6] w-full h-40 flex flex-col items-center justify-around font-bold">
            <div className="text-white m-auto font-mono w-12/12">
                &copy;2022 Made with ❤ by Jonas Batista
            </div>
            <div className="m-auto flex items-center justify-around w-6/12 text-white text-5xl">
                <a href="https://github.com/jonas-nb" target={'_blank'}>
                    <FiGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/jonas-batista-b77b24137/"
                    target={'_blank'}
                >
                    <FiLinkedin />
                </a>
            </div>
        </div>
    )
}

export default MyFooter
