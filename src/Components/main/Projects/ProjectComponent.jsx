import React from 'react'
import { Card, Badge, Button, Tooltip } from 'flowbite-react'
import { useContext } from 'react'
import { MyContext } from '../../Contexts/MyContext'
import './animationCard.css'
const ProjectComponent = (props) => {
    const { darkModeState, BgColors } = useContext(MyContext)

    return (
        <div className="slide-in-top w-10/12">
            <div className="max-w-sm ">
                <Tooltip content="Clique para ser direcionado ao projeto em produção">
                    <a href={props.link} target={'_blank'}>
                        <Card
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={props.imagem}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {props.titulo}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 h-36">
                                {props.sobre}
                            </p>
                        </Card>
                    </a>
                </Tooltip>
            </div>
        </div>
    )
}

export default ProjectComponent
