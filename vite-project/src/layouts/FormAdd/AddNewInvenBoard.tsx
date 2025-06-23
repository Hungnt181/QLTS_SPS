import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Label, Select, Textarea, type AccordionToggleEventHandler } from "@fluentui/react-components"
import { FormAddNewInvenBoard } from "../../styles/formAdd/formAdd"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import type { InvenBoardType } from "../../types/table"
import { ChevronLeft12Regular } from "@fluentui/react-icons"

type AddNewInvenBoardProps = {
  mode: "add" | "detail";
};

const AddNewInvenBoard = ({ mode }: AddNewInvenBoardProps) => {
    const style = FormAddNewInvenBoard()
    const nav = useNavigate()
    const [openItems, setOpenItems] = useState(["1"]);
    const handleToggle: AccordionToggleEventHandler<string> = (_event, data) => {
        setOpenItems(data.openItems);
    };
    const { maSoPhieu } = useParams()

    const getTargetKey = () => {
        return mode === "detail" ? maSoPhieu! : "temp"
    }

    const [formData, setFormData] = useState<InvenBoardType>({
        STT: "",
        hoTen: "",
        phongBan: "",
        chucVu: "",
        diaDiem: "",
        vaiTro: "",
        // ghiChu: "",
    });

    const handleChange = (field: keyof InvenBoardType) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    }

    const addNewMember = () => {
        console.log("formData:", formData)
        const data = localStorage.getItem('data')
        const allData = data ? JSON.parse(data) : {InvenBoardData : {}}

        const targetKey = getTargetKey()

        if(!allData.InvenBoardData) {
            allData.InvenBoardData = {}
        }

        const list = allData.InvenBoardData[targetKey] || []

        const newSTT = (list.length + 1).toString().padStart(3, '0')

        const newMember = {            
            ...formData,
            STT: newSTT,
            id: newSTT,
        }

        const updatedList = [...list, newMember]

        allData.InvenBoardData[targetKey] = updatedList
        localStorage.setItem('data', JSON.stringify(allData))
        alert("Thêm thành công")
        if (mode === "detail") {
            nav(`/taisan/inventory-detail/${maSoPhieu}`, { state: { reload: true } })
        } else {
            nav(`/taisan/inventory/w-create`, { state: { reload: true } })
        }
    }

    return (
        <div>
            <Dialog open={true}>
                <DialogSurface className={style.editWdith}>
                    <DialogBody className={style.formAdd}>
                        <DialogTitle>Thêm mới ban kiểm kê</DialogTitle>
                        <DialogContent>
                            <Accordion
                                openItems={openItems}
                                onToggle={handleToggle}
                                multiple
                                collapsible
                            >
                                <AccordionItem value="1">
                                    <AccordionHeader expandIconPosition={"end"}
                                        size={"extra-large"}>
                                        <h4 className={style.formSectionTitle}>Thông tin chung</h4>
                                    </AccordionHeader>
                                    <AccordionPanel className={style.formContent}>
                                        <div>
                                            <div className={style.formDiv}>
                                                <Label className={style.formLabel} size="medium" required htmlFor={"hoTen"}>
                                                    Họ và tên
                                                </Label>
                                                <Select className={style.formInput} id={"hoTen"} name={"hoTen"}
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value="Nguyễn Văn Anh">Nguyễn Văn Anh</option>
                                                    <option value="Nguyễn Diệu Anh">Nguyễn Diệu Anh</option>
                                                    <option value="Đỗ Hùng Cường">Đỗ Hùng Cường</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label className={style.formLabel} size="medium" required htmlFor={"phongBan"}>
                                                    Phòng ban
                                                </Label>
                                                <Select className={style.formInput} id={"phongBan"} name={"phongBan"}
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value="Phòng kinh doanh">Phòng kinh doanh</option>
                                                    <option value="Phòng công nghệ">Phòng công nghệ</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label className={style.formLabel} size="medium" required htmlFor={"chucVu"}>
                                                    Chức vụ
                                                </Label>
                                                <Select className={style.formInput} id={"chucVu"} name={"chucVu"}
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value="Trưởng phòng">Trưởng phòng</option>
                                                    <option value="Phó phòng">Phó phòng</option>
                                                    <option value="Nhân viên">Nhân viên</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label className={style.formLabel} size="medium" required htmlFor={"diaDiem"}>
                                                    Địa điểm
                                                </Label>
                                                <Select className={style.formInput} id={"diaDiem"} name={"diaDiem"}
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value="VP Hà Nội">VP Hà Nội</option>
                                                    <option value="VP Hồ Chí Minh">VP Hồ Chí Minh</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label className={style.formLabel} size="medium" required htmlFor={"vaiTro"}>
                                                    Vai trò
                                                </Label>
                                                <Select className={style.formInput} id={"vaiTro"} name={"vaiTro"}
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value="Thành viên">Thành viên</option>
                                                    <option value="Trưởng ban">Trưởng ban</option>
                                                </Select>
                                            </div>
                                            {/* <div className={style.formDiv}>
                                                <Field size="medium" label="Ghi chú">
                                                    <Textarea className={style.textArea} name={"ghiChu"} placeholder="Ghi chú"
                                                    onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} />
                                                </Field>
                                            </div> */}
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </DialogContent>

                        <DialogActions className={style.Formbutton}>
                            <div className={style.Formbutton}>
                                <DialogTrigger disableButtonEnhancement>
                                    <Button icon={<ChevronLeft12Regular />} className={style.closeBtn} appearance="secondary"
                                    onClick={() => nav(-1)}>Quay lại</Button>
                                </DialogTrigger>
                                <Button appearance="primary" onClick={() => addNewMember()}>Thêm mới</Button>
                            </div>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </div>
    )
}

export default AddNewInvenBoard