import * as React from "react";
import tableListStyle from "../../styles/tableList/tableList.ts";
import {
    createTableColumn,
    Table,
    TableBody, TableCell,
    type TableColumnDefinition,
    TableHeader,
    TableHeaderCell,
    TableRow,
    TableSelectionCell, Tooltip, useTableFeatures, useTableSelection
} from "@fluentui/react-components";
import {useEffect, useState} from "react";
import type {TypeGroupAsset} from "../../types/table.ts";
import axios from "axios";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import type { TooltipProps } from "@fluentui/react-components";

type TableGroupAssetProps = {
    tooltipProps?: TooltipProps;
}
const TableGroupAsset = ({tooltipProps} : TableGroupAssetProps) => {
    // call api lấy data
    const [groupAsset, setGroupAsset] = useState<TypeGroupAsset[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:3000/nhomTaiSan`);
                setGroupAsset(
                    response.data.map((item: TypeGroupAsset) => ({
                        key: item.maNhomTaiSan,
                        ...item
                    }))
                );
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
        if (location.state?.reload) {
            fetchData();
        }
    }, [location.state?.reload]);
    //
    const style = tableListStyle();
    const nav = useNavigate()

    //
    const tableHeaderCell = [
        'Tên nhóm tài sản', 'Mã nhóm tài sản', 'Mô tả',
    ]


    const items: Item[] = groupAsset.map((data : TypeGroupAsset) => ({
        id: data.id,
        tenNhomTaiSan: data.tenNhomTaiSan,
        maNhomTaiSan: data.maNhomTaiSan,
        moTa: data.moTa,
    }));

//

    const columns: TableColumnDefinition<Item>[] = [
        createTableColumn<Item>({
            columnId: "tenNhomTaiSan",
        }),
        createTableColumn<Item>({
            columnId: "maNhomTaiSan",
        }),
        createTableColumn<Item>({
            columnId: "moTa",
        }),
    ];

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
            columns,
            items,
        },
        [
            useTableSelection({
                selectionMode: "multiselect",
                defaultSelectedItems: new Set([]),
            }),
        ]
    );

    const rows = getRows((row) => {
        const selected = isRowSelected(row.rowId);
        return {
            ...row,
            onClick: (e: React.MouseEvent) => toggleRow(e, row.rowId),
            onKeyDown: (e: React.KeyboardEvent) => {
                if (e.key === " ") {
                    e.preventDefault();
                    toggleRow(e, row.rowId);
                }
            },
            selected,
            appearance: selected ? ("brand" as const) : ("none" as const),
        };
    });

    const toggleAllKeydown = React.useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === " ") {
                toggleAllRows(e);
                e.preventDefault();
            }
        },
        [toggleAllRows]
    );
    return (

        <div className={style.tableList}>
            <div>
                {isLoading ? (<p>...Đang tải dữ liệu</p>) : (
                    <Table
                        aria-label="Table with subtle selection"
                        // style={{minWidth: "550px"}}
                        className={style.smallTable}
                    >
                        <TableHeader>
                            <TableRow>
                                <TableSelectionCell
                                    checked={
                                        allRowsSelected ? true : someRowsSelected ? "mixed" : false
                                    }
                                    onClick={toggleAllRows}
                                    onKeyDown={toggleAllKeydown}
                                    checkboxIndicator={{"aria-label": "Select all rows "}}
                                />
                                {
                                    tableHeaderCell.map((item, index) => (
                                        <TableHeaderCell key={index}>{item}</TableHeaderCell>
                                    ))
                                }

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {rows.map(({item, selected, onClick, onKeyDown, appearance}) => (
                                <TableRow
                                    key={item.maTaiSan}
                                    onClick={onClick}
                                    onKeyDown={onKeyDown}
                                    aria-selected={selected}
                                    appearance={appearance}
                                >
                                    <TableSelectionCell
                                        subtle
                                        checked={selected}
                                        checkboxIndicator={{"aria-label": "Select row"}}
                                    />
                                    <TableCell className={style.hoverNameItem} onClick={() =>  nav(`detail/${item?.id}`)}>
                                        {item?.tenNhomTaiSan}
                                    </TableCell>
                                    <TableCell>
                                        {item?.maNhomTaiSan}
                                    </TableCell>
                                    <Tooltip content={item?.moTa || null}  {...tooltipProps}>
                                        <TableCell className={style.toolTip}>
                                            {item?.moTa}
                                        </TableCell>
                                    </Tooltip>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>)}
            </div>

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default TableGroupAsset;