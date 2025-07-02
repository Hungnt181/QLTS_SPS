import { Persona, Tab, TabList, Text } from "@fluentui/react-components"
import AssetDetailNewStyle from "../../../styles/listPages/assetDetail/assetDetailNew"
import { GroupReturn20Regular } from "@fluentui/react-icons"
import { PersonaSize } from "@fluentui/react"
import type { AssignAssetItem, RevokeAssetItem } from "../../../types/table"
import { useState } from "react"
import { Outlet } from "react-router-dom"

const HistoryBox = () => {
    const style = AssetDetailNewStyle()
    const [assetRevoke, setAssetRevoke] = useState<RevokeAssetItem | null>(null);
    const [assetAssign, setAssetAssign] = useState<AssignAssetItem | null>(null);

    return (
        <div className={style.historyBox}>
            <div className={style.historyHeader}>
                <TabList selectedValue="tab1">
                    <Tab value="tab1">Lịch sử</Tab>
                </TabList>
            </div>
            <div className={style.historyTable}>
                {Array.isArray(assetRevoke)
                    ? assetRevoke.map((item: RevokeAssetItem) => (
                        <div key={item?.id} className={style.history}>
                            <div className={style.time}>
                                <Text>{item?.ngayThuHoi}</Text>
                            </div>

                            <div className={style.timeContainer}>
                                <div className={style.timeLine}>
                                    <div className={style.activities}>
                                        <div className={style.statusText}>Đã thu hồi</div>
                                        <div className={style.info}>
                                            <div className={style.text}>
                                                <Persona
                                                    size="small"
                                                    className={style.persona}
                                                />
                                                <span>
                                                    {item?.nguoiThuHoi}
                                                </span>
                                                <span className={style.chucVu}>
                                                    Nhân viên thực tập - Phòng Công Nghệ 1 - SPSVN
                                                </span>
                                            </div>
                                        </div>
                                        <div className={style.iconWrapper}>
                                            <GroupReturn20Regular />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : null}
                {Array.isArray(assetAssign)
                    ? assetAssign.map((item: AssignAssetItem) => (
                        <div key={item?.id} className={style.history}>
                            <div className={style.time}>
                                <Text>{item?.ngayCapPhat}</Text>
                            </div>

                            <div className={style.timeContainer}>
                                <div className={style.timeLine}>
                                    <div className={style.activities}>
                                        <div className={style.statusText}>Đã cấp phát</div>
                                        <div className={style.info}>
                                            <div className={style.text}>
                                                <Persona
                                                    size="small"
                                                    className={style.persona}
                                                />
                                                <span>
                                                    {item?.nguoiCapPhat}
                                                </span>
                                                <span className={style.chucVu}>
                                                    Nhân viên thực tập - Phòng Công Nghệ 1 - SPSVN
                                                </span>
                                            </div>
                                        </div>
                                        <div className={style.iconWrapper}>
                                            <GroupReturn20Regular />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : null}
                <div className={style.history}>
                    <div className={style.time}>
                        <Text>10/08 8:00</Text>
                    </div>

                    <div className={style.timeContainer}>
                        <div className={style.timeLine}>
                            <div className={style.activities}>
                                <div className={style.statusText}>Đã tiếp nhận</div>
                                <div className={style.historyInfo}>
                                    <div className={style.historyText}>
                                        <Persona
                                            size="small"
                                            className={style.persona}
                                        />
                                        <span>Nguyễn Như Trọng</span>
                                        <span className={style.chucVu}>
                                            Nhân viên thực tập - Phòng Công Nghệ 1 - SPSVN
                                        </span>
                                    </div>
                                </div>
                                <div className={style.iconWrapper}>
                                    <GroupReturn20Regular />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {}
            </div>
            <Outlet />
        </div>
    )
}
export default HistoryBox