import React from 'react'
import { useContext } from 'react'
import { MdDownloading } from 'react-icons/md'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { MyContext } from '../../Contexts/MyContext'
import '../Projects/animationCard.css'
const MeusLinks = () => {
    const { darkModeState } = useContext(MyContext)
    return (
        <div className="pt-10 w-full flex flex-col">
            <a
                className={`${
                    darkModeState === false
                        ? 'hover:shadow-[#E0AAFF]'
                        : 'hover:shadow-[#5b2056]'
                } m-auto p-2 border-2 border-[#5A189A] hover:border-[#C77DFF/50] transition-all duration-700 hover:bg-[#10002B]  w-6/12 flex items-center justify-center gap-5 rounded-md tracking-wide hover:text-white hover:shadow-[0_-1px_15px_5px_rgba(0,0,0,0.3)] `}
                href="https://drive.google.com/uc?export=download&id=14lH2gD0WxbWwZM7p2xSz74B-Wi855xkv"
                download="CV"
            >
                CV
                <MdDownloading className="bounce-in-fwd text-purple-700 bg-[#C77DFF] rounded-full slide-in-top2" />
            </a>
            <div className="m-auto mt-2 flex justify-around w-4/12 ">
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

export default MeusLinks
