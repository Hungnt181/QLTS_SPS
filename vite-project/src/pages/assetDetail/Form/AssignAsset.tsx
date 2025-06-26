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
import {useNavigate, useParams} from "react-router-dom";
import {
    Autosum20Regular,
    ChevronLeft16Regular,
    NumberSymbolSquare20Regular,
    ScanText20Regular
} from "@fluentui/react-icons";
import {useEffect, useState} from "react";
import AddNewAssetStyle, {FormAddMasterDataStyle, FormRevoke} from "../../../styles/formAdd/formAdd.ts";
import type {TypeTaiSan} from "../../../types/table.ts";
import {Text} from "@fluentui/react";
import {DatePicker} from "@fluentui/react-datepicker-compat";

const AssignAsset = () => {
    const {id} = useParams();
    // call api lấy data
    const [asset, setAsset] = useState<TypeTaiSan | null>(null)
    //Khởi tạo state để lưu trữ dữ liệu của form
    const [formData, setFormData] = useState({
        id: `assign${id}`,
        taiSan: {
            id: asset?.id,
            tenTaiSan: asset?.tenTaiSan,
            soLuong: "1",
        },
        nguoiCapPhat: asset?.nguoiQuanLy,
        nguoiSuDung: "Trần Văn Nam",
        soLuongCapPhat: "1",
        ngayCapPhat: `${new Date().toLocaleDateString("vi-VN")}`,
        ghiChu: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = localStorage.getItem("data");
            if (!data) return;
            const parsed = JSON.parse(data);
            const assetList: TypeTaiSan[] = Array.isArray(parsed.dataTable) ? parsed.dataTable : [];
            const foundAsset = assetList.find((item) => String(item.id) === String(id));
            if (foundAsset) {
                setAsset(foundAsset);
                setFormData({
                    ...formData,
                    taiSan: {
                        id: foundAsset.id,
                        tenTaiSan: foundAsset.tenTaiSan,
                        soLuong: "1",
                    },
                    nguoiCapPhat: foundAsset.nguoiQuanLy,
                });
            }
        } catch (error) {
            console.log("Lỗi đọc tài sản trong Local Storage", error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData().then()
    }, [id])
    if (isLoading) return <div>Loading...</div>
    const style = AddNewAssetStyle()
    const style2 = FormAddMasterDataStyle()
    const style3 = FormRevoke()
    const nav = useNavigate()
    const [openItems, setOpenItems] = useState(["1","2"]);
    const handleToggle: AccordionToggleEventHandler<string> = (_event, data) => {
        setOpenItems(data.openItems);
    };

    // Thêm mới item
    const addNewItem = async () => {
        const data = localStorage.getItem('data');
        const allData = data ? JSON.parse(data) : {assignAsset: []};
        allData.assignAsset.push(
            formData
        );
        allData.dataTable = allData.dataTable.map((item: TypeTaiSan) => (
            item.id === asset?.id ? {
                ...item,
                trangThai: "Đang sử dụng",
                nguoiSuDung: formData.nguoiSuDung,
                ngayTiepNhan: formData.ngayCapPhat,
            } : item
        ))
        localStorage.setItem('data', JSON.stringify(allData));
        alert(`Cấp phát thành công`);
        nav(`/asset/list/detail/${id}`, {state: {reload: true}})
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
                <DialogSurface className={style2.formAddSettingWitdh}>
                    <DialogBody className={style2.formAddSettingMaster}>
                        <DialogTitle>Cấp phát tài sản</DialogTitle>
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
                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <NumberSymbolSquare20Regular/>
                                                        <span>ID</span>
                                                    </div>
                                                    <Text>{asset?.maTaiSan}</Text>
                                                </div>
                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <ScanText20Regular/>
                                                        <span>Tên tài sản</span>
                                                    </div>
                                                    <Text>{asset?.tenTaiSan}</Text>
                                                </div>
                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <Autosum20Regular/>
                                                        <span>Số lượng đã cấp phát</span>
                                                    </div>
                                                    <Text>1</Text>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem value="2">
                                    <AccordionHeader className={style.formSection} expandIconPosition={"end"}
                                                     size={"extra-large"}><h4 className={style.formSectionTitle}>Thông
                                        tin cấp phát</h4>
                                    </AccordionHeader>
                                    <AccordionPanel className={style.formContent}>
                                        {/*//Thông tin chung*/}
                                        <div>
                                            <div className={style.formDiv}>
                                                <Field label="Ngày cấp phát" className={style.formLabel}>
                                                    <DatePicker
                                                        className={style.formInput}
                                                        placeholder="Chọn ngày cấp phát tài sản"
                                                        id={"ngayCapPhat"}
                                                        name={"ngayCapPhat"}
                                                        onSelectDate={handleDateChange("ngayCapPhat")}
                                                    />
                                                </Field>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"nguoiCapPhat"}
                                                       className={style.formLabel}>
                                                    Người cấp phát
                                                </Label>
                                                <Select id={"nguoiCapPhat"} name={"nguoiCapPhat"}
                                                        className={style.formInput}
                                                        onChange={(e) => setFormData({
                                                            ...formData,
                                                            [e.target.name]: e.target.value
                                                        })}>
                                                    <option>{asset?.nguoiQuanLy}</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" htmlFor={"nguoiSuDung"}
                                                       className={style.formLabel}>
                                                    Người tiếp nhận
                                                </Label>
                                                <Select id={"nguoiSuDung"} name={"nguoiSuDung"}
                                                        className={style.formInput}
                                                        onChange={(e) => setFormData({
                                                            ...formData,
                                                            [e.target.name]: e.target.value
                                                        })}>
                                                    <option>Trần Văn Nam</option>
                                                    <option>Trần Lê Lý</option>
                                                    <option>Nguyễn Hải Sen</option>
                                                    <option>Phạm Quang Linh</option>
                                                    <option>Nguyễn Hoàng Hạ</option>
                                                    <option>Trần Văn Tượng</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"soLuongCapPhat"}
                                                       className={style.formLabel}>
                                                    Số lượng ấp phát
                                                </Label>
                                                <Input size="medium" name={"soLuongCapPhat"} id={"soLuongCapPhat"}
                                                       className={style.formInput}
                                                       onChange={(e) => setFormData({
                                                           ...formData,
                                                           [e.target.name]: e.target.value
                                                       })}/>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Field size="medium" label="Ghi chú">
                                                    <Textarea className={style2.textArea} name={"ghiChu"}
                                                              onChange={(e) => setFormData({
                                                                  ...formData,
                                                                  [e.target.name]: e.target.value
                                                              })}
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
                                            appearance="secondary" onClick={() => nav(`/asset/list/detail/${id}`)}>Quay
                                        lại</Button>
                                </DialogTrigger>
                                <Button appearance="primary" onClick={() => addNewItem()}>Cấp phát</Button>
                            </div>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </div>
    );
};

export default AssignAsset;