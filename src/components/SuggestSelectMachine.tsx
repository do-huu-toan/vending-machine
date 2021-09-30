import React from "react";
import '../styles/suggest-select-machine.scss'
import ImageBackground from '../assets/image/house-seaching.png'


function SuggestSelectMachine(){
    return(
        <div className="suggest-select-machine">
            <img src={ImageBackground} alt="" />
            <p>Vui lòng chọn máy</p>
        </div>
    )
}

export default SuggestSelectMachine