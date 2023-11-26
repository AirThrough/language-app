import React, {FC, ReactNode, CSSProperties} from 'react'
import {
    Button
} from "antd"
import { ButtonProps } from 'antd/lib/button'
import Ripples from "react-ripples"

const RippleButton:FC<ButtonProps> = (props) => {

    const {
        children,
        style,
        ...rest
    } = props

    return (
        <Ripples>
            <Button
                {...rest}
                style={{
                    ...style
                }}
            >
                {children}
            </Button>
        </Ripples>
    )
}

export default RippleButton