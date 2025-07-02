import * as React from "react";
import tableListStyle from "../../styles/tableList/tableList.ts";
import {
  createTableColumn,
  Table,
  TableBody,
  TableCell,
  type TableColumnDefinition,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableSelectionCell,
  useTableFeatures,
  useTableSelection,
} from "@fluentui/react-components";
import { useEffect, useState } from "react";
import type { RepairAssetItem, TypeTaiSan } from "../../types/table.ts";
import { useLocation, useNavigate } from "react-router-dom";

const TableListRepair = ({
  getID,
  selectedId,
}: {
  getID: (id: string) => void;
  selectedId: unknown;
}) => {
  // call api lấy data
  const [dataTable, setDatatable] = useState<RepairAssetItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [selectedId, setSelectedId] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // const response = await axios.get(`http://localhost:3000/formConfig`);
        const data = localStorage.getItem("data");
        const allData = data ? JSON.parse(data) : [];
        setDatatable(
          allData.repairAsset.map((item: RepairAssetItem) => ({
            key: item.id,
            ...item,
          }))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData().then();
    if (location.state?.reload) {
      fetchData().then();
    }
  }, [location.state?.reload]);
  //
  const style = tableListStyle();
  const nav = useNavigate();

  //
  const tableHeaderCell = [
    "Mã số biên bản",
    "Tên tài sản",
    "Mã tài sản",
    "Nguyên giá",
    "Người quản lý",
    "Người sử dụng",
    "Ngày mua",
    "Hạn bảo hành",
    "Ngày sửa chữa",
    "Mô tả tình trạng",
  ];

  const items: Item[] = dataTable.map((data: RepairAssetItem) => ({
    id: data.id,
    taiSan: data.taiSan as TypeTaiSan,
    tenTaiSan: data.taiSan.tenTaiSan,
    maTaiSan: data.taiSan.maTaiSan,
    nguyenGia: data.taiSan.nguyenGia,
    trangThai: data.taiSan.trangThai,
    nguoiQuanLy: data.taiSan.nguoiQuanLy,
    nguoiSuDung: data.taiSan.nguoiSuDung,
    ngayMua: data.taiSan.ngayMua,
    hanBaoHanh: data.taiSan.hanBaoHanh,
    hanBaoDuong: data.taiSan.hanBaoDuong,
    ngaySuaChua: data.ngaySuaChua,
    moTa: data.moTa,
  }));

  //

  const columns: TableColumnDefinition<Item>[] = [
    createTableColumn<Item>({
      columnId: "id",
    }),
    createTableColumn<Item>({
      columnId: "tenTaiSan",
    }),
    createTableColumn<Item>({
      columnId: "maTaiSan",
    }),
    createTableColumn<Item>({
      columnId: "nguyenGia",
    }),
    createTableColumn<Item>({
      columnId: "nguoiQuanLy",
    }),
    createTableColumn<Item>({
      columnId: "nguoiSuDung",
    }),
    createTableColumn<Item>({
      columnId: "ngayMua",
    }),
    createTableColumn<Item>({
      columnId: "hanBaoHanh",
    }),
    createTableColumn<Item>({
      columnId: "hanBaoDuong",
    }),
    createTableColumn<Item>({
      columnId: "moTa",
    }),
  ];

  const {
    getRows,
    selection: {
      //   allRowsSelected,
      //   someRowsSelected,
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
        selectionMode: "single",
        defaultSelectedItems: new Set([]),
      }),
    ]
  );

  const rows = getRows((row) => {
    const selected = isRowSelected(row.rowId);
    return {
      ...row,
      onClick: (e: React.MouseEvent) => {
        toggleRow(e, row.rowId);
        getID(row.item.id); // Lấy ID của hàng khi click
      },
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === " ") {
          e.preventDefault();
          toggleRow(e, row.rowId);
          getID(row.item.id); // Lấy ID của hàng khi click
        }
      },
      selected: row.item.id === selectedId,
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
        {isLoading ? (
          <p>...Đang tải dữ liệu</p>
        ) : (
          <Table
            aria-label="Table with subtle selection"
            // style={{minWidth: "550px"}}
            className={style.table}
          >
            <TableHeader>
              <TableRow>
                <TableSelectionCell
                  checked={false}
                  onClick={toggleAllRows}
                  onKeyDown={toggleAllKeydown}
                  checkboxIndicator={{ "aria-label": "Select all rows " }}
                />
                {tableHeaderCell.map((item, index) => (
                  <TableHeaderCell key={index}>{item}</TableHeaderCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map(
                ({ item, selected, onClick, onKeyDown, appearance }) => (
                  <TableRow
                    key={item.id}
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    aria-selected={selected}
                    appearance={appearance}
                  >
                    <TableSelectionCell
                      subtle
                      checked={selected}
                      checkboxIndicator={{ "aria-label": "Select row" }}
                    />
                    <TableCell>{item?.id}</TableCell>
                    <TableCell className={style.hoverNameItem}>
                      {item?.tenTaiSan}
                    </TableCell>
                    <TableCell>{item?.maTaiSan}</TableCell>
                    <TableCell>{item?.nguyenGia}</TableCell>

                    <TableCell>{item?.nguoiQuanLy}</TableCell>
                    <TableCell>{item?.nguoiSuDung}</TableCell>
                    <TableCell>{item?.ngayMua}</TableCell>
                    <TableCell>{item?.hanBaoHanh}</TableCell>
                    <TableCell>{item?.ngaySuaChua}</TableCell>
                    <TableCell>{item?.moTa}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default TableListRepair;
