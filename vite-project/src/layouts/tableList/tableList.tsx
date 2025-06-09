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
    TableSelectionCell, useTableFeatures, useTableSelection
} from "@fluentui/react-components";
import {useEffect, useState} from "react";
import type {TypeTaiSan} from "../../types/table.ts";
// import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {QrCode24Regular} from "@fluentui/react-icons";


const TableList = () => {
    // call api lấy data
    const [dataTable, setDatatable] = useState<TypeTaiSan[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const location = useLocation();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                // const response = await axios.get(`http://localhost:3000/formConfig`);
                const data = localStorage.getItem('data');
                const allData = data ? JSON.parse(data) : [];
                setDatatable(
                    allData.dataTable.map((item: TypeTaiSan) => ({
                        key: item.maTaiSan,
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
        'Tên tài sản', 'Mã tài sản', 'Mã QR', 'Nhóm tài sản', 'Loại tài sản',
        'Địa điểm', 'Bộ phận', 'Nguyên giá', 'Trạng thái', 'Người quản lý',
        'Người sử dụng', 'Ngày tiếp nhận', 'Hạn bảo hành', 'Hạn bảo dưỡng', 'Tình trạng'
    ]


    const items: Item[] = dataTable.map((data) => ({
        id:data.id,
        tenTaiSan: data.tenTaiSan,
        maTaiSan: data.maTaiSan,
        maQR: data.maQR,
        nhomTaiSan: data.nhomTaiSan,
        loaiTaiSan: data.loaiTaiSan,
        diaDiem: data.diaDiem,
        boPhan: data.boPhan,
        nguyenGia: data.nguyenGia,
        trangThai: data.trangThai,
        nguoiQuanLy: data.nguoiQuanLy,
        nguoiSuDung: data.nguoiSuDung,
        ngayTiepNhan: data.ngayTiepNhan,
        hanBaoHanh: data.hanBaoHanh,
        hanBaoDuong: data.hanBaoDuong,
        tinhTrang: data.tinhTrang,
    }));

//

    const columns: TableColumnDefinition<Item>[] = [
        createTableColumn<Item>({
            columnId: "tenTaiSan",
        }),
        createTableColumn<Item>({
            columnId: "maTaiSan",
        }),
        createTableColumn<Item>({
            columnId: "maQR",
        }),
        createTableColumn<Item>({
            columnId: "nhomTaiSan",
        }),
        createTableColumn<Item>({
            columnId: "loaiTaiSan",
        }),
        createTableColumn<Item>({
            columnId: "diaDiem",
        }),
        createTableColumn<Item>({
            columnId: "boPhan",
        }),
        createTableColumn<Item>({
            columnId: "nguyenGia",
        }),
        createTableColumn<Item>({
            columnId: "trangThai",
        }),
        createTableColumn<Item>({
            columnId: "nguoiQuanLy",
        }),
        createTableColumn<Item>({
            columnId: "nguoiSuDung",
        }),
        createTableColumn<Item>({
            columnId: "ngayTiepNhan",
        }), createTableColumn<Item>({
            columnId: "hanBaoHanh",
        }),
        createTableColumn<Item>({
            columnId: "hanBaoDuong",
        }),
        createTableColumn<Item>({
            columnId: "tinhTrang",
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
                {isLoading ? (<p>...Đang tải dữ liệu</p>) : (
                    <div className={style.tableScrollContainer}>
                    <Table
                        aria-label="Table with subtle selection"
                        // style={{minWidth: "550px"}}
                        className={style.table}
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
                                    <TableCell className={style.hoverNameItem}
                                               onClick={() => nav(`detail/${item?.maTaiSan}`)}>
                                        {item?.tenTaiSan}
                                    </TableCell>
                                    <TableCell>
                                        {item?.maTaiSan}
                                    </TableCell>
                                    <TableCell>
                                        <QrCode24Regular/>
                                    </TableCell>
                                    <TableCell>
                                        {item?.nhomTaiSan}
                                    </TableCell>
                                    <TableCell>
                                        {item?.loaiTaiSan}
                                    </TableCell>
                                    <TableCell>
                                        {item?.diaDiem}
                                    </TableCell>
                                    <TableCell>
                                        {item?.boPhan}
                                    </TableCell>
                                    <TableCell>
                                        {item?.nguyenGia}
                                    </TableCell>
                                    <TableCell>
                                        {item?.trangThai}
                                    </TableCell>
                                    <TableCell>
                                        {item?.nguoiQuanLy}
                                    </TableCell>
                                    <TableCell>
                                        {item?.nguoiSuDung}
                                    </TableCell>
                                    <TableCell>
                                        {item?.ngayTiepNhan}
                                    </TableCell>
                                    <TableCell>
                                        {item?.hanBaoHanh}
                                    </TableCell>
                                    <TableCell>
                                        {item?.hanBaoDuong}
                                    </TableCell>
                                    <TableCell>
                                        {item?.tinhTrang}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>)}
            </div>

        </div>
    );
};

export default TableList;