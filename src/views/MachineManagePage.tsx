import React from "react";
import TittleBar from "../components/TittleBar";

import Avatar from '../assets/image/avatar.jpg'

function MachineManagePage() {
    return (
        <>
            <TittleBar name="Quản lý máy" avatar={Avatar}/>
        </>
    );
}

export default MachineManagePage;