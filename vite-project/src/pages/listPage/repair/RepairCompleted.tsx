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
    DialogTrigger, Field, Input, Textarea
} from "@fluentui/react-components";
import type {AccordionToggleEventHandler} from '@fluentui/react-components';
import {useNavigate, useParams} from "react-router-dom";
import {
    ChevronLeft16Regular, Money20Regular,
    NumberSymbolSquare20Regular,
    Person20Regular,
    ScanText20Regular, Status20Regular
} from "@fluentui/react-icons";
import {useEffect, useState} from "react";
import AddNewAssetStyle, {FormAddMasterDataStyle, FormRevoke} from "../../../styles/formAdd/formAdd.ts";
import type {RepairAssetItem, TypeTaiSan} from "../../../types/table.ts";
import {Text} from "@fluentui/react";
import {DatePicker} from "@fluentui/react-datepicker-compat";

const RepairCompleted = () => {
    const {id} = useParams();
    // call api lấy data
    const [asset, setAsset] = useState<RepairAssetItem | null>(null)
    //Khởi tạo state để lưu trữ dữ liệu của form
    const [formData, setFormData] = useState({
        id: `SC_${id}`,
        taiSan: {
            id: asset?.id,
            tenTaiSan: asset?.taiSan.tenTaiSan,
            maTaiSan: asset?.taiSan.maTaiSan,
            nguoiQuanLy: asset?.taiSan.nguoiQuanLy,
            nguoiSuDung: asset?.taiSan.nguoiSuDung,
            nguyenGia: asset?.taiSan.nguyenGia,
            ngayMua: asset?.taiSan.ngayMua,
            hanBaoHanh: asset?.taiSan.hanBaoHanh,
            trangThai: "Hoàn thành sửa chữa",
        },
        ngayHoanThanh: `${new Date().toLocaleDateString("vi-VN")}`,
        chiPhiThucTe: "",
        ghiChu: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = localStorage.getItem("data");
            if (!data) return;
            const parsed = JSON.parse(data);
            const assetList: RepairAssetItem[] = Array.isArray(parsed.repairAsset) ? parsed.repairAsset : [];
            const foundAsset = assetList.find((item: RepairAssetItem) => String(item.id) === String(id));
            if (foundAsset) {
                setAsset(foundAsset);
                console.log("Found asset:", foundAsset);
                setFormData({
                    ...formData,
                    taiSan: {
                        id: foundAsset.id,
                        tenTaiSan: foundAsset.taiSan.tenTaiSan,
                        maTaiSan: foundAsset.taiSan.maTaiSan,
                        nguoiQuanLy: foundAsset.taiSan.nguoiQuanLy,
                        nguoiSuDung: foundAsset.taiSan.nguoiSuDung,
                        nguyenGia: foundAsset.taiSan.nguyenGia,
                        ngayMua: foundAsset.taiSan.ngayMua,
                        hanBaoHanh: foundAsset.taiSan.hanBaoHanh,
                        trangThai: "Đang sử dụng",
                    },
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
    const [openItems, setOpenItems] = useState(["1", "2"]);
    const handleToggle: AccordionToggleEventHandler<string> = (_event, data) => {
        setOpenItems(data.openItems);
    };

    // Thêm mới item
    const addNewItem = async () => {
        const data = localStorage.getItem('data');
        const allData = data ? JSON.parse(data) : {repairAsset: []};
        allData.repairAsset = allData.repairAsset.filter((item: RepairAssetItem) => String(item.id) !== String(id));
        allData.dataTable = allData.dataTable.map((item: TypeTaiSan) => (
            item.id === asset?.taiSan.id ? {
                ...item,
                trangThai: "Đang sử dụng",
                lichSuBaoTri: "Sửa chữa hoàn thành vào " + formData.ngayHoanThanh,
            } : item
        ))
        localStorage.setItem('data', JSON.stringify(allData));
        alert(`Hoàn thành sửa chữa`);
        nav(`/asset/repair`, {state: {reload: true}})
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
                        <DialogTitle>Thêm mới nhóm tài sản</DialogTitle>
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
                                                        <Status20Regular/>
                                                        <span>Mã số biên bản</span>
                                                    </div>
                                                    <Text>{asset?.id}</Text>
                                                </div>
                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <ScanText20Regular/>
                                                        <span>Tên tài sản</span>
                                                    </div>
                                                    <Text>{asset?.taiSan?.tenTaiSan}</Text>
                                                </div>
                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <NumberSymbolSquare20Regular/>
                                                        <span>ID</span>
                                                    </div>
                                                    <Text>{asset?.taiSan.maTaiSan}</Text>
                                                </div>

                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <Money20Regular/>
                                                        <span>Nguyên giá</span>
                                                    </div>
                                                    <Text>{asset?.taiSan.nguyenGia.toLocaleString("vi-VN")}</Text>
                                                </div>
                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <Person20Regular/>
                                                        <span>Người quản lý</span>
                                                    </div>
                                                    <Text>{asset?.taiSan.nguoiQuanLy}</Text>
                                                </div>

                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <Person20Regular/>
                                                        <span>Tên người đang sử dụng</span>
                                                    </div>
                                                    <Text>{asset?.taiSan.nguoiSuDung}</Text>
                                                </div>

                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem value="2">
                                    <AccordionHeader className={style.formSection} expandIconPosition={"end"}
                                                     size={"extra-large"}><h4 className={style.formSectionTitle}>Thông
                                        tin sửa chữa</h4>
                                    </AccordionHeader>
                                    <AccordionPanel className={style.formContent}>
                                        {/*//Thông tin chung*/}
                                        <div>
                                            <div className={style.formDiv}>
                                                <Field label="Ngày hoàn thành sửa chữa" className={style.formLabel}>
                                                    <DatePicker
                                                        className={style.formInput}
                                                        placeholder="Chọn ngày hoàn thành sửa chữa tài sản"
                                                        id={"ngayHoanThanh"}
                                                        name={"ngayHoanThanh"}
                                                        onSelectDate={handleDateChange("ngayHoanThanh")}
                                                    />
                                                </Field>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Field size="medium" label="Chi phí sửa chữa">
                                                    <Input  name={"chiPhiThucTe"}
                                                              onChange={(e) => setFormData({
                                                                  ...formData,
                                                                  [e.target.name]: e.target.value
                                                              })}
                                                    />
                                                </Field>
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
                                            appearance="secondary" onClick={() => nav(`/asset/repair`)}>Quay
                                        lại</Button>
                                </DialogTrigger>
                                <Button appearance="primary" onClick={() => addNewItem()}>Hoàn thành</Button>
                            </div>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </div>
    );
};

export default RepairCompleted;