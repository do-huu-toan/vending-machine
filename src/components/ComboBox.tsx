import React from "react";

import '../styles/combobox.scss'
import ArrowIcon from "./icons/ArrowIcon";

interface PropsCombobox{
    label: String
}

function  ComboBox(props: PropsCombobox){
    return(
        <>
        <div className="combobox">
            <div className="combobox__label">
                <p>{props.label}</p>
            </div>
            <div className="combobox__value">
                <p>Tất cả</p>
            </div>
            <i className="combobox__icon">
                <ArrowIcon/>
            </i>
        </div>
        </>
    );
}

export default ComboBox;