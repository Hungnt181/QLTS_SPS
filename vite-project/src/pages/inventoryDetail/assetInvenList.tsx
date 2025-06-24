import { useEffect, useState } from "react"
import type { AssetInvenType } from "../../types/table"
import { Button, createTableColumn, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, type TableColumnDefinition } from "@fluentui/react-components"
import { ArrowExport20Regular, ArrowExport24Regular, QrCode28Regular } from "@fluentui/react-icons"
import InventoryDetailStyle from "../../styles/inventory/inventoryDetailStyle"

interface AssetInvenListProps {
    phongBan?: string
    diaDiem?: string
    useTemp?: boolean
    assetList?: AssetInvenType[]
}

const AssetInvenList = ({ assetList, phongBan, diaDiem, useTemp }: AssetInvenListProps) => {
    const [assetInven, setAssetInven] = useState<AssetInvenType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const style = InventoryDetailStyle()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)

                if (Array.isArray(assetList) && assetList.length > 0) {
                    setAssetInven(assetList)
                    return
                }

                const data = localStorage.getItem('data')
                if (!data) {
                    setAssetInven([])
                    return
                }

                const parsed = JSON.parse(data)

                if (useTemp) {
                    const tempList: AssetInvenType[] = parsed?.AssetInvenList?.temp || []
                    setAssetInven(tempList)
                    return
                }

                const groupedAssets = parsed?.AssetInvenList || {}
                if (!groupedAssets || typeof groupedAssets !== 'object') {
                    setAssetInven([])
                    return
                }

                const allAssets: AssetInvenType[] = (Object.values(groupedAssets) as unknown[])
                    .flat()
                    .filter((item): item is AssetInvenType => {
                        return (
                            item !== null &&
                            typeof item === 'object' &&
                            'tenTaiSan' in item
                        )
                    })

                if (!diaDiem || !phongBan) {
                    setAssetInven([])
                    return
                }

                let filtered = allAssets.filter((item) => item.diaDiem === diaDiem)

                if (phongBan) {
                    filtered = filtered.filter((item) => item.phongBan === phongBan)
                }
                console.log("Tìm tài sản theo:", { phongBan, diaDiem })

                setAssetInven(filtered)

            } catch (error) {
                console.log("lỗi", error)
                setAssetInven([])
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [phongBan, diaDiem, useTemp, assetList])

    const tableHeadCell = [
        'Tên tài sản', 'Mã tài sản', 'Mã QR', 'Người quản lý', 'Chức vụ', 'Phòng ban', 'Chưa sử dụng', 'Đang sử dụng', 'Hỏng, sửa chữa, bảo dưỡng'
    ]

    const item: Item[] = assetInven.map((data: AssetInvenType) => ({
        tenTaiSan: data.tenTaiSan,
        maTaiSan: data.maTaiSan,
        nguoiQuanLy: data.nguoiQuanLy,
        chucVu: data.chucVu,
        phongBan: data.phongBan,
        chuaSuDung: data.chuaSuDung,
        dangSuDung: data.dangSuDung,
        hongSua: data.hongSua,
    }))

    const column: TableColumnDefinition<Item>[] = [
        createTableColumn<Item>({
            columnId: "tenTaiSan",
        }),
        createTableColumn<Item>({
            columnId: "maTaiSan",
        }),
        createTableColumn<Item>({
            columnId: "qr",
        }),
        createTableColumn<Item>({
            columnId: "nguoiQuanLy",
        }),
        createTableColumn<Item>({
            columnId: "chucVu",
        }),
        createTableColumn<Item>({
            columnId: "phongBan",
        }),
        createTableColumn<Item>({
            columnId: "chuaSuDung",
        }),
        createTableColumn<Item>({
            columnId: "dangSuDung",
        }),
        createTableColumn<Item>({
            columnId: "hongSua",
        }),
    ]
    return (
        <>
            <Table>
                <TableHeader className={style.headerCell}>
                    <TableRow>
                        {
                            tableHeadCell.map((item, index) => (
                                <TableHeaderCell key={index}>{item}</TableHeaderCell>
                            ))
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {assetInven.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                {row?.tenTaiSan}
                            </TableCell>
                            <TableCell>
                                {row?.maTaiSan}
                            </TableCell>
                            <TableCell>
                                <QrCode28Regular />
                            </TableCell>
                            <TableCell>
                                {row?.nguoiQuanLy}
                            </TableCell>
                            <TableCell>
                                {row?.chucVu}
                            </TableCell>
                            <TableCell>
                                {row?.phongBan}
                            </TableCell>
                            <TableCell>
                                {row?.chuaSuDung}
                            </TableCell>
                            <TableCell>
                                {row?.dangSuDung}
                            </TableCell>
                            <TableCell>
                                {row?.hongSua}
                            </TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell colSpan={6} className={style.sum}>
                            Tổng cộng
                        </TableCell>
                        <TableCell>
                            {
                                assetInven.reduce((sum, row) => sum + (parseInt(row?.chuaSuDung) || 0), 0)
                            }
                        </TableCell>
                        <TableCell>
                            {
                                assetInven.reduce((sum, row) => sum + (parseInt(row?.dangSuDung) || 0), 0)
                            }
                        </TableCell>
                        <TableCell>
                            {
                                assetInven.reduce((sum, row) => sum + (parseInt(row?.hongSua) || 0), 0)
                            }
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}
export default AssetInvenList