import React from "react";
import TittleBar from "../components/TittleBar";

import Avatar from "../assets/image/avatar.jpg";
import CardView from "../components/CardView";

import '../styles/home.scss'

function HomePage() {
    return (
        <>
            <TittleBar name="Trang chủ" avatar={Avatar} />
            <div className="page-body">
                <div className="page-body-row-1">
                    <CardView color="#4080FF">
                        <div className="content">
                            <div className="tittle">Tổng máy</div>
                            <div className="data">1.340</div>
                        </div>
                    </CardView>
                    <CardView color="#33CC5E">
                        <div className="content">
                            <div className="tittle">Đang hoạt động</div>
                            <div className="data">1.320</div>
                        </div>
                    </CardView>
                    <CardView color="#FF4D54">
                        <div className="content">
                            <div className="tittle">Đã dừng</div>
                            <div className="data">120</div>
                        </div>
                    </CardView>
                </div>
            </div>
        </>
    );
}

export default HomePage;