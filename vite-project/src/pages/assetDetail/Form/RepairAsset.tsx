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
    DialogTrigger, Field, Textarea
} from "@fluentui/react-components";
import type {AccordionToggleEventHandler} from '@fluentui/react-components';
import {useNavigate, useParams} from "react-router-dom";
import {
     Calendar20Regular, CalendarClock20Regular,
    ChevronLeft16Regular, Money20Regular,
    NumberSymbolSquare20Regular,
    Person20Regular,
    ScanText20Regular, Status20Regular
} from "@fluentui/react-icons";
import {useEffect, useState} from "react";
import AddNewAssetStyle, {FormAddMasterDataStyle, FormRevoke} from "../../../styles/formAdd/formAdd.ts";
import type {TypeTaiSan} from "../../../types/table.ts";
import {Text} from "@fluentui/react";
import {DatePicker} from "@fluentui/react-datepicker-compat";

const RepairAsset = () => {
    const {id} = useParams();
    // call api lấy data
    const [asset, setAsset] = useState<TypeTaiSan | null>(null)
    //Khởi tạo state để lưu trữ dữ liệu của form
    const [formData, setFormData] = useState({
        id: `SC_${id}`,
        taiSan: {
            id: asset?.id,
            tenTaiSan: asset?.tenTaiSan,
            maTaiSan: asset?.maTaiSan,
            nguoiQuanLy: asset?.nguoiQuanLy,
            nguoiSuDung: asset?.nguoiSuDung,
            nguyenGia: asset?.nguyenGia,
            ngayMua: asset?.ngayMua,
            hanBaoHanh: asset?.hanBaoHanh,
            trangThai: "Đang sửa chữa",
        },
        ngaySuaChua: `${new Date().toLocaleDateString("vi-VN")}`,
        moTa: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = localStorage.getItem("data");
            if (!data) return;
            const parsed = JSON.parse(data);
            const assetList: TypeTaiSan[] = Array.isArray(parsed.dataTable) ? parsed.dataTable : [];
            const foundAsset = assetList.find((item: TypeTaiSan) => String(item.id) === String(id));
            if (foundAsset) {
                setAsset(foundAsset);
                setFormData({
                    ...formData,
                    taiSan: {
                        id: foundAsset.id,
                        tenTaiSan: foundAsset.tenTaiSan,
                        maTaiSan: foundAsset.maTaiSan,
                        nguoiQuanLy: foundAsset.nguoiQuanLy,
                        nguoiSuDung: foundAsset.nguoiSuDung,
                        nguyenGia: foundAsset.nguyenGia,
                        ngayMua: foundAsset.ngayMua,
                        hanBaoHanh: foundAsset.hanBaoHanh,
                        trangThai: "Đang sửa chữa",
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
        allData.repairAsset.push(
            formData
        );
        allData.dataTable = allData.dataTable.map((item: TypeTaiSan) => (
            item.id === asset?.id ? {
                ...item,
                trangThai: "Đang sửa chữa",
            } : item
        ))
        localStorage.setItem('data', JSON.stringify(allData));
        alert(`Đăng ký sửa chữa thành công`);
        nav(`/taisan/list/detail/${id}`, {state: {reload: true}})
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
                        <DialogTitle>Sửa chữa tài sản</DialogTitle>
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
                                                    <Text>SC_{asset?.maTaiSan}</Text>
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
                                                        <NumberSymbolSquare20Regular/>
                                                        <span>ID</span>
                                                    </div>
                                                    <Text>{asset?.maTaiSan}</Text>
                                                </div>

                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <Money20Regular/>
                                                        <span>Nguyên giá</span>
                                                    </div>
                                                    <Text>{asset?.nguyenGia.toLocaleString("vi-VN")}</Text>
                                                </div>
                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <Person20Regular/>
                                                        <span>Người quản lý</span>
                                                    </div>
                                                    <Text>{asset?.nguoiQuanLy}</Text>
                                                </div>

                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <Person20Regular/>
                                                        <span>Tên người đang sử dụng</span>
                                                    </div>
                                                    <Text>{asset?.nguoiSuDung}</Text>
                                                </div>

                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <Calendar20Regular/>
                                                        <span>Ngày mua</span>
                                                    </div>
                                                    <Text>{asset?.ngayMua}</Text>
                                                </div>
                                                <div className={style3.itemInfo}>
                                                    <div className={style3.itemInfoIcon}>
                                                        <CalendarClock20Regular/>
                                                        <span>Hạn bảo hành</span>
                                                    </div>
                                                    <Text>{asset?.hanBaoHanh}</Text>
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
                                                <Field label="Ngày sửa chữa" className={style.formLabel}>
                                                    <DatePicker
                                                        className={style.formInput}
                                                        placeholder="Chọn ngày sửa chữa tài sản"
                                                        id={"ngaySuaChua"}
                                                        name={"ngaySuaChua"}
                                                        onSelectDate={handleDateChange("ngaySuaChua")}
                                                    />
                                                </Field>
                                            </div>

                                            <div className={style.formDiv}>
                                                <Field size="medium" label="Mô tả tình trạng">
                                                    <Textarea className={style2.textArea} name={"moTa"}
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
                                            appearance="secondary" onClick={() => nav(`/taisan/list/detail/${id}`)}>Quay
                                        lại</Button>
                                </DialogTrigger>
                                <Button appearance="primary" onClick={() => addNewItem()}>Sửa chữa</Button>
                            </div>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </div>
    );
};

export default RepairAsset;