import React from 'react';
import '../styles/slidebar.scss'
import SlideBarItem from './SlideBarItem';
import {Link, NavLink} from 'react-router-dom'

import logo from '../assets/image/logo.svg'
import MenuIcon from './icons/MenuIcon'
import HomeIcon from './icons/HomeIcon';
import TaskListIcon from './icons/TaskListIcon';
import MachineIcon from './icons/MachineIcon';
import BottleIcon from './icons/BottleIcon';
import ClockArrow from './icons/ClockArrow';
import ChartLine from './icons/ChartLine';
import SettingIcon from './icons/SettingIcon';

function SlideBar() {
    return (
        <>
            <div className="slidebar">
                <div className="slidebar-header">
                    <img src={logo} alt="" />
                    <div className="slidebar-header-icon"><MenuIcon/></div>
                </div>
                <div className="slidebar-body">
                    <ul>
                        <NavLink to="/" activeClassName="active" exact={true}><SlideBarItem name="Trang chủ" icon={<HomeIcon/>}/></NavLink>
                        <NavLink to="/work" activeClassName="active"><SlideBarItem name="Công việc" icon={<TaskListIcon/>}/></NavLink>
                        <NavLink to="/manage" activeClassName="active"><SlideBarItem name="Quản lý máy" icon={<MachineIcon/>}/></NavLink>
                        <NavLink to="/product" activeClassName="active"><SlideBarItem name="Sản phẩm" icon={<BottleIcon/>}/></NavLink>
                        <NavLink to="/history" activeClassName="active"><SlideBarItem name="Lịch sử" icon={<ClockArrow/>}/></NavLink>
                        <NavLink to="/report" activeClassName="active"><SlideBarItem name="Báo cáo" icon={<ChartLine/>}/></NavLink>
                        <NavLink to="/admin" activeClassName="active"><SlideBarItem name="Quản trị" icon={<SettingIcon/>}/></NavLink>
                    </ul>
                </div>
            </div>
        </>

    );
}

export default SlideBar;
