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
  Tooltip,
  type TooltipProps,
  useTableFeatures,
  useTableSelection,
} from "@fluentui/react-components";
import { useEffect, useState } from "react";
import type { AssetCategoryOption, FormConfigItem } from "../../types/table.ts";
import { useLocation, useNavigate } from "react-router-dom";

type TableGroupAssetProps = {
  tooltipProps?: TooltipProps;
};
const TableAdvancedInfo = ({ tooltipProps }: TableGroupAssetProps) => {
  // call api lấy data
  const [dataFormConfig, setDataFormConfig] = useState<AssetCategoryOption[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        // const response = await axios.get(`http://localhost:3000/formConfig`);
        const data = localStorage.getItem("data");
        const allData = data ? JSON.parse(data) : [];
        const selectedFormId = "ttnc";
        const advancedData = allData.formConfig.find(
          (form: FormConfigItem) => form.id === selectedFormId
        );
        setDataFormConfig(
          advancedData.fields[0].options.map((item: AssetCategoryOption) => ({
            key: item._id,
            ...item,
          }))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [location.state?.reload]);
  //
  const style = tableListStyle();
  const nav = useNavigate();

  //
  const tableHeaderCell = [
    "Tên danh mục",
    "Loại tài sản",
    "Nhóm tài sản",
    "Mô tả",
  ];

  const items: Item[] = dataFormConfig.map((data: AssetCategoryOption) => ({
    _id: data._id,
    label: data.label,
    _loaiTaiSan: data._loaiTaiSan,
    _nhomTaiSan: data._nhomTaiSan,
    _moTa: data._moTa,
  }));

  //

  const columns: TableColumnDefinition<Item>[] = [
    createTableColumn<Item>({
      columnId: "label",
    }),
    createTableColumn<Item>({
      columnId: "_loaiTaiSan",
    }),
    createTableColumn<Item>({
      columnId: "_nhomTaiSan",
    }),
    createTableColumn<Item>({
      columnId: "_moTa",
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
        {isLoading ? (
          <p>...Đang tải dữ liệu</p>
        ) : (
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
                    key={item._id}
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
                    <TableCell
                      className={style.hoverNameItem}
                      onClick={() =>
                        nav(`/asset/settings/advanced-info/detail/${item?._id}`)
                      }
                    >
                      {item?.label}
                    </TableCell>
                    <TableCell>{item?._loaiTaiSan}</TableCell>
                    <TableCell>{item?._nhomTaiSan}</TableCell>
                    <Tooltip
                      content={item?.description || null}
                      {...tooltipProps}
                    >
                      <TableCell className={style.toolTip}>
                        {item?._mota}
                      </TableCell>
                    </Tooltip>
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

export default TableAdvancedInfo;
