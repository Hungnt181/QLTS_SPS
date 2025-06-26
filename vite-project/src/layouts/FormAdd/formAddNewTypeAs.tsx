import {useNavigate} from "react-router-dom";
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
    DialogTrigger, Field, Input, Label, Textarea,
    Dropdown,
    Option,
    useId,
} from "@fluentui/react-components";
import {ChevronLeft16Regular} from "@fluentui/react-icons";
import {useState} from "react";
import type {AccordionToggleEventHandler} from '@fluentui/react-components';
import AddNewAssetStyle, {FormAddMasterDataStyle} from "../../styles/formAdd/formAdd.ts";

const AddNewTypeAs = () => {
    const dropdownId = useId("dropdown-default");
    const options = [
        "Công cụ, dụng cụ",
        "Tài sản cố địng hữu hình",
        "Tái sản cố định vô hình",
    ];
    const style = AddNewAssetStyle()
    const style1 = FormAddMasterDataStyle()
    const nav = useNavigate()
    const [openItems, setOpenItems] = useState(["1"])
    const handleToggle: AccordionToggleEventHandler<string> = (_event, data) => {
        setOpenItems(data.openItems);
    }

    const [formData, setFormData] = useState({
        tenNhomTaiSan: "",
        tenLoaiTaiSan: "",
        maLoaiTaiSan: "",
        moTa: ""
    })

    const handleDropdownChange = (_event: any, data: any) => {
        setFormData({
            ...formData,
            tenNhomTaiSan: data.optionText,
        });
    };

    const addNewItem = async () => {
        const data = localStorage.getItem('data')
        const allData = data ? JSON.parse(data) : {typeAsset: []}
        if (!allData.typeAsset) {
            allData.typeAsset = [];
        }
        allData.typeAsset.push({
            id: formData.maLoaiTaiSan,
            ...formData
        })
        localStorage.setItem('data', JSON.stringify(allData))
        alert("Thêm mới thành công")
        nav("/asset/settings/master-data/type", {state: {reload: true}})
    }

    return (
        <div className={style.addnewAsset}>
            <Dialog open={true}>
                <DialogSurface className={style1.formAddSettingWitdh}>
                    <DialogBody className={style1.formAddSettingMaster}>
                        <DialogTitle>Thêm mới loại tài sản</DialogTitle>
                        <DialogContent>
                            <Accordion
                                openItems={openItems}
                                onToggle={handleToggle}
                                multiple
                                collapsible
                            >
                                <AccordionItem value="1">
                                    <AccordionHeader className={style1.formSection}
                                                     expandIconPosition={"end"}
                                                     size={"extra-large"}
                                    >
                                        <h4 className={style.formSectionTitle}>Thông tin chung</h4>
                                    </AccordionHeader>
                                    <AccordionPanel className={style.formContent}>
                                        <div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={dropdownId}
                                                       className={style.formLabel}>Nhóm tài sản</Label>
                                                <Dropdown id={dropdownId} placeholder="Máy móc thiết bị,..."
                                                          className={style.dropdown}
                                                          onOptionSelect={handleDropdownChange}>
                                                    {options.map((option) => (
                                                        <Option key={option}>
                                                            {option}
                                                        </Option>
                                                    ))}
                                                </Dropdown>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"tenLoaiTaiSan"}
                                                       className={style.formLabel}>
                                                    Tên loại tài sản
                                                </Label>
                                                <Input size="medium" id={"tenLoaiTaiSan"} name={"tenLoaiTaiSan"}
                                                       onChange={(e) => setFormData({
                                                           ...formData,
                                                           [e.target.name]: e.target.value
                                                       })} placeholder="Công cụ, dụng cụ" className={style.formInput}/>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"maLoaiTaiSan"}
                                                       className={style.formLabel}>
                                                    Mã loại tài sản
                                                </Label>
                                                <Input size="medium" name={"maLoaiTaiSan"} id={"maLoaiTaiSan"}
                                                       onChange={(e) => setFormData({
                                                           ...formData,
                                                           [e.target.name]: e.target.value
                                                       })} placeholder="CCDC" className={style.formInput}/>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Field size="medium" label="Mô tả">
                                                    <Textarea className={style1.textArea} name={"moTa"}
                                                              onChange={(e) => setFormData({
                                                                  ...formData,
                                                                  [e.target.name]: e.target.value
                                                              })}
                                                              placeholder="Thông tin mô tả loại tài sản"
                                                    />
                                                </Field>
                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </DialogContent>

                        <DialogActions className={style1.Formbutton}>
                            <DialogTrigger disableButtonEnhancement>
                                <Button icon={<ChevronLeft16Regular/>} className={style.closeBtn} appearance="secondary"
                                        onClick={() => nav("/asset/settings/master-data/type")}>
                                    Quay lại
                                </Button>
                            </DialogTrigger>
                            <Button appearance="primary" onClick={() => addNewItem()}>Thêm mới</Button>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </div>
    )
}

export default AddNewTypeAs;