import React from "react";
import NavBarItem from "./NavBarItem";
import "../styles/navbar.scss"
import { NavLink } from "react-router-dom";



function NavBar(props: any) {
    return (
        <>
            <div className="navbar">
                <NavBarItem tittle="Giới thiệu" active={true} />
                <NavBarItem tittle="Sản phẩm" active={false} />
                <NavBarItem tittle="Lịch sử" active={false} />
                <NavBarItem tittle="Báo cáo" active={false} />
            </div>
        </>
    )
}

export default NavBar;