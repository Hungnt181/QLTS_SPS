import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import type { AssetInvenType, InventoryListType } from "../../types/table";
import InventoryDetailStyle from "../../styles/inventory/inventoryDetailStyle";
import { createTableColumn, Persona, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, Toolbar, ToolbarButton, type TableColumnDefinition, type TooltipProps } from "@fluentui/react-components";
import { DismissSquare24Regular } from "@fluentui/react-icons";
import AssetInvenList from "./assetInvenList";
import InvenBoardList from "./invenBoardList";


type TableInvenBoardProps = {
    tooltipProps?: TooltipProps
}

const InventoryDetail: React.FC<TableInvenBoardProps> = ({tooltipProps}) => {
    const { maSoPhieu } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    const nav = useNavigate()
    const style = InventoryDetailStyle()
    const [inventory, setInventory] = useState <InventoryListType | (null)> (null)

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
                console.log ("lỗi", error)
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
    
    return (
        <> 
        <div className={style.detailPage}>
            <Toolbar aria-label="Back" className={style.toolbar}>
                <ToolbarButton 
                    appearance="subtle"
                    icon={<DismissSquare24Regular className={style.toolbarIcon} />}
                    onClick={() => nav('/taisan/inventory')}
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
                                Bộ phận:
                            </div>
                            <div className={style.info}> 
                                {inventory?.boPhan}
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
                        <AssetInvenList />
                    </div>
                    <Outlet />
                </div>
            </div>  
        </>
    )
}

export default InventoryDetail