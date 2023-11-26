import React, {FC} from 'react'
import {Typography} from "antd"
import './Preloader.scss'

const {
    Text
} = Typography

interface IPreloaderProps {
    text: string
}

const Preloader: FC<IPreloaderProps> = (props) => {

    const {
        text
    } = props

    return (
        <div className={'preloader'}>
            <div className="gooey">
                <span className="dot"/>
                <div className="dots">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
            <Text className={'preloader-text'}>
                {text}
            </Text>
        </div>
    )
}

export default Preloader