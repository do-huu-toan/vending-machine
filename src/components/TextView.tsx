import React from "react";
import '../styles/textview.scss'

interface PropsTextView{
    hint: string
}

function TextView(props: PropsTextView){
    return(
        <>
        <div className="textview">
            <input type="text"  placeholder={props.hint}/>
        </div>
        </>
    )
}

export default TextView;