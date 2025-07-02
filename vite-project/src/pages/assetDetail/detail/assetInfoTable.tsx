import { values } from "@fluentui/react";
import type { TypeTaiSan } from "../../../types/table";
import { Persona, Tab, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, Text } from "@fluentui/react-components";
import AssetDetailNewStyle from "../../../styles/listPages/assetDetail/assetDetailNew";
import { Attach20Regular, Autosum20Regular, Calendar20Regular, CalendarClock20Regular, CalendarEdit20Regular, GroupList20Regular, Location20Regular, Money20Regular, NumberSymbolSquare20Regular, Person20Regular, PersonAccounts20Regular, PulseSquare20Regular, ScanText20Regular, Status20Regular, Tag20Regular } from "@fluentui/react-icons";
import type { ReactNode } from "react";

type Props = {
    asset: TypeTaiSan;
}

type InfoItem = {
    icon: JSX.Element;
    label: string;
    value: string | number | ReactNode;
};

const AssetInfoTable = ({ asset }: Props) => {
    const style = AssetDetailNewStyle()
    const generalInfo: InfoItem[] = [
        { icon: <NumberSymbolSquare20Regular />, label: "ID", value: asset?.maTaiSan },
        { icon: <ScanText20Regular />, label: "Tên tài sản", value: asset?.tenTaiSan },
        { icon: <GroupList20Regular />, label: "Nhóm tài sản", value: asset?.nhomTaiSan },
        { icon: <Tag20Regular />, label: "Loại tài sản", value: asset?.loaiTaiSan },
        { icon: <Money20Regular />, label: "Nguyên giá", value: asset.nguyenGia?.toLocaleString() + " đ" },
        { icon: <Autosum20Regular />, label: "Số lượng", value: asset?.soLuong },
        { icon: <Location20Regular />, label: "Địa điểm", value: asset?.diaDiem },
        { icon: <Location20Regular />, label: "Bộ phận", value: asset?.boPhan },
        { icon: <Person20Regular />, label: "Người quản lý", value: (<Persona name={asset?.nguoiQuanLy} secondaryText={asset?.chucVuQL} />) },
        { icon: <PersonAccounts20Regular />, label: "Chức vụ", value: asset?.chucVuQL },
        { icon: <Attach20Regular />, label: "Tài liệu", value: asset?.taiLieu },
    ]
    const statusInfo: InfoItem[] = [
        { icon: <Status20Regular />, label: "Trạng thái", value: asset?.trangThai },
        { icon: <PulseSquare20Regular />, label: "Tình trạng", value: asset?.tinhTrang },
        { icon: <CalendarEdit20Regular />, label: "Hạn bảo dưỡng", value: asset?.hanBaoDuong },
        { icon: <Calendar20Regular />, label: "Ngày mua", value: asset?.ngayMua },
        { icon: <CalendarClock20Regular />, label: "Hạn bảo hành", value: asset?.hanBaoHanh },
    ]
    const historyInfo: InfoItem[] = [
        { icon: <Status20Regular />, label: "Lịch sử bảo dưỡng - sửa chữa", value: asset?.lichSuBaoTri },
        { icon: <Status20Regular />, label: "Lịch sử kiểm kê gần nhất", value: asset?.lichSuKiemKe },
    ]
    const usageInfo: InfoItem[] = [
        { icon: <Person20Regular />, label: "Tên người tiếp nhận", value: (<Persona name={asset?.nguoiSuDung} secondaryText={asset?.chucVuSD} />) },
        { icon: <GroupList20Regular />, label: "Chức vụ", value: asset?.chucVuSD },
        { icon: <Calendar20Regular />, label: "Ngày tiếp nhận", value: asset?.ngayTiepNhan },
    ]

    const renderTable = (
        title: string,
        data: InfoItem[]
    ) => (
        <div className={style.info}>
            <Table className={style.table}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell colSpan={2} className={style.titleDetail}>
                            {title}
                        </TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index} className={style.row}>
                            <TableCell className={style.text}>
                                <div className={style.icon}>
                                    {row.icon}
                                    <Text>{row.label}</Text>
                                </div>

                            </TableCell>
                            <TableCell  className={style.text}>
                                <div className={style.icon}>
                                    {row.value || ""}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )

    return (
        <>
            {renderTable("Thông tin chung", generalInfo)}
            {renderTable("Tình trạng & bảo trì", statusInfo)}
            {renderTable("Lịch sử", historyInfo)}
            {renderTable("Thông tin sử dụng", usageInfo)}
        </>
    )
}
export default AssetInfoTable