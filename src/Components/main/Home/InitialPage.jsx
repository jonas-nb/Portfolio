import React, { useContext } from 'react'
import { MyContext } from '../../Contexts/MyContext'
import Apresenta from './Apresenta'

const InitialPage = () => {
    const { darkModeState } = useContext(MyContext)

    return (
        <div
            className={`${
                darkModeState === false ? 'bg-[#fcebff]' : 'bg-[#10002B]'
            } `}
        >
            <Apresenta />
        </div>
    )
}

export default InitialPage
