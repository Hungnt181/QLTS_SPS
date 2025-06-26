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
    DialogTrigger, Field, Input, Label, Textarea
} from "@fluentui/react-components";
import type {AccordionToggleEventHandler} from '@fluentui/react-components';
import AddNewAssetStyle, {FormAddMasterDataStyle} from "../../styles/formAdd/formAdd.ts";
import {useNavigate} from "react-router-dom";
import {ChevronLeft16Regular} from "@fluentui/react-icons";
import {useState} from "react";

const AddNewGroupAs = () => {
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
        tenNhomTaiSan: "",
        maNhomTaiSan: "",
        moTa: ""
    })
    // Thêm mới item
    const addNewItem = async () => {
        const data = localStorage.getItem('data');
        const allData = data ? JSON.parse(data) : { nhomTaiSan: [] };
        allData.nhomTaiSan.push({
            id: formData.maNhomTaiSan,
            ...formData
        });
        localStorage.setItem('data', JSON.stringify(allData));
        alert(`Thêm mới thành công.`);
        nav("/asset/settings/master-data/group", { state: { reload: true } })
    }
    return (
        <div className={style.addnewAsset}>
            <Dialog open={true}>
                <DialogSurface className={style2.formAddSettingWitdh}>
                    <DialogBody className={style2.formAddSettingMaster}>
                        <DialogTitle>Thêm mới nhóm tài sản</DialogTitle>
                        <DialogContent>
                            <Accordion
                                openItems={openItems}
                                onToggle={handleToggle}
                                multiple
                                collapsible
                            >
                                <AccordionItem value="1">
                                    <AccordionHeader className={style2.formSection} expandIconPosition={"end"}
                                                     size={"extra-large"}><h4 className={style.formSectionTitle}>Thông
                                        tin chung</h4>
                                    </AccordionHeader>
                                    <AccordionPanel className={style.formContent}>
                                        {/*//Thông tin chung*/}
                                        <div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"tenNhomTaiSan"}
                                                       className={style.formLabel}>
                                                    Tên nhóm tài sản
                                                </Label>
                                                <Input size="medium" name={"tenNhomTaiSan"} id={"tenNhomTaiSan"} className={style.formInput}
                                                    onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                                                />
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"maNhomTaiSan"}
                                                       className={style.formLabel}>
                                                    Mã nhóm tài sản
                                                </Label>
                                                <Input size="medium" id={"maNhomTaiSan"} name={"maNhomTaiSan"} className={style.formInput}
                                                onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} />
                                            </div>
                                            <div className={style.formDiv}>
                                                <Field size="medium" label="Mô tả">
                                                    <Textarea className={style2.textArea} name={"moTa"}
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
                        <DialogActions className={style2.Formbutton}>
                                <DialogTrigger disableButtonEnhancement>
                                    <Button icon={<ChevronLeft16Regular/>} className={style.closeBtn}
                                            appearance="secondary" onClick={() => nav("/asset/settings/master-data/group")}>Quay lại</Button>
                                </DialogTrigger>
                                <Button appearance="primary" onClick={() => addNewItem()}>Thêm mới</Button>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </div>
    );
};

export default AddNewGroupAs;