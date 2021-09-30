import React from "react";
import '../styles/button.scss'

interface PropsButton{
    children: JSX.Element,
    background: string,
    textColor: string,
    borderColor: string
}

function Button(props: PropsButton){
    return(
        <>
            <div className="button" style={{background: props.background, color: props.textColor, borderColor: props.borderColor}}>
                {props.children}
            </div>
        </>
    )
}

export default Button