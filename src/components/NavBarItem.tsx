import React from "react";
import '../styles/navbar-item.scss'

interface PropsNavBarItem{
    tittle: string,
    active: boolean
}

function NavBarItem(props: PropsNavBarItem){
    return(
        <>
            <div className={"navbar-item" + (props.active == true ? " active" : "")} >
                <p>{props.tittle}</p>
            </div>
        </>
    )
}

export default NavBarItem;