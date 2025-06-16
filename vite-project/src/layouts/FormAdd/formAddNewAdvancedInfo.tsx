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
    DialogTrigger, Field, Input, Label, Select, Textarea
} from "@fluentui/react-components";
import type {AccordionToggleEventHandler} from '@fluentui/react-components';
import AddNewAssetStyle, {FormAddMasterDataStyle} from "../../styles/formAdd/formAdd.ts";
import {useNavigate} from "react-router-dom";
import {ChevronLeft16Regular} from "@fluentui/react-icons";
import {useState} from "react";
import axios from "axios";
import type {FormConfigItem} from "../../types/table.ts";

const AddNewAdvancedInfo = () => {
    // call api lấy data
    const style = AddNewAssetStyle()
    const style2 = FormAddMasterDataStyle()
    const nav = useNavigate()
    const [openItems, setOpenItems] = useState(["1"]);
    const handleToggle: AccordionToggleEventHandler<string> = (_event, data) => {
        setOpenItems(data.openItems);
    };
    //Khởi tạo state để lưu trữ dữ liệu của form
    const [formData, setFormData] = useState({
        _id: `danhMuc_${Date.now()}`,
        label: "",
        _loaiTaiSan: "Thiết bị máy móc",
        _nhomTaiSan: "Công cụ dụng cụ",
        _moTa: "",
        _fields: [
            {
                _ID: "",
                _label: "",
                _type: "text",
                _name: ""
            }
        ]

    })
    // Thêm mới item
    const addNewItem = async () => {
        const data = localStorage.getItem('data');
        const allData = data ? JSON.parse(data) : { nhomTaiSan: [] };
        const selectedId = "ttnc"
        const advancedData = allData.formConfig.find((form: FormConfigItem) => form.id === selectedId);
        advancedData.fields[0].options.push(
         formData
        );
        localStorage.setItem('data', JSON.stringify(allData));
        alert(`Thêm mới thành công.`);
        nav("/taisan/settings/advanced-info", { state: { reload: true } })
    }
    return (
        <div className={style.addnewAsset}>
            <Dialog open={true}>
                <DialogSurface className={style2.formAddSettingWitdh}>
                    <DialogBody className={style2.formAddSettingMaster}>
                        <DialogTitle>Thêm mới danh mục tài sản</DialogTitle>
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
                                                <Label size="medium" required htmlFor={"label"}
                                                       className={style.formLabel}>
                                                    Tên danh mục
                                                </Label>
                                                <Input size="medium" name={"label"} id={"label"} className={style.formInput}
                                                       onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                                                />
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"_nhomTaiSan"}
                                                       className={style.formLabel}>
                                                    Nhóm tài sản
                                                </Label>
                                                <Select id={"_nhomTaiSan"} className={style.formInput} name={"_nhomTaiSan"}
                                                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                    <option >Công cụ dụng cụ</option>
                                                    <option >Tài sản cố định hữu hình</option>
                                                    <option >Tài sản cố định vô hình</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"_loaiTaiSan"}
                                                       className={style.formLabel}>
                                                    Nhóm tài sản
                                                </Label>
                                                <Select id={"_loaiTaiSan"} className={style.formInput} name={"_loaiTaiSan"}
                                                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                                    <option >Thiết bị máy móc</option>
                                                    <option >Phương tiện di chuyển</option>
                                                    <option >Phương tiện vận chuyển</option>
                                                    <option >Vật liệu kiến trúc</option>
                                                </Select>
                                            </div>
                                            {/*// Các trường trong danh mục*/}
                                            <div>

                                            </div>
                                            <div className={style.formDiv}>
                                                <Field size="medium" label="Mô tả">
                                                    <Textarea className={style2.textArea} name={"_moTa"}
                                                              onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                                                    />
                                                </Field>
                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                {/**/}

                            </Accordion>

                        </DialogContent>
                        <DialogActions className={style.Formbutton}>
                            <div className={style.Formbutton}>
                                <DialogTrigger disableButtonEnhancement>
                                    <Button icon={<ChevronLeft16Regular/>} className={style.closeBtn}
                                            appearance="secondary" onClick={() => nav("/taisan/settings/advanced-info")}>Quay lại</Button>
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

export default AddNewAdvancedInfo;