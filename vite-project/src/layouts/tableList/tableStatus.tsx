import { 
    createTableColumn,
    type TableColumnDefinition,
    Table,
    TableBody, TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow,
    TableSelectionCell, Tooltip, useTableFeatures, useTableSelection
} from "@fluentui/react-components";
import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import tableListStyle from "../../styles/tableList/tableList.ts";
import type { TooltipProps } from "@fluentui/react-components";
import type { StatusList } from "../../types/table.ts";


type TableStatusProps = {
    tooltipProps?: TooltipProps
}

const TableStatus = ({tooltipProps} : TableStatusProps) => {
    const [status, setStatus] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const location = useLocation()

    useEffect (() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = localStorage.getItem('data')
                const allData = data ? JSON.parse(data) : []
                // console.log("lỗi", allData)
                setStatus(allData.statusList)                
            } catch (error) {
                console.log("lỗi khi lấy dữ liệu", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
        if (location.state?.reload) {
            fetchData()
        }
    }, [location.state?.reload])

    const style = tableListStyle()
    const nav = useNavigate()

    const tableHeaderCell = [
        'Tên tình trạng', 'Mô tả',
    ]

    const items: Item[] = (status ?? []).map((data: StatusList) => ({
        tenTinhTrang: data.tenTinhTrang,
        mauSac: data.mauSac,
        moTa: data.moTa,
    }))

    const columns: TableColumnDefinition<Item>[] = [
        createTableColumn<Item> ({
            columnId: "tenTinhTrang",
        }),
        // createTableColumn<Item> ({
        //     columnId: "mauSac",
        // }),
        createTableColumn<Item> ({
            columnId: "moTa",
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
    } = useTableFeatures (
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
                    toggleAllRows(e)
                    e.preventDefault()
                }
            },
            selected,
            appearence: selected ? ("brand" as const) : ("none" as const),
        }
    })

    const toggleAllKeydown = React.useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if(e.key === "") {
                toggleAllRows(e)
                e.preventDefault()
            }
        },
        [toggleAllRows]
    )
    

    return(
        <div>
            <div>
                {isLoading ? (<p>Đang tải dữ liệu...</p>) : (
                    <Table aria-label="Table with subtle selection">
                        <TableHeader>
                            <TableRow>
                                <TableSelectionCell
                                    checked={allRowsSelected ? true : someRowsSelected ? "mixed" : false}
                                    onClick={toggleAllRows}
                                    onKeyDown={toggleAllKeydown}
                                    checkboxIndicator={{"aria-label": "Chọn tất cả"}}
                                />
                                {
                                    tableHeaderCell.map((item, index) => (
                                        <TableHeaderCell key={index}>{item}</TableHeaderCell>
                                    ))
                                }
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {rows.map (({item, selected, onClick, onKeyDown, appearence}) => (
                                <TableRow
                                    key={item.tenTinhTrang}
                                    onClick={onClick}
                                    onKeyDown={onKeyDown}
                                    aria-selected={selected}
                                    appearance={appearence}
                                >
                                    <TableSelectionCell 
                                        subtle
                                        checked={selected}
                                        checkboxIndicator={{"aria-label": "Chọn"}}
                                    />
                                    <TableCell>
                                        {item?.tenTinhTrang}
                                    </TableCell>
                                    {/* <TableCell>
                                        {item?.mauSac}
                                    </TableCell> */}
                                    <Tooltip content={item?.moTa || ""} {...tooltipProps} relationship="label">
                                        <TableCell>
                                            {item?.moTa}
                                        </TableCell>
                                    </Tooltip>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default TableStatus;