import { useEffect, useState } from "react"
import type { InvenBoardType } from "../../types/table"
import { Button, createTableColumn, Persona, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, type TableColumnDefinition } from "@fluentui/react-components"
import InventoryDetailStyle from "../../styles/inventory/inventoryDetailStyle"
import { useLocation, useNavigate, useParams } from "react-router-dom"

interface InvenBoardListProps {
    useTemp?: boolean
}

const InvenBoardList = ({ useTemp = false }: InvenBoardListProps) => {
    const [invenBoard, setInvenBoard] = useState<InvenBoardType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const style = InventoryDetailStyle()
    const nav = useNavigate()
    const location = useLocation()
    const { maSoPhieu } = useParams<{ maSoPhieu: string }>();

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const data = localStorage.getItem('data')
            // if (!data && typeof "data" == 'string' && !JSON.parse(data)) return
            if (!data) return

            const parsed = JSON.parse(data)

            console.log({ parsed });

            let invenBoard: InvenBoardType[] = []

            if (useTemp) {
                invenBoard = parsed?.InvenBoardData?.temp || []
                console.log("Dữ liệu từ temp:", invenBoard);
                setInvenBoard(invenBoard)
            } else {
                if (!maSoPhieu) return
            // const invenBoard: any = parsed.InvenBoardList && parsed.InvenBoardList[{id}]
            const invenBoard: InvenBoardType[] = parsed?.InvenBoardData?.[maSoPhieu] || []
                // ? parsed.InvenBoardList[id]
                // : null;
            
            console.log({ invenBoard });
            setInvenBoard(invenBoard)
            console.log(`dữ liệu cho id = "${maSoPhieu}:`, invenBoard);
            }
            
            
        } catch (error) {
            console.log("lỗi", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [location.state?.reload])

    // useEffect(() => {
    //     fetchData()
    // }, [])

    const tableHeaderCell = [
        'STT', 'Họ và tên', 'Phòng ban', 'Chức vụ', 'Địa điểm', 'Vai trò'
    ]

    const items: Item[] = invenBoard.map((data: InvenBoardType) => ({
        STT: data.STT,
        hoTen: data.hoTen,
        phongBan: data.phongBan,
        chucVu: data.chucVu,
        diaDiem: data.diaDiem,
        vaiTro: data.vaiTro
    }))

    const columns: TableColumnDefinition<Item>[] = [
        createTableColumn<Item>({
            columnId: "STT",
        }),
        createTableColumn<Item>({
            columnId: "hoTen",
        }),
        createTableColumn<Item>({
            columnId: "phongBan",
        }),
        createTableColumn<Item>({
            columnId: "chucVu",
        }),
        createTableColumn<Item>({
            columnId: "diaDiem",
        }),
        createTableColumn<Item>({
            columnId: "vaiTro",
        }),
    ]

    return (
        <>
            <div className={style.header}>
                <h2 className={style.title}>Ban kiểm kê</h2>
                <Button appearance="primary" onClick={() => nav('add')}>Thêm mới</Button>
            </div>
            <Table>
                <TableHeader className={style.headerCell}>
                    <TableRow>
                        {
                            tableHeaderCell.map((item, index) => (
                                <TableHeaderCell key={index}>{item}</TableHeaderCell>
                            ))
                        }
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {invenBoard.map((data, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                {data?.STT}
                            </TableCell>
                            <TableCell>
                                <Persona name={data?.hoTen} size="small" className={style.persona} />
                            </TableCell>
                            <TableCell>
                                {data?.phongBan}
                            </TableCell>
                            <TableCell>
                                {data?.chucVu}
                            </TableCell>
                            <TableCell>
                                {data?.diaDiem}
                            </TableCell>
                            <TableCell>
                                {data?.vaiTro}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
export default InvenBoardList