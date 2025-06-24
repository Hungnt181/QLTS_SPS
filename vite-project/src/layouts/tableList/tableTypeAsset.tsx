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
import type { TypeAsset } from "../../types/table.ts"
import type { TooltipProps } from "@fluentui/react-components";


type TableTypeAssetProps = {
    tooltipProps?: TooltipProps;
}

const TableTypeAsset = ({tooltipProps} : TableTypeAssetProps) => {
    const [typeAsset, setTypeAsset] = useState<TypeAsset[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const location = useLocation()
    
    useEffect (() => {

        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = localStorage.getItem('data')
                const allData = data ? JSON.parse(data) : []
                // console.log("lỗi", allData)
                setTypeAsset(
                    allData.typeAsset.map((item: TypeAsset) => ({
                        key: item.tenLoaiTaiSan,
                        ...item
                    }))
                )
                console.log({typeAsset});
                
            } catch (error) {
                console.log("Lỗi khi lấy dữ liệu",error)
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
        'Tên loại tài sản', 'Mã loại tài sản', 'Nhóm tài sản', 'Mô tả',
    ]

    const items: Item[] = (typeAsset ?? []).map((data: TypeAsset) => ({
        id: data.id,
        tenLoaiTaiSan: data.tenLoaiTaiSan,
        maLoaiTaiSan: data.maLoaiTaiSan,
        tenNhomTaiSan: data.tenNhomTaiSan,
        moTa: data.moTa,
    }))

    const columns: TableColumnDefinition<Item>[] = [
        createTableColumn<Item> ({
            columnId: "tenLoaiTaiSan",
        }),
        createTableColumn<Item> ({
            columnId: "maLoaiTaiSan",
        }),
        createTableColumn<Item> ({
            columnId: "tenNhomTaiSan",
        }),
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
            if (e.key === " ") {
                toggleAllRows(e);
                e.preventDefault();
            }
        },
        [toggleAllRows]
    )

    return (
        <div>
            <div>
                {isLoading ? (<p>Đang tải dữ liệu...</p>) : (
                    <Table
                        aria-label="Table with subtle selection"
                    >
                        <TableHeader>
                            <TableRow>
                                <TableSelectionCell 
                                    checked ={
                                        allRowsSelected ? true : someRowsSelected ? "mixed" : false
                                    }
                                    onClick={toggleAllRows}
                                    onKeyDown={toggleAllKeydown}
                                    checkboxIndicator={{"aria-label": "Selected all rows"}}
                                />
                                {
                                    tableHeaderCell.map((item, index) => (
                                        <TableHeaderCell key={index}>{item}</TableHeaderCell>
                                    ))
                                }
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {rows.map (({item, selected, onClick, onKeyDown, appearence}) =>(
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
                                        checkboxIndicator={{"aria-label": "Seclect row"}}
                                    />
                                    <TableCell >
                                        {item?.tenLoaiTaiSan}
                                    </TableCell>
                                    <TableCell>
                                        {item?.maLoaiTaiSan}
                                    </TableCell>
                                    <TableCell>
                                        {item?.tenNhomTaiSan}
                                    </TableCell>
                                    <Tooltip content={item?.moTa || ""} {...tooltipProps}>
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
    );
};

export default TableTypeAsset;