import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    Button,
    Dialog, DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger, Field, Input, Label, Select, Text
} from "@fluentui/react-components";
import type {AccordionToggleEventHandler} from '@fluentui/react-components';
import {DatePicker} from "@fluentui/react-datepicker-compat";
import AddNewAssetStyle from "../../styles/formAdd/formAdd.ts";
import {useNavigate} from "react-router-dom";
import {ChevronLeft16Regular} from "@fluentui/react-icons";
import {useState} from "react";

const AddNewAsset = () => {
    // call api lấy data
    const style = AddNewAssetStyle()
    const nav = useNavigate()
    const [openItems, setOpenItems] = useState(["1"]);
    const handleToggle: AccordionToggleEventHandler<string> = (_event, data) => {
        setOpenItems(data.openItems);
    };
    // Khởi tạo state để lưu trữ dữ liệu của form
    const [formData, setFormData] = useState({
        tenTaiSan: "",
        maTaiSan: "",
        soLuong: "1",
        donViTinh: "Cái",
        nhomTaiSan: "Công cụ dụng cụ",
        loaiTaiSan: "Thiết bị máy móc",
        diaDiem: "Văn phòng Hà Nội",
        boPhan: "Phòng Kinh doanh",
        nguyenGia: "",
        nguoiQuanLy: "Nguyễn Văn An",
        trangThai: "Mới",
        tinhTrang: "Đang ử dụng",
        ngayMua: "",
        thoiGianBaoHanh: "",
        donViTinh2: "Tháng",
        hanBaoHanh: "",
        ngayTiepNhan: "",
        nguoiSuDung: "",
        chucVu: ""
    });
    // Thêm mới item
    const addNewItem = async () => {
        // Thêm mới bằng localStorage
        const data = localStorage.getItem('data');
        const allData = data ? JSON.parse(data) : { dataTable: [] };
        allData.dataTable.push({
            id: formData.maTaiSan,
            ...formData
        });
        localStorage.setItem('data', JSON.stringify(allData));
        alert(`Thêm mới thành công.`);
        nav("/taisan/list", { state: { reload: true } })
    }

    const handleDateChange = (field: keyof typeof formData) => (date: Date | null | undefined) => {
        setFormData((prev) => ({
            ...prev,
            [field]: date ? date.toLocaleDateString("vi-VN") : "",
        }));
    };

    return (
        <div className={style.addnewAsset}>
            <Dialog open={true}>
                <DialogSurface className={style.editWdith}>
                    <DialogBody className={style.formAdd}>
                        <DialogTitle>Thêm mới tài sản</DialogTitle>
                        <DialogContent>
                            <Accordion
                                openItems={openItems}
                                onToggle={handleToggle}
                                multiple
                                collapsible
                            >
                                <AccordionItem value="1">
                                    <AccordionHeader className={style.formSection} expandIconPosition={"end"}
                                                     size={"extra-large"}><h4 className={style.formSectionTitle}>Thông
                                        tin chung</h4>
                                    </AccordionHeader>
                                    <AccordionPanel className={style.formContent}>
                                        {/*//Thông tin chung*/}
                                        <div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"tenTaiSan"}
                                                       className={style.formLabel}>
                                                    Tên tài sản
                                                </Label>
                                                <Input size="medium" name={"tenTaiSan"} id={"tenTaiSan"} className={style.formInput}
                                                onChange= {(e) => setFormData({...formData, [e.target.name]: e.target.value})} />
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"maTaiSan"}
                                                       className={style.formLabel}>
                                                    Mã tài sản
                                                </Label>
                                                <Input size="medium" id={"maTaiSan"} name={"maTaiSan"}
                                                       className={style.formInput}
                                                       onChange= {(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
                                            </div>
                                            <div className={style.formDivTow}>
                                                <div className={style.formDiv}>
                                                    <Label size="medium" required htmlFor={"soLuong"}
                                                           className={style.formLabel}>
                                                        Số lượng
                                                    </Label>
                                                    <Input size="medium" id={"soLuong"} readOnly={true} className={style.formInput} name={"soLuong"} defaultValue={"1"}
                                                    onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
                                                </div>
                                                <div className={style.formDiv}>
                                                    <Label size="medium" required htmlFor={"donViTinh"}
                                                           className={style.formLabel}>
                                                        Đơn vị tính
                                                    </Label>
                                                    <Select id={"donViTinh"} className={style.formInput} name={"donViTinh"}
                                                    onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                        <option >Cái</option>
                                                        <option >Chiếc</option>
                                                        <option >Hộp</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"nhomTaiSan"} className={style.formLabel}>
                                                    Nhóm tài sản
                                                </Label>
                                                <Select name={"nhomTaiSan"} id={"nhomTaiSan"} className={style.formInput}
                                                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                    <option >Công cụ dụng cụ</option>
                                                    <option >Tài sản cố định hữu hình</option>
                                                    <option >Tài sản cố định vô hình</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"loaiTaiSan"} className={style.formLabel}>
                                                    Loại tài sản
                                                </Label>
                                                <Select id={"loaiTaiSan"} name={"loaiTaiSan"} className={style.formInput}
                                                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                    <option>Thiết bị máy móc</option>
                                                    <option>Phương tiện vận chuyển</option>
                                                    <option>Phương tiện di chuyển</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"diaDiem"} className={style.formLabel}>
                                                    Địa điểm
                                                </Label>
                                                <Select id={"diaDiem"} name={"diaDiem"} className={style.formInput}
                                                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                                                >
                                                    <option>Văn phòng Hà Nội</option>
                                                    <option>Văn Phòng Đà Nẵng</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"boPhan"} className={style.formLabel}>
                                                    Bộ phận
                                                </Label>
                                                <Select id={"boPhan"} name={"boPhan"} className={style.formInput}
                                                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                    <option>Phòng Kinh doanh</option>
                                                    <option>Phòng Nhân sự</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"nguyenGia"}
                                                       className={style.formLabel}>
                                                    Nguyên giá
                                                </Label>
                                                <Input size="medium" name={"nguyenGia"} id={"nguyenGia"} className={style.formInput}  contentAfter={
                                                    <Text size={400} id={"nguyenGia"}>
                                                        VNĐ
                                                    </Text>
                                                }
                                                       onChange= {(e) => setFormData({...formData, [e.target.name]: e.target.value})} />
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"nguoiQuanLy"} className={style.formLabel}>
                                                    Người quản lý
                                                </Label>
                                                <Select id={"nguoiQuanLy"} name={"nguoiQuanLy"} className={style.formInput}
                                                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                    <option>Nguyễn Văn An</option>
                                                    <option>Nguyễn Thị Biển</option>
                                                </Select>
                                            </div>

                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"trangThai"} className={style.formLabel}>
                                                    Trạng thái
                                                </Label>
                                                <Select id={"trangThai"} name={"trangThai"} className={style.formInput}
                                                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                    <option>Mới</option>
                                                    <option>Cũ</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"tinhTrang"} className={style.formLabel}>
                                                    Tình trạng
                                                </Label>
                                                <Select id={"tinhTrang"} name={"tinhTrang"} className={style.formInput}
                                                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                    <option>Đang sử dụng</option>
                                                    <option>Chưa sử dụng</option>
                                                    <option>Đang bảo dưỡng</option>
                                                    <option>Đang sửa chữa</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Field label="Ngày mua"  className={style.formLabel}>
                                                    <DatePicker
                                                        className={style.formInput}
                                                        placeholder="Chọn ngày mua tài sản"
                                                        id={"ngayMua"}
                                                        name={"ngayMua"}
                                                        onSelectDate={handleDateChange("ngayMua")}
                                                    />
                                                </Field>
                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                {/**/}
                                <AccordionItem value="2" className={style.formAccordionItem}>
                                    <AccordionHeader className={style.formSection} expandIconPosition={"end"}
                                                     size={"extra-large"}><h4 className={style.formSectionTitle}>Bảo
                                        hành</h4>
                                    </AccordionHeader>
                                    <AccordionPanel className={style.formContent}>
                                        {/*//Thông tin chung*/}
                                        <div>
                                            <div className={style.formDivTow}>
                                                <div className={style.formDiv}>
                                                    <Label size="medium" required htmlFor={"soLuong"}
                                                           className={style.formLabel}>
                                                        Thời gian bảo hành
                                                    </Label>
                                                    <Input size="medium" id={"thoiGianBaoHanh"} name={"thoiGianBaoHanh"} className={style.formInput}
                                                    onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
                                                </div>
                                                <div className={style.formDiv}>
                                                    <Label size="medium" required htmlFor={"donViTinh2"}
                                                           className={style.formLabel}>
                                                        Đơn vị tính
                                                    </Label>
                                                    <Select id={"donViTinh2"} name={"donViTinh2"} className={style.formInput} defaultValue={"Tháng"}
                                                    onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                        <option>Tháng</option>
                                                        <option>Quý</option>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className={style.formDiv}>
                                                <Field label="Hạn bảo hành" className={style.formLabel}>
                                                    <DatePicker
                                                        className={style.formInput}
                                                        placeholder="Chọn ngày bảo hành"
                                                        id={"hanBaoHanh"}
                                                        name={"hanBaoHanh"}
                                                        onSelectDate={handleDateChange("hanBaoHanh")}
                                                    />
                                                </Field>
                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                {/**/}
                                <AccordionItem value="3" className={style.formAccordionItem}>
                                    <AccordionHeader className={style.formSection} expandIconPosition={"end"}
                                                     size={"extra-large"}>
                                        <h4 className={style.formSectionTitle}>Đã cấp
                                            phát</h4>
                                    </AccordionHeader>
                                    <AccordionPanel className={style.formContent}>
                                        {/*Đã cấp phát*/}
                                        <div>
                                            <div className={style.formDiv}>
                                                <Field label="Ngày tiếp nhận" className={style.formLabel}>
                                                    <DatePicker
                                                        className={style.formInput}
                                                        placeholder="Chọn ngày cấp phát / tiếp nhận"
                                                        id={"ngayTiepNhan"}
                                                        name={"ngayTiepNhan"}
                                                        onSelectDate={handleDateChange("ngayTiepNhan")}
                                                    />
                                                </Field>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"nguoiSuDung"} className={style.formLabel}>
                                                    Người tiếp nhận
                                                </Label>
                                                <Select id={"nguoiSuDung"} name={"nguoiSuDung"} className={style.formInput}
                                                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                    <option hidden={true}></option>
                                                    <option>Nguyễn Văn Anh</option>
                                                    <option>Trần Văn Hoàn</option>
                                                    <option> Lý Hoàng Nam</option>
                                                    <option>Lê Hoàng Hiệp</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"chucVu"} className={style.formLabel}>
                                                    Chức vụ
                                                </Label>
                                                <Select id={"chucVu"} name={"chucVu"} className={style.formInput}
                                                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                    <option value={""} hidden={true} ></option>
                                                    <option>Trưởng phòng</option>
                                                    <option>Nhân viên</option>
                                                </Select>
                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>

                        </DialogContent>
                        <DialogActions className={style.Formbutton}>
                            <div className={style.Formbutton}>
                                <DialogTrigger disableButtonEnhancement>
                                    <Button icon={<ChevronLeft16Regular/>} className={style.closeBtn}
                                            appearance="secondary" onClick={() => nav("/taisan/list")}>Quay lại</Button>
                                </DialogTrigger>
                                <Button appearance="primary" onClick={() => addNewItem()}>Thêm mới</Button>
                            </div>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </div>
    );
};

export default AddNewAsset;