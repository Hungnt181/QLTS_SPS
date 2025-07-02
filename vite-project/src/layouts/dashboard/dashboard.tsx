import DashboardToolBar from "../toolBar/dashboardToolBar.tsx";
import { useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import dashboardStyle from "../../styles/dashboard/dashboard.ts";
import FlucChart from "./flucChart.tsx";
import AssetStatusStackedBar from "./assetStatusChart.tsx";
import AssetDepartmentStackedBar from "./assetDepartment.tsx";
import {
    Money24Regular,
    PresenceAvailable16Regular,
    PresenceOffline16Regular,
    BoxEdit20Regular,
    Warning20Regular
} from "@fluentui/react-icons"

type TabToolBar = {
    value: string;
    url: string;
    label: string;
    icon?: React.ReactNode;
    action?: () => void;

}

const Dashboard = () => {
    const style = dashboardStyle()
    const nav = useNavigate();
    const titleToolBar = useRef<TabToolBar[]>([
        { value: "thongke", url: "#", label: "Thống kê" },
    ]);

    return (
        <div className={style.dashboardPage}>
            <div className={style.toolBar}>
                <DashboardToolBar titleToolBar={titleToolBar}></DashboardToolBar>
            </div>

            <div className={style.contentContainer}>
                <div className={style.general}>
                    <div className={style.generalContent}>
                        <div className={style.generalContentTitle}>
                            <Money24Regular className={style.genIcon} />
                            <p className={style.generalTitle}>Nguyên giá tài sản</p>
                        </div>
                        <div className={style.generalContentPrice}>
                            <p className={style.price}>10,000 tỷ</p>
                        </div>
                        <div className={style.totalAsset}>
                            <p className={style.total}>500,00 tài sản</p>
                        </div>
                    </div>

                    <div className={style.generalContent}>
                        <div className={style.generalContentTitle}>
                            <PresenceAvailable16Regular className={style.genIcon} />
                            <p className={style.generalTitle}>Đang sử dụng</p>
                        </div>
                        <div className={style.generalContentPrice}>
                            <p className={style.price}>7,00 tỷ</p>
                        </div>
                        <div className={style.totalAsset}>
                            <p className={style.total}>350,00 tài sản</p>
                        </div>
                    </div>

                    <div className={style.generalContent}>
                        <div className={style.generalContentTitle}>
                            <PresenceOffline16Regular className={style.genIcon} />
                            <p className={style.generalTitle}>Chưa sử dụng</p>
                        </div>
                        <div className={style.generalContentPrice}>
                            <p className={style.price}>0,5 tỷ</p>
                        </div>
                        <div className={style.totalAsset}>
                            <p className={style.total}>50,00 tài sản</p>
                        </div>
                    </div>

                    <div className={style.generalContent}>
                        <div className={style.generalContentTitle}>
                            <BoxEdit20Regular className={style.genIcon} />
                            <p className={style.generalTitle}>Hỏng, sửa chữa, bảo dưỡng</p>
                        </div>
                        <div className={style.generalContentPrice}>
                            <p className={style.price}>1.5,00 tỷ</p>
                        </div>
                        <div className={style.totalAsset}>
                            <p className={style.total}>80,00 tài sản</p>
                        </div>
                    </div>

                    <div className={style.generalContent}>
                        <div className={style.generalContentTitle}>
                            <Warning20Regular className={style.genIcon} />
                            <p className={style.generalTitle}>Mất, huỷ, thanh lý</p>
                        </div>
                        <div className={style.generalContentPrice}>
                            <p className={style.price}>1,00 tỷ</p>
                        </div>
                        <div className={style.totalAsset}>
                            <p className={style.total}>20,00 tài sản</p>
                        </div>
                    </div>
                </div>

                <div className={style.chart}>
                    <div className={style.chartTitle}>
                        <h2 className={style.title}>Biến động tài sản</h2>
                        <p className={style.p}>SPS, Năm 2025</p>
                    </div>
                    <div>
                        <FlucChart />
                    </div>
                </div>

                <div className={style.responsiveChart}>
                    <div className={style.chart}>
                        <div className={style.chartTitle}>
                            <h2 className={style.title}>Thống kê tài sản theo loại</h2>
                        </div>
                        <div>
                            <AssetStatusStackedBar />
                        </div>
                    </div>

                    <div className={style.chart}>
                        <div className={style.chartTitle}>
                            <h2 className={style.title}>Thống kê tài sản theo phòng ban</h2>
                        </div>
                        <div>
                            <AssetDepartmentStackedBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard