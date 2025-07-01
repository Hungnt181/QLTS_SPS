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
    DialogTrigger, Dropdown, type DropdownProps, Field, Input, Label, Option, Select, Textarea
} from "@fluentui/react-components";
import type {AccordionToggleEventHandler} from '@fluentui/react-components';
import AddNewAssetStyle, {FormAddMasterDataStyle} from "../../styles/formAdd/formAdd.ts";
import {useNavigate} from "react-router-dom";
import {AddCircle20Regular, ChevronLeft16Regular} from "@fluentui/react-icons";
import {useState} from "react";
import type {FormConfigItem, NestedField} from "../../types/table.ts";

const AddNewAdvancedInfo = (props: Partial<DropdownProps>) => {
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
        _fields: [] as NestedField[],
    })
    // Khởi tạo state để lưu trữ dữ liệu của trường mới
    const [newField, setNewField] = useState<NestedField>({
        _ID: "",
        _label: "",
        _type: "text",
        _name: ""
    });
    // Thêm mới item
    // const addNewItem = async () => {
    //     const data = localStorage.getItem('data');
    //     const allData = data ? JSON.parse(data) : { nhomTaiSan: [] };
    //     const selectedId = "ttnc"
    //     const advancedData = allData.formConfig.find((form: FormConfigItem) => form.id === selectedId);
    //     advancedData.fields[0].options.push(
    //      formData
    //     );
    //     localStorage.setItem('data', JSON.stringify(allData));
    //     alert(`Thêm mới thành công.`);
    //     nav("/asset/settings/advanced-info", { state: { reload: true } })
    // }


    // Các loại trường có thể thêm
    const fieldTypes: string[] = [
        'text',
        'Dòng văn bản đơn',
        'Dòng văn bản đa dòng',
        'lookup',
        'number',
        'date',
    ];

    // Hàm lấy name tự động theo label
    const generateFieldName = (_label: string): string => {
        // 1. Bỏ dấu tiếng Việt
        const noDiacritics = _label.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // 2. Tách từ, loại bỏ khoảng trắng thừa
        const words = noDiacritics.trim().split(/\s+/);
        // 3. Chuyển thành camelCase
        const camelCased = words
            .map((word, index) =>
                index === 0
                    ? word.toLowerCase()
                    : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join("");

        return camelCased;

    };
    // Hàm xử lý thay đổi label của trường mới
    const handleNewFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newLabel = e.target.value;
        if (newField) {
            setNewField({
                ...newField,
                _label: newLabel,
                _name: generateFieldName(newLabel),
            });
        }
    };
    // Hàm xử lý thay đổi type của trường mới
    const handleNewFieldTypeChange = (selectedOption: string) => {
        if (newField) {
            setNewField({
                ...newField,
                _type: selectedOption,
            });
        }
    };
    // Hàm thêm field mới vào formData._fields
    const addFieldToForm = () => {
        if (newField._label.trim() === "") {
            alert("Vui lòng nhập tên trường!");
            return;
        }

        // Thêm field vào mảng _fields
        setFormData(prev => ({
            ...prev,
            _fields: [...prev._fields, newField]
        }));
        console.log("Form data after adding new field:", formData);
        // Reset newField về trạng thái ban đầu
        setNewField({
            _ID: `field_${Date.now()}`,
            _label: "",
            _type: "text",
            _name: ""
        });
    };
    // Thêm mới item
    const addNewItem = async () => {
        if (formData.label.trim() === "") {
            alert("Vui lòng nhập tên danh mục!");
            return;
        }

        const data = localStorage.getItem('data');
        const allData = data ? JSON.parse(data) : {nhomTaiSan: []};
        const selectedId = "ttnc"
        const advancedData = allData.formConfig.find((form: FormConfigItem) => form.id === selectedId);
        advancedData.fields[0].options.push(formData);
        localStorage.setItem('data', JSON.stringify(allData));
        alert(`Thêm mới thành công.`);
        nav("/asset/settings/advanced-info", {state: {reload: true}})
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
                                                <Input size="medium" name={"label"} id={"label"}
                                                       className={style.formInput}
                                                       onChange={(e) => setFormData({
                                                           ...formData,
                                                           [e.target.name]: e.target.value
                                                       })}
                                                />
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"_nhomTaiSan"}
                                                       className={style.formLabel}>
                                                    Nhóm tài sản
                                                </Label>
                                                <Select id={"_nhomTaiSan"} className={style.formInput}
                                                        name={"_nhomTaiSan"}
                                                        onChange={(e) => setFormData({
                                                            ...formData,
                                                            [e.target.name]: e.target.value
                                                        })}>
                                                    <option>Công cụ dụng cụ</option>
                                                    <option>Tài sản cố định hữu hình</option>
                                                    <option>Tài sản cố định vô hình</option>
                                                </Select>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Label size="medium" required htmlFor={"_loaiTaiSan"}
                                                       className={style.formLabel}>
                                                    Loại tài sản
                                                </Label>
                                                <Select id={"_loaiTaiSan"} className={style.formInput}
                                                        name={"_loaiTaiSan"}
                                                        onChange={(e) => setFormData({
                                                            ...formData,
                                                            [e.target.name]: e.target.value
                                                        })}>
                                                    <option>Thiết bị máy móc</option>
                                                    <option>Phương tiện di chuyển</option>
                                                    <option>Phương tiện vận chuyển</option>
                                                    <option>Vật liệu kiến trúc</option>
                                                </Select>
                                            </div>
                                            {/*// Các trường trong danh mục*/}
                                            <div className={style.formDiv}>
                                                <Label size="medium" className={style.formLabel}>
                                                    Cấu hình các trường dữ liệu
                                                </Label>
                                                {/*// Hiển thị các trường đã thêm*/}
                                                {
                                                    formData._fields.length > 0 ? (
                                                            (
                                                                formData._fields.map((field: NestedField) => (
                                                                    <div className={style2.newField} key={field._ID}>
                                                                        <div className={style2.fileInput}>
                                                                            <Input
                                                                                className={style2.fileInput}
                                                                                value={field._label}
                                                                                placeholder="Nhập tên trường (bắt buộc)"
                                                                                onChange={handleNewFieldChange}
                                                                            />
                                                                        </div>
                                                                        <div className={style2.fileInput}>
                                                                            <Dropdown
                                                                                className={style2.fileInput}
                                                                                value={field._type}
                                                                                onOptionSelect={(e, data) => {
                                                                                    if (data.optionValue) {
                                                                                        handleNewFieldTypeChange(data.optionValue);
                                                                                    }
                                                                                }}
                                                                                {...props}
                                                                            >
                                                                                {fieldTypes.map((type: string) => (
                                                                                    <Option key={type} value={type}>
                                                                                        {type}
                                                                                    </Option>
                                                                                ))}
                                                                            </Dropdown>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )

                                                        ) :
                                                        null
                                                }
                                                <div className={style2.newField}>
                                                    <div className={style2.fileInput}>
                                                        <Input
                                                            className={style2.fileInput}
                                                            value={newField._label}
                                                            placeholder="Nhập tên trường (bắt buộc)"
                                                            onChange={handleNewFieldChange}
                                                        />
                                                    </div>
                                                    <div className={style2.fileInput}>
                                                        <Dropdown
                                                            className={style2.fileInput}
                                                            value={newField._type}
                                                            onOptionSelect={(e, data) => {
                                                                if (data.optionValue) {
                                                                    handleNewFieldTypeChange(data.optionValue);
                                                                }
                                                            }}
                                                            {...props}
                                                        >
                                                            {fieldTypes.map((type: string) => (
                                                                <Option key={type} value={type}>
                                                                    {type}
                                                                </Option>
                                                            ))}
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                {/*// footer*/}
                                                <div className={style2.contentCardFooter}>
                                                    <div className={style2.contentCardFooterLine}></div>
                                                    <div className={style2.contentCardFooterBtn}>
                                                        <Button onClick={addFieldToForm}
                                                                icon={<AddCircle20Regular/>}/>
                                                    </div>
                                                    <div className={style2.contentCardFooterLine}></div>
                                                </div>
                                            </div>
                                            <div className={style.formDiv}>
                                                <Field size="medium" label="Mô tả">
                                                    <Textarea className={style2.textArea} name={"_moTa"}
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
                                            appearance="secondary"
                                            onClick={() => nav("/asset/settings/advanced-info")}>Quay lại</Button>
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