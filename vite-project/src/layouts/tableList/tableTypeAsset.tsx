import type { TooltipProps } from "@fluentui/react-components";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tableListStyle from "../../styles/tableList/tableList.ts";
import type { TypeGroupAsset, TypeTaiSan } from "../../types/table";


// type TableTypeAssetProps = {
//     tooltipProps?: TooltipProps
// }
const TableTypeAsset = () => {
    // const [typeAsset, setTypeAsset] = useState()
    // const [isLoading, setIsLoading] = useState(false)
    // const location = useLocation()

    // useEffect (() => {

    //     const fetchData = async () => {
    //         try {
    //             setIsLoading(true)
    //             const data = localStorage.getItem('data')
    //             const allData = data ? JSON.parse(data) : []
    //             setTypeAsset(
    //                 allData.loaiTaiSan.map((item: TypeTaiSan) => ({
    //                     key: item.loaiTaiSan,
    //                     ...item
    //                 }))
    //             )
    //         } catch (error) {
    //             console.log(error)
    //         } finally {
    //             setIsLoading(false)
    //     }
    // }
    // fetchData()
    // if (location.state?.reload) {
    //     fetchData()
    // }               
    // } [location.state?.reload])

    // const style = tableListStyle()
    // const nav = useNavigate()

    // const tableHeaderCell = [
    //     'Tên loại tài sản', 'Mã tài sản', 'Nhóm tài sản', 'Mô tả',
    // ]

    // const items: Item[] = typeAsset.map((data: TypeTaiSan) => ({
    //     id: data.id,
    //     tenLoaiTaiSan: data.loaiTaiSan,
    //     tenNhomTaiSan: data.nhomTaiSan,
    //     moTa: data.moTa,
    // }))

    return (
        <div>TableTypeAsset</div>
    );
};

export default TableTypeAsset;