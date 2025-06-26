import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Dropdown, Input, Label, Option, Select, useId, type AccordionToggleEventHandler } from "@fluentui/react-components"
import AddNewAssetStyle, { FormAddNewInventoryDate } from "../../styles/formAdd/formAdd"
import { data, Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import type { AssetInvenType, InvenBoardType } from "../../types/table";
import InventoryList from "../tableList/inventoryList";
import { ArrowExportUp24Regular, Calendar16Regular, ChevronLeft16Regular } from "@fluentui/react-icons";
import InvenBoardList from "../../pages/inventoryDetail/invenBoardList";
import AssetInvenList from "../../pages/inventoryDetail/assetInvenList";
import { DatePicker, type DatePickerProps } from "@fluentui/react-datepicker-compat";
import InventoryDetailStyle from "../../styles/inventory/inventoryDetailStyle";


const AddNewInventoryDate = () => {
    const style = FormAddNewInventoryDate()
    const style1 = InventoryDetailStyle()
    const nav = useNavigate()
    const [openItems, setOpenItems] = useState(["1"])
    const handleToggle: AccordionToggleEventHandler<string> = (_event, data) => {
        setOpenItems(data.openItems)
    }

    // const dropdownId = useId("dropdown-default");
    // const options = [
    //     "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    //     "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
    // ];

    // const handleDropdownChange = (_event: any, data: any) => {
    //     setFormData({
    //     ...formData,
    //     kiKiemKe: data.optionText,
    //     });
    // };

    const generateMaSoPhieu = () => {
        const data = localStorage.getItem('data')
        const allData = data ? JSON.parse(data) : { InventoryList: [] }
        const count = allData.InventoryList.length + 1
        return `KK${String(count).padStart(4, '0')}` // VD: KK0001
    }

    const [formData, setFormData] = useState({
        noidung: "",
        maSoPhieu: "",
        kiKiemKeThang: "",
        kiKiemKeNam: "",
        kiKiemKe: "",
        hanKiemKe: "",
        diaDiem: "",
        phongBan: "",
        nhomTaiSan: "",
        loaiTaiSan: "",
        trangThai: "Chưa kiểm kê",
        tienDo: "0%",
        truongBanKiemKe: "",
        vaiTro: "Trưởng ban",
    })

    useEffect(() => {
        const maSoPhieu = generateMaSoPhieu();

        const data = localStorage.getItem('data')
        const allData = data ? JSON.parse(data) : { InvenBoardData: {} }
        const tempList = allData.InvenBoardData?.temp || []

        const truongBan = tempList.find((item: any) => item.vaiTro === "Trưởng ban")

        console.log("Trưởng ban kiểm kê:", truongBan);


        setFormData((prev) => ({
            ...prev,
            maSoPhieu,
            truongBanKiemKe: truongBan?.hoTen || "",
            chucVu: truongBan?.chucVu || "",
        }));
    }, []);

    const addNewInventoryDate = async () => {
        const data = localStorage.getItem('data')
        const allData = data ? JSON.parse(data) : { InventoryList: [], InvenBoardData: {} }
        const kiKiemKeText = `${formData.kiKiemKeThang}/${formData.kiKiemKeNam}`


        allData.InventoryList.push({
            id: formData.maSoPhieu,
            ...formData,
            kiKiemKe: kiKiemKeText,
        })

        if (!allData.InvenBoardData) allData.InvenBoardData = {}
        if (allData.InvenBoardData.temp && allData.InvenBoardData.temp.length > 0) {
            allData.InvenBoardData[formData.maSoPhieu] = allData.InvenBoardData.temp
            delete allData.InvenBoardData.temp
        }

        localStorage.setItem('data', JSON.stringify(allData))
        alert('Thêm mới thành công')
        nav('/asset/inventory', { state: { reload: true } })
    }


    const handleDateChange = (field: keyof typeof formData) => (date: Date | null | undefined) => {
        setFormData((prev) => ({
            ...prev,
            [field]: date ? date.toLocaleDateString("vi-VN") : ""
        }))
    }

    return (
        <div className={style.addnewInvenDate}>
            <Dialog open={true}>
                <DialogSurface className={style.editWdith}>
                    <DialogBody className={style.formAdd}>
                        <DialogTitle>Lập lịch kiểm kê</DialogTitle>

                        <DialogContent>
                            <Accordion
                                openItems={openItems}
                                onToggle={handleToggle}
                                multiple
                                collapsible
                                className={style.content}
                            >
                                <AccordionItem value="1">
                                    <AccordionHeader className={style.formSection} expandIconPosition={"end"}
                                        size={"extra-large"}>
                                        <h4 className={style.formSectionTitle}>Thông tin chung</h4>
                                    </AccordionHeader>

                                    <AccordionPanel className={style.formContent}>
                                        <div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"Mã số phiếu"} className={style.formLabel}>Mã số phiếu</Label>
                                                <Input size="medium" name={"maSoPhieu"} id={"maSoPhieu"} className={style.formInput}
                                                    value={formData.maSoPhieu} readOnly />
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"Nội dung"} className={style.formLabel}>Nội dung</Label>
                                                <Input size="medium" name={"noidung"} id={"noidung"} className={style.formInput}
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} placeholder="Kiểm kê tài sản SPS"
                                                ></Input>
                                            </div>
                                            <div className={style.formDiv}>
                                                {/* <Label size="medium" required htmlFor={dropdownId} className={style.formLabel}>Kì kiểm kê</Label>
                                                <Dropdown id={dropdownId} placeholder="Tháng 1" className={style.dropdown} onOptionSelect={handleDropdownChange}>
                                                    {options.map((option) => (
                                                        <Option key={option}>
                                                            {option}
                                                        </Option>
                                                    ))}
                                                </Dropdown> */}
                                                <Label size="medium" required htmlFor={"kiKiemKe"} className={style.formLabel}>Kì kiểm kê</Label>
                                                <div className={style.selectDate}>
                                                    <Select id={"kiKiemKeThang"} name={"kiKiemKeThang"} className={style.formItem} value={formData.kiKiemKeThang ?? ""}
                                                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
                                                        <option></option>
                                                        <option>Tháng 01</option>
                                                        <option>Tháng 02</option>
                                                        <option>Tháng 03</option>
                                                        <option>Tháng 04</option>
                                                        <option>Tháng 05</option>
                                                        <option>Tháng 06</option>
                                                        <option>Tháng 07</option>
                                                        <option>Tháng 08</option>
                                                        <option>Tháng 09</option>
                                                        <option>Tháng 10</option>
                                                        <option>Tháng 11</option>
                                                        <option>Tháng 12</option>
                                                    </Select>

                                                    <Input size="medium" id={"kiKiemKeNam"} name={"kiKiemKeNam"} className={style.formItem} value={formData.kiKiemKeNam ?? ""}
                                                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} placeholder="2025"
                                                        contentAfter={<Calendar16Regular />}
                                                    />
                                                </div>
                                            </div>

                                            <div className={style.datePicker}>
                                                <Label size="medium" required htmlFor={"hanKiemKe"} className={style.formLabel}>Hạn kiểm kê</Label>
                                                <DatePicker className={style.formItem} id={"hanKiemKe"} placeholder="Chọn ngày"
                                                    onSelectDate={handleDateChange("hanKiemKe")}
                                                >
                                                </DatePicker>
                                            </div>

                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"diaDiem"} className={style.formLabel}>
                                                    Địa điểm
                                                </Label>
                                                <Select id={"diaDiem"} name={"diaDiem"} className={style.formItem}
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value="VP Hà Nội">VP Hà Nội</option>
                                                    <option value="VP Hồ Chí Minh">VP Hồ Chí Minh</option>
                                                </Select>
                                            </div>

                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"phongBan"} className={style.formLabel}>
                                                    Phòng ban
                                                </Label>
                                                <Select id={"phongBan"} name={"phongBan"} className={style.formItem}
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value="Phòng kinh doanh">Phòng kinh doanh</option>
                                                    <option value="Phòng công nghệ">Phòng công nghệ</option>
                                                </Select>
                                            </div>

                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"nhomTaiSan"} className={style.formLabel}>
                                                    Nhóm tài sản
                                                </Label>
                                                <Select id={"nhomTaiSan"} name={"nhomTaiSan"} className={style.formItem}
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
                                                    <option></option>
                                                    <option>Công cụ, dụng cụ</option>
                                                    <option>Tài sản cố định hữu hình</option>
                                                    <option>Tài sản cố định vô hình</option>
                                                </Select>
                                            </div>

                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"loaiTaiSan"} className={style.formLabel}>
                                                    Loại tài sản
                                                </Label>
                                                <Select id={"loaiTaiSan"} name={"loaiTaiSan"} className={style.formItem}
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
                                                    <option></option>
                                                    <option>Máy móc thiết bị</option>
                                                    <option>Phương tiện di chuyển</option>
                                                    <option>Bàn ghế</option>
                                                </Select>
                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>

                                <InvenBoardList useTemp />
                                <div>
                                    <div className={style1.header}>
                                        <h2 className={style1.title}>Tài sản kiểm kê</h2>
                                    </div>
                                    <AssetInvenList diaDiem={formData.diaDiem} phongBan={formData.phongBan} />
                                </div>
                            </Accordion>
                        </DialogContent>

                        <DialogActions className={style.Formbutton}>
                            <div className={style.Formbutton}>
                                <DialogTrigger disableButtonEnhancement>
                                    <Button icon={<ChevronLeft16Regular />} className={style.closeBtn}
                                        appearance="secondary" onClick={() => nav('/asset/inventory')}>Quay lại</Button>
                                </DialogTrigger>
                                <Button appearance="primary" onClick={() => addNewInventoryDate()}>Thêm mới</Button>
                            </div>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
            <Outlet></Outlet>
        </div>
    )
}
export default AddNewInventoryDate