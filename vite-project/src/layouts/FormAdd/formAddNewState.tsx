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

const AddNewState = () => {
    const style = AddNewAssetStyle()
    const style1 = FormAddMasterDataStyle()
    const nav = useNavigate()
    const [openItems, setOpenItems] = useState(["1"])
    const handleToggle: AccordionToggleEventHandler<string> = (_event, data) => {
        setOpenItems(data.openItems)
    }

    const [formData, setFormData] = useState({
        tenTrangThai: "",
        // mauSac: "",
        moTa: "",
    })

    const addNewItem = async () => {
        const data = localStorage.getItem('data')
        const allData = data ? JSON.parse(data) : []
        allData.stateList.push({
            id: formData.tenTrangThai,
            ...formData
        })
        localStorage.setItem('data', JSON.stringify(allData))
        alert("Thêm mới thành công")
        nav ("/asset/settings/master-data/state", {state: { reload: true}})
    }

    return (
        <div className={style.addnewAsset}>
            <Dialog open={true}>
                <DialogSurface className={style1.formAddSettingWitdh}>
                    <DialogBody className={style1.formAddSettingMaster}>
                        <DialogTitle>Thêm mới trạng thái</DialogTitle>
                        <DialogContent>
                            <Accordion openItems={openItems} onToggle={handleToggle} multiple collapsible>
                                <AccordionItem value="1">
                                    <AccordionHeader className={style1.formSection} expandIconPosition={"end"}
                                    size={"extra-large"}>
                                        <h4 className={style.formSectionTitle}>Thông tin chung</h4>
                                    </AccordionHeader>

                                    <AccordionPanel className={style.formContent}>
                                        <div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"tenTrangThai"}>
                                                    Tên trạng thái
                                                </Label>
                                                <Input size="medium" name={"tenTrangThai"} id={"tenTrangThai"} className={style.formInput} placeholder="Đang bảo dưỡng"
                                                    onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                                                />
                                            </div>
                                            {/* <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"mauSac"} className={style.formLabel}>
                                                    Màu sắc hiển thị
                                                </Label>
                                                <Input size="medium" id={"mauSac"} name={"mauSac"} className={style.formInput}
                                                    onChange={(e) => setFormData ({...formData, [e.target.name]: e.target.value})}
                                                />
                                            </div> */}
                                            <div className={style.formDiv}>
                                                <Field size="medium" label="Mô tả">
                                                    <Textarea className={style1.textArea} name={"moTa"} placeholder="Thông tin mô tả trạng thái"
                                                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
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
                                    <Button icon={<ChevronLeft16Regular/>} className={style.closeBtn}
                                            appearance="secondary" onClick={() => nav("/asset/settings/master-data/state")}>Quay lại</Button>
                                </DialogTrigger>
                                <Button appearance="primary" onClick={() => addNewItem()}>Thêm mới</Button>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </div>
    )
}
export default AddNewState