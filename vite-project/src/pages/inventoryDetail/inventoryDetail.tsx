import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import type { AssetInvenType, InventoryListType } from "../../types/table";
import InventoryDetailStyle from "../../styles/inventory/inventoryDetailStyle";
import { Button, createTableColumn, Persona, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, Toolbar, ToolbarButton, type TableColumnDefinition, type TooltipProps } from "@fluentui/react-components";
import { ArrowExport24Regular, ArrowExportUp24Regular, Dismiss24Regular } from "@fluentui/react-icons";
import AssetInvenList from "./assetInvenList";
import InvenBoardList from "./invenBoardList";


type TableInvenBoardProps = {
    tooltipProps?: TooltipProps
}

const InventoryDetail: React.FC<TableInvenBoardProps> = ({ tooltipProps }) => {
    const { maSoPhieu } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    const nav = useNavigate()
    const style = InventoryDetailStyle()
    const [inventory, setInventory] = useState<InventoryListType | (null)>(null)
    const [assetFilters, setAssetFilters] = useState<{ phongBan: string; diaDiem: string }[]>([]);

    // Lấy thông tin chung
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = localStorage.getItem('data')
                if (!data) return

                const parsed = JSON.parse(data)
                const inventoryList: InventoryListType[] = Array.isArray(parsed.InventoryList)
                    ? parsed.InventoryList
                    : []
                const foundInventory = inventoryList.find(item => String(item.maSoPhieu) === String(maSoPhieu))
                setInventory(foundInventory || null)

            } catch (error) {
                console.log("lỗi", error)
            } finally {
                setIsLoading(false)
            }
        }
        if (maSoPhieu) {
            fetchData()
        }
    }, [maSoPhieu])


    // if(!inventory) {
    //     console.log('không tìm thấy thông tin kiểm kê')
    // }

    const handleSaveInventory = () => {
        const data = localStorage.getItem('data')
        if (!data || !inventory) return

        const parsed = JSON.parse(data)

        const inventoryList: InventoryListType[] = Array.isArray(parsed.InventoryList)
            ? parsed.InventoryList
            : []

        const updatedList = inventoryList.map(item => item.maSoPhieu === inventory.maSoPhieu ? inventory : item)

        parsed.InventoryList = updatedList

        localStorage.setItem('data', JSON.stringify(parsed))
        alert("Lưu thành công")
    }

    return (
        <>
            <div className={style.detailPage}>
                <Toolbar aria-label="Back" className={style.toolbar}>
                    <ToolbarButton className={style.toolbarBtn}
                        appearance="subtle"
                        icon={<Dismiss24Regular className={style.toolbarIcon} />}
                        onClick={() => nav('/asset/inventory')}
                    >
                    </ToolbarButton>
                    <div className={style.toolbarTitle}>
                        Thông tin kiểm kê
                    </div>
                </Toolbar>

                <div className={style.detail}>
                    <div className={style.general}>
                        <h2 className={style.title}>Thông tin chung</h2>
                        <div className={style.generalInfo}>
                            <div className={style.text}>
                                Mã số phiếu:
                            </div>
                            <div className={style.info}>
                                {inventory?.maSoPhieu}
                            </div>
                        </div>
                        <div className={style.generalInfo}>
                            <div className={style.text}>
                                Kì kiểm kê:
                            </div>
                            <div className={style.info}>
                                {inventory?.kiKiemKe}
                            </div>
                        </div>
                        <div className={style.generalInfo}>
                            <div className={style.text}>
                                Phòng ban:
                            </div>
                            <div className={style.info}>
                                {inventory?.phongBan}
                            </div>
                        </div>
                        <div className={style.generalInfo}>
                            <div className={style.text}>
                                Nhóm tài sản:
                            </div>
                            <div className={style.info}>
                                {inventory?.nhomTaiSan}
                            </div>
                        </div>
                        <div className={style.generalInfo}>
                            <div className={style.text}>
                                Loại tài sản:
                            </div>
                            <div className={style.info}>
                                {inventory?.loaiTaiSan}
                            </div>
                        </div>
                    </div>

                    <div>
                        <InvenBoardList />
                    </div>

                    <div>
                        <div className={style.header}>
                            <h2 className={style.title}>Tài sản kiểm kê</h2>
                            <Button icon={<ArrowExport24Regular className={style.rotate} />}>Xuất File</Button>
                        </div>
                        <AssetInvenList phongBan={inventory?.phongBan}
                            diaDiem={inventory?.diaDiem} />
                    </div>
                    <div>
                        <div className={style.header}>
                            <h2 className={style.title}>Kết quả kiểm kê</h2>
                        </div>
                        <Button icon={<ArrowExportUp24Regular />}>Import</Button>
                    </div>
                    <div className={style.saveBtn}>
                        <Button
                            appearance="primary"
                            onClick={handleSaveInventory}>
                            Lưu kiểm kê
                        </Button>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default InventoryDetail