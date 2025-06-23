import React, { useEffect, useState, useRef } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import InventoryToolBar from "../toolBar/inventoryToolBar.tsx";
import inventoryListStyle from "../../styles/listPages/inventoryList/inventoryList.ts";
import { createTableColumn, TableRow, Table, TableHeader, TableSelectionCell, useTableFeatures, useTableSelection, type TableColumnDefinition, type TooltipProps, TableHeaderCell, TableBody, TableCell } from "@fluentui/react-components";
import type { InventoryListType } from "../../types/table.ts";
import { Persona, PersonaSize } from "@fluentui/react"
import InventorySubToolBar from "../subToolBar/subToolBarInventory.tsx";

type TableInventoryProps = {
    tooltipProps?: TooltipProps
}

type TabToolBar = {
    value: string;
    url: string;
    label: string;
    icon?: React.ReactNode;
    action?: () => void;
}

const InventoryList: React.FC<TableInventoryProps> = ({ tooltipProps }) => {
    const [inventory, setInventory] = useState<InventoryListType[]>([])
    const location = useLocation()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { maSoPhieu } = useParams()

    useEffect(() => {

        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = localStorage.getItem('data')
                const allData = data ? JSON.parse(data) : []
                setInventory(
                    allData.InventoryList.map((item: InventoryListType) => ({
                        key: item.maSoPhieu,
                        ...item
                    }))
                )
                console.log({ inventory })

                // const inventoryList: InventoryListType[] = allData.InventoryList || []
                // const invenBoardList = allData.InvenBoardData || {}

                // const updatedInventory = inventoryList.map((item: InventoryListType) => {
                //     const boards =  invenBoardList[item.id] || []

                //     const truongBan = boards.find((boardMember: any) => boardMember.vaiTro === "Trưởng ban")

                //     return {
                //         ...item,
                //         truongBanKiemKe: truongBan?.hoTen || "",
                //         chucVu: truongBan?.chucVu || "", 
                //     }
                // })
                // setInventory(updatedInventory)

                // allData.InventoryList = updatedInventory
                // localStorage.setItem('data', JSON.stringify(allData))

            } catch (error) {
                console.log("Lỗi", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
        if (location.state?.reload) {
            fetchData()
        }
    }, [location.state?.reload])

    // const style = tableListStyle()
    const style = inventoryListStyle()
    const nav = useNavigate()

    const tableHeaderCell = [
        'Nội dung', 'Kì kiểm kê', 'Hạn kiểm kê', 'Địa điểm', 'Bộ phận', 'Nhóm tài sản', 'Loại tài sản', 'Trưởng ban kiểm kê', 'Chức vụ', 'Trạng thái', 'Tiến độ'
    ];

    console.log({ inventory });
    

    const items: Item[] = (inventory ?? []).map((data: InventoryListType) => ({
        id: data.id,
        maSoPhieu: data.maSoPhieu,
        noidung: data.noidung,
        kiKiemKe: data.kiKiemKe,
        hanKiemKe: data.hanKiemKe,
        diaDiem: data.diaDiem,
        boPhan: data.boPhan,
        nhomTaiSan: data.nhomTaiSan,
        loaiTaiSan: data.loaiTaiSan,
        truongBanKiemKe: data.truongBanKiemKe,
        chucVu: data.chucVu,
        trangThai: data.trangThai,
        tienDo: data.tienDo,
    }))

    const columns: TableColumnDefinition<Item>[] = [
        createTableColumn<Item>({
            columnId: "noidung",
        }),
        createTableColumn<Item>({
            columnId: "kiKiemKe",
        }),
        createTableColumn<Item>({
            columnId: "hanKiemKe",
        }),
        createTableColumn<Item>({
            columnId: "diaDiem",
        }),
        createTableColumn<Item>({
            columnId: "boPhan",
        }),
        createTableColumn<Item>({
            columnId: "nhomTaiSan",
        }),
        createTableColumn<Item>({
            columnId: "loaiTaiSan",
        }),
        createTableColumn<Item>({
            columnId: "truongBanKiemKe",
        }),
        createTableColumn<Item>({
            columnId: "chucVu",
        }),
        createTableColumn<Item>({
            columnId: "trangThai",
        }),
        createTableColumn<Item>({
            columnId: "tienDo",
        }),
    ]

    const {
        getRows,
        selection: {
            allRowsSelected,
            someRowsSelected,
            toggleAllRows,
            toggleRow,
            isRowSelected,
        },
    } = useTableFeatures(
        {
            items,
            columns,
        },
        [
            useTableSelection({
                selectionMode: "multiselect",
                defaultSelectedItems: new Set([])
            })
        ]
    )

    const rows = getRows((row) => {
        const selected = isRowSelected(row.rowId)
        return {
            ...row,
            onClick: (e: React.MouseEvent) => toggleRow(e, row.rowId),
            onKeyDown: (e: React.KeyboardEvent) => {
                if (e.key === "") {
                    e.preventDefault()
                    toggleRow(e, row.rowId)
                }
            },
            selected,
            appearence: selected ? ("brand" as const) : ("none" as const),
        }
    })

    const toggleAllKeydown = React.useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === "") {
                toggleAllRows(e)
                e.preventDefault()
            }
        },
        [toggleAllRows]
    )

    const titleToolBar = useRef<TabToolBar[]>([
        { value: "danhsach", url: "#", label: "Danh sách" },
    ]);

    return (
        <div className={style.inventoryPage}>
            <div>
                <InventoryToolBar titleToolBar={titleToolBar}></InventoryToolBar>
            </div>
            <div>
                <InventorySubToolBar onOpenAdd={() => nav('w-create')} />
               
            </div>
            <div className={style.tableList}>
                <div>
                    {isLoading ? (<p>Đang tải dữ liệu ...</p>) : (
                        <Table aria-label="Table with subtle selection" className={style.smallTable}>
                            <TableHeader>
                                <TableRow>
                                    <TableSelectionCell checked={allRowsSelected ? true : someRowsSelected ? "mixed" : false}
                                        onClick={toggleAllRows}
                                        onKeyDown={toggleAllKeydown}
                                        checkboxIndicator={{ "aria-label": "Chọn tất cả" }}
                                    />
                                    {
                                        tableHeaderCell.map((item, index) => (
                                            <TableHeaderCell key={index}>{item}</TableHeaderCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {rows.map(({ item, selected, onClick, onKeyDown, appearence }) => (
                                    <TableRow
                                        key={item.id}
                                        onClick={onClick}
                                        onKeyDown={onKeyDown}
                                        aria-selected={selected}
                                        appearance={appearence}
                                    >
                                        <TableSelectionCell
                                            subtle
                                            checked={selected}
                                            checkboxIndicator={{ "aria-label": "chọn cột" }}
                                        />
                                        <TableCell className={style.hoverNameItem} onClick={() => nav(`/taisan/inventory-detail/${item?.maSoPhieu}`)}>
                                            <div key={item?.id}>{item?.noidung}</div>
                                        </TableCell>
                                        <TableCell>
                                            {item?.kiKiemKe}
                                        </TableCell>
                                        <TableCell>
                                            {item?.hanKiemKe}
                                        </TableCell>
                                        <TableCell>
                                            {item?.diaDiem}
                                        </TableCell>
                                        <TableCell>
                                            {item?.boPhan}
                                        </TableCell>
                                        <TableCell>
                                            {item?.nhomTaiSan}
                                        </TableCell>
                                        <TableCell>
                                            {item?.loaiTaiSan}
                                        </TableCell>
                                        <TableCell>
                                            <Persona text={item?.truongBanKiemKe} size={PersonaSize.size24}/>
                                        </TableCell>
                                        <TableCell>
                                            {item?.chucVu}
                                        </TableCell>
                                        <TableCell>
                                            {item?.trangThai}
                                        </TableCell>
                                        <TableCell>
                                            {item?.tienDo}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </div>
                <Outlet></Outlet>
        </div>
    )
}
export default InventoryList;