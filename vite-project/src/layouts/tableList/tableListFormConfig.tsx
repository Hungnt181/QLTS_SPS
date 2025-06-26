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
    TableSelectionCell, Tooltip, type TooltipProps, useTableFeatures, useTableSelection
} from "@fluentui/react-components";
import {useEffect, useState} from "react";
import type {FormConfigItem} from "../../types/table.ts";
import { useNavigate} from "react-router-dom";

type TableGroupAssetProps = {
    tooltipProps?: TooltipProps;
}
const TableListFormConfig = ({tooltipProps} : TableGroupAssetProps) => {
    // call api lấy data
    const [dataFormConfig, setDataFormConfig] = useState<FormConfigItem[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
       ( async () => {
            try {
                setIsLoading(true);
                // const response = await axios.get(`http://localhost:3000/formConfig`);
                const data = localStorage.getItem('data');
                const allData = data ? JSON.parse(data) : [];
                setDataFormConfig(
                    allData.formConfig.map((item: FormConfigItem) => ({
                        key: item.id,
                        ...item
                    }))
                );
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    //
    const style = tableListStyle();
    const nav = useNavigate()

    //
    const tableHeaderCell = [
        'Tên biểu mẫu', 'Mô tả'
    ]


    const items: Item[] = dataFormConfig.map((data) => ({
        id: data.id,
        name: data.name,
        description: data.description,
    }));

//

    const columns: TableColumnDefinition<Item>[] = [
        createTableColumn<Item>({
            columnId: "name",
        }),
        createTableColumn<Item>({
            columnId: "description",
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
    const handleClick = (id: string) => {
        if (id === 'ttnc') {
            nav(`/asset/settings/advanced-info`);
            window.location.reload();
            return;
        }
        nav(`/asset/settings/form-config/detail/${id}`);
    }
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
                                    key={item.id}
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
                                               onClick={()=>handleClick(item.id)}>
                                        {item?.name}
                                    </TableCell>
                                    <Tooltip content={item?.description || null}  {...tooltipProps}>
                                        <TableCell className={style.toolTip}>
                                            {item?.description}
                                        </TableCell>
                                    </Tooltip>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>)}
            </div>

        </div>
    );
};

export default TableListFormConfig;