import React from "react";
import NavBar from "../components/NavBar";
import '../styles/machine-info-view.scss'

import { withRouter } from 'react-router-dom'
import CardView from "../components/CardView";
import Button from "../components/Button";

function MachineInfo(props: any) {
    console.log(props);
    return (
        <>
            <NavBar />
            <div className="info-view">
                <div className="info-view__left">
                    <div className="info-view-item">
                        <p className="info-view-item__label">Tên máy:</p>
                        <p className="info-view-item__data">{props.location.state.name}</p>
                    </div>
                    <div className="info-view-item">
                        <p className="info-view-item__label">Mã máy:</p>
                        <p className="info-view-item__data">{props.location.state.code}</p>
                    </div>
                    <div className="info-view-item">
                        <p className="info-view-item__label">Địa điểm:</p>
                        <p className="info-view-item__data">{props.location.state.address}</p>
                    </div>
                    <div className="info-view-item">
                        <p className="info-view-item__label">Nhà điều hành:</p>
                        <p className="info-view-item__data">{props.location.state.owner}</p>
                    </div>
                    <div className="info-view-item">
                        <p className="info-view-item__label">Địa điểm:</p>
                        <p className="info-view-item__data">{props.location.state.ownerAddress}</p>
                    </div>
                    <div className="info-view-item">
                        <p className="info-view-item__label">Nhóm máy:</p>
                        <p className="info-view-item__data">{props.location.state.group}</p>
                    </div>
                    <div className="info-view-item">
                        <p className="info-view-item__label">Trạng thái:</p>
                        <p className="info-view-item__data">{props.location.state.status}</p>
                    </div>
                    <div className="info-view-item">
                        <p className="info-view-item__label">Kiểu máy:</p>
                        <p className="info-view-item__data">{props.location.state.model}</p>
                    </div>
                    <div className="info-view-item">
                        <p className="info-view-item__label">Mô hình máy</p>
                        <p className="info-view-item__data">{props.location.state.machineModel}</p>
                    </div>

                    <div className="info-view-item flex-center">
                        <Button background="#00BAB5" textColor="#FFF" borderColor="none">
                            <>
                                <p>Chỉnh sửa</p>
                            </>
                        </Button>
                    </div>


                </div>
                <div className="info-view__right">
                    <CardView color="#4080FF">
                        <div className="content">
                            <div className="tittle">Tổng tiền hiện tại</div>
                            <div className="data">13Tr500</div>
                        </div>
                    </CardView>
                    <CardView color="#33CC5E">
                        <div className="content">
                            <div className="tittle">Sản phẩm</div>
                            <div className="data">432/500</div>
                        </div>
                    </CardView>
                    <CardView color="#9B33CC">
                        <div className="content">
                            <div className="tittle">Lượt giao dịch</div>
                            <div className="data">123</div>
                        </div>
                    </CardView>
                    <CardView color="#FFBE40">
                        <div className="content">
                            <div className="tittle">Khách hàng</div>
                            <div className="data">190</div>
                        </div>
                    </CardView>
                </div>
            </div>
        </>
    )
}
export default withRouter(MachineInfo);