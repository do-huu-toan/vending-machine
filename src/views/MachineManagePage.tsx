import React from "react";
import TittleBar from "../components/TittleBar";

import Avatar from '../assets/image/avatar.jpg'
import ComboBox from "../components/ComboBox";
import '../styles/manager.scss'
import TextView from "../components/TextView";
import Button from "../components/Button";

import PlusIcon from "../components/icons/PlusIcon";
import ListView from "../components/ListView";
import NavBar from "../components/NavBar";


interface PropsMachineManagerPage{
    children: JSX.Element
}

function MachineManagePage(props: PropsMachineManagerPage) {
    return (
        <>
            <TittleBar name="Quản lý máy" avatar={Avatar} />
            <div className="filterbar">
                <div className="filterbar__left">
                    <ComboBox label="Đơn vị" />
                    <ComboBox label="Trạng thái" />
                    <ComboBox label="Địa điểm" />
                    <TextView hint="Mã máy" />
                    <Button background="none" textColor="#00BAB5" borderColor="#00BAB5 "><p>Tìm kiếm</p></Button>
                </div>

                <Button background="#00BAB5" textColor="#FFF" borderColor="none">
                    <>
                        <i style={{ fontSize: "2.4rem" }}><PlusIcon /></i>
                        <p style={{ marginLeft: "8px" }}>Thêm máy</p>
                    </>
                </Button>
            </div>
            <div className="machine-manager-view">
                <ListView />
                <div className="machine-manager-view__content">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default MachineManagePage;