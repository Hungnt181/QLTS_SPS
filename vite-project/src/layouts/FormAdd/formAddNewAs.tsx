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
    DialogTrigger, Field, Input, Label, Select
} from "@fluentui/react-components";
import type {AccordionToggleEventHandler} from '@fluentui/react-components';
import {DatePicker} from "@fluentui/react-datepicker-compat";
import AddNewAssetStyle from "../../styles/formAdd/formAdd.ts";
import {useNavigate} from "react-router-dom";
import {ChevronLeft16Regular} from "@fluentui/react-icons";
import {useState} from "react";

const AddNewAsset = () => {
    const style = AddNewAssetStyle()
    const nav = useNavigate()
    const [openItems, setOpenItems] = useState(["1"]);
    const handleToggle: AccordionToggleEventHandler<string> = (event, data) => {
        setOpenItems(data.openItems);
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
                                <AccordionItem value="1" >
                                    <AccordionHeader  className={style.formSection}  expandIconPosition={"end"} size={"extra-large"}><h4 className={style.formSectionTitle}>Thông tin chung</h4>
                                    </AccordionHeader>
                                    <AccordionPanel className={style.formContent}>
                                        {/*//Thông tin chung*/}
                                        <div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"tenTaiSan"}
                                                       className={style.formLabel}>
                                                    Tên tài sản
                                                </Label>
                                                <Input size="medium" id={"tenTaiSan"} className={style.formInput}/>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"maTaiSan"}
                                                       className={style.formLabel}>
                                                    Mã tài sản
                                                </Label>
                                                <Input size="medium" readOnly={true} id={"maTaiSan"}
                                                       className={style.formInput}/>
                                            </div>
                                            <div className={style.formDivTow}>
                                                <div className={style.formDiv}>
                                                    <Label size="medium" required htmlFor={"soLuong"}
                                                           className={style.formLabel}>
                                                        Số lượng
                                                    </Label>
                                                    <Input size="medium" id={"soLuong"} className={style.formInput}/>
                                                </div>
                                                <div className={style.formDiv}>
                                                    <Label size="medium" required htmlFor={"donViTinh"}
                                                           className={style.formLabel}>
                                                        Đơn vị tính
                                                    </Label>
                                                    <Select id={"donViTinh"} className={style.formInput}>
                                                        <option>Cái</option>
                                                        <option>Chiếc</option>
                                                        <option> Hộp</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"nhomTaiSan"} className={style.formLabel}>
                                                    Nhóm tài sản
                                                </Label>
                                                <Select id={"nhomTaiSan"} className={style.formInput}>
                                                    <option>Công cụ dụng cụ</option>
                                                    <option>Tài sản cố định hữu hình</option>
                                                    <option>Tài sản cố định vô hình</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"loaiTaiSan"} className={style.formLabel}>
                                                    Loại tài sản
                                                </Label>
                                                <Select id={"loaiTaiSan"} className={style.formInput}>
                                                    <option>Thiết bị máy móc</option>
                                                    <option>Phương tiện vận chuyển</option>
                                                    <option>Phương tiện di chuyển</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"diaDiem"} className={style.formLabel}>
                                                    Địa điểm
                                                </Label>
                                                <Select id={"diaDiem"} className={style.formInput}>
                                                    <option>Văn phòng Hà Nội</option>
                                                    <option>Văn Phòng Đà Nẵng</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"boPhan"} className={style.formLabel}>
                                                    Bộ phận
                                                </Label>
                                                <Select id={"boPhan"} className={style.formInput}>
                                                    <option>Phòng Kinh doanh</option>
                                                    <option>Phòng Nhân sự</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"boPhan"} className={style.formLabel}>
                                                    Người quản lý
                                                </Label>
                                                <Select id={"boPhan"} className={style.formInput}>
                                                    <option>Nguyễn Văn An</option>
                                                    <option>Nguyễn Thị Biển</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Field label="Ngày mua" className={style.formLabel}>
                                                    <DatePicker
                                                        className={style.formInput}
                                                        placeholder="Chọn ngày mua tài sản"
                                                        id={"ngayuMua"}
                                                    />
                                                </Field>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"NCC"} className={style.formLabel}>
                                                    Nhà cung cấp
                                                </Label>
                                                <Input size="medium" id={"NCC"} className={style.formInput}/>
                                            </div>


                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                            {/**/}
                                <AccordionItem value="2" className={style.formAccordionItem}>
                                    <AccordionHeader  className={style.formSection}  expandIconPosition={"end"} size={"extra-large"}><h4 className={style.formSectionTitle}>Bảo hành</h4>
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
                                                    <Input size="medium" id={"soLuong"} className={style.formInput}/>
                                                </div>
                                                <div className={style.formDiv}>
                                                    <Label size="medium" required htmlFor={"donViTinh"}
                                                           className={style.formLabel}>
                                                        Đơn vị tính
                                                    </Label>
                                                    <Select id={"donViTinh"} className={style.formInput}>
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
                                                    />
                                                </Field>
                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                {/**/}
                                <AccordionItem value="3" className={style.formAccordionItem}>
                                    <AccordionHeader  className={style.formSection}  expandIconPosition={"end"} size={"extra-large"}><h4 className={style.formSectionTitle}>Đã cấp phát</h4>
                                    </AccordionHeader>
                                    <AccordionPanel className={style.formContent}>
                                        {/*//Thông tin chung*/}
                                        <div>
                                            <div className={style.formDivTow}>
                                                <div className={style.formDiv}>
                                                    <Field label="Ngày cấp phát" className={style.formLabel}>
                                                        <DatePicker
                                                            className={style.formInput}
                                                            placeholder="Chọn ngày cấp phát"
                                                            id={"ngayCapPhat"}
                                                        />

                                                    </Field>
                                                </div>
                                                <div className={style.formDiv}>
                                                    <Label size="medium" required htmlFor={"soLuong"}
                                                           className={style.formLabel}>
                                                        Thời gian bảo hành
                                                    </Label>
                                                    <Input size="medium" id={"soLuong"} className={style.formInput}/>
                                                </div>
                                                <div className={style.formDiv}>
                                                    <Label size="medium" required htmlFor={"donViTinh"}
                                                           className={style.formLabel}>
                                                        Đơn vị tính
                                                    </Label>
                                                    <Select id={"donViTinh"} className={style.formInput}>
                                                        <option>Tháng</option>
                                                        <option>Quý</option>
                                                    </Select>
                                                </div>
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
                                <Button appearance="primary">Thêm mới</Button>
                            </div>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </div>
    );
};

export default AddNewAsset;