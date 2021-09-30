import React from "react";
import '../styles/listview.scss'
import MachineIconOnline from "./icons/MachineIconOnline";
import ListViewItem from "./ListViewItem";

import { NavLink } from "react-router-dom"


const listMachine = [
    {
        id: "1",
        name: "Máy 1",
        code: "123456",
        address: "Số 1, Trung Hòa, Cầu Giấy, Hà Nội",
        owner: "Nhà điều hành 1",
        ownerAddress: "Số 1, Trung Hòa, Cầu Giấy, Hà Nội",
        group: "Nhóm máy ABFC",
        status: "Đang hoạt động",
        model: "Máy bán hàng 55\"",
        machineModel: "Máy bán nước"
    },
    {
        id: "2",
        name: "Máy 2",
        code: "789123",
        address: "Số 1, Trung Hòa, Cầu Giấy, Hà Nội",
        owner: "Nhà điều hành 1",
        ownerAddress: "Số 1, Trung Hòa, Cầu Giấy, Hà Nội",
        group: "Nhóm máy ABFC",
        status: "Đang hoạt động",
        model: "Máy bán hàng 55\"",
        machineModel: "Máy bán nước"
    },
    {
        id: "3",
        name: "Máy 3",
        code: "456897",
        address: "Số 1, Trung Hòa, Cầu Giấy, Hà Nội",
        owner: "Nhà điều hành 1",
        ownerAddress: "Số 1, Trung Hòa, Cầu Giấy, Hà Nội",
        group: "Nhóm máy ABFC",
        status: "Đang hoạt động",
        model: "Máy bán hàng 55\"",
        machineModel: "Máy bán nước"
    },
]

function ListView() {
    return (
        <>
            <div className="listview">
                <ul>
                    {listMachine.map(element => {
                        return (
                            <NavLink to={{ pathname: "/manage/" + element["id"], state: element }} activeClassName='active'><ListViewItem name={element.name} icon={<MachineIconOnline />} /></NavLink>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default ListView