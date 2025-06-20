import formConfigDetailStyle from "../../../../styles/listPages/settings/formConfigDetail.ts";
import {
    Button,
    Card,
    CardFooter,
    CardPreview,
    Dropdown,
    type DropdownProps,
    Input,
    Label,
    Option,
    Text,
    Menu,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    Checkbox,
} from "@fluentui/react-components";
import {
    AddCircle20Regular,
    Checkmark20Regular,
    ChevronLeft24Regular,
    Dismiss20Regular,
    Delete20Regular,
    MoreVertical20Regular
} from "@fluentui/react-icons";
import {useNavigate, useParams} from "react-router-dom";
import type {AssetCategoryOption, FormConfigItem, NestedField} from "../../../../types/table.ts";
import {useState} from "react";

// Interface cho lookup option
interface LookupOption {
    label: string;
    value: string;
}

// Extend NestedField interface để bao gồm options
interface ExtendedNestedField extends NestedField {
    options?: LookupOption[];
}

const FormAdvancedInfoDetail = (props: Partial<DropdownProps>) => {
    const style = formConfigDetailStyle();
    const nav = useNavigate();
    // lấy id từ param
    const {_id} = useParams();
    const data = localStorage.getItem('data');
    const allData = data ? JSON.parse(data) : [];
    const selectedFormId = "ttnc";
    const advancedData = allData.formConfig.find((form: FormConfigItem) => form.id === selectedFormId)

    const formConfigData = advancedData.fields[0].options;

    const fieldTypes: string[] = [
        'text',
        'Dòng văn bản đơn',
        'Dòng văn bản đa dòng',
        'lookup',
        'number',
        'date',
    ];

    // State cho trường đang được thêm mới
    const [newField, setNewField] = useState<ExtendedNestedField | null>(null);

    // State cho việc chỉnh sửa các trường hiện có
    const [editingFields, setEditingFields] = useState<{[key: string]: ExtendedNestedField}>({});

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

    // Hàm thêm trường mới
    const handleAddNewField = () => {
        // Kiểm tra xem có trường mới nào chưa hoàn thành không
        if (newField && (!newField._label || newField._label.trim() === '')) {
            return;
        } else {
            // Nếu có trường mới đã hoàn thành, thêm nó vào danh sách
            const formData = newField;
            const selectedFormId = _id;
            const formAdvancedIfData = formConfigData.find((form: AssetCategoryOption) => form._id === selectedFormId);

            if (!formAdvancedIfData) {
                alert("Không tìm thấy form để thêm trường.");
                return;
            }

            if (!Array.isArray(formAdvancedIfData._fields)) {
                formAdvancedIfData._fields = [];
            }

            if (newField && newField._label.trim() !== '' && newField._name.trim() !== '') {
                formAdvancedIfData._fields.push(formData);
                localStorage.setItem("data", JSON.stringify(allData));
            }
        }

        // Tạo trường mới
        const newFieldData: ExtendedNestedField = {
            _ID: `field_${Date.now()}`,
            _label: "",
            _type: "text",
            _name: "",
            options: []
        };
        setNewField(newFieldData);
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
            const updatedField = {
                ...newField,
                _type: selectedOption,
            };

            // Nếu chọn lookup, khởi tạo mảng options rỗng
            if (selectedOption === 'lookup' && !updatedField.options) {
                updatedField.options = [];
            }

            setNewField(updatedField);
        }
    };

    // Hàm thêm option mới cho lookup field
    const handleAddLookupOption = (fieldId: string, isNewField: boolean = false) => {
        if (isNewField && newField) {
            const newOptions = [...(newField.options || []), { label: "", value: "" }];
            setNewField({
                ...newField,
                options: newOptions
            });
        } else {
            // Xử lý cho existing fields
            const currentField = editingFields[fieldId] ||
                formConfigData.find((item: AssetCategoryOption) => item._id === _id)?._fields.find((f: NestedField) => f._ID === fieldId);

            if (currentField) {
                const newOptions = [...(currentField.options || []), { label: "", value: "" }];
                setEditingFields({
                    ...editingFields,
                    [fieldId]: {
                        ...currentField,
                        options: newOptions
                    }
                });
            }
        }
    };

    // Hàm cập nhật option lookup
    const handleUpdateLookupOption = (fieldId: string, optionIndex: number, field: 'label' | 'value', value: string, isNewField: boolean = false) => {
        if (isNewField && newField) {
            const updatedOptions = [...(newField.options || [])];
            updatedOptions[optionIndex] = {
                ...updatedOptions[optionIndex],
                [field]: value
            };

            // Tự động generate value từ label nếu đang sửa label
            if (field === 'label') {
                updatedOptions[optionIndex].value = generateFieldName(value);
            }

            setNewField({
                ...newField,
                options: updatedOptions
            });
        } else {
            // Xử lý cho existing fields
            const currentField = editingFields[fieldId] ||
                formConfigData.find((item: AssetCategoryOption) => item._id === _id)?._fields.find((f: NestedField) => f._ID === fieldId);

            if (currentField) {
                const updatedOptions = [...(currentField.options || [])];
                updatedOptions[optionIndex] = {
                    ...updatedOptions[optionIndex],
                    [field]: value
                };

                // Tự động generate value từ label nếu đang sửa label
                if (field === 'label') {
                    updatedOptions[optionIndex].value = generateFieldName(value);
                }

                setEditingFields({
                    ...editingFields,
                    [fieldId]: {
                        ...currentField,
                        options: updatedOptions
                    }
                });
            }
        }
    };

    // Hàm xóa option lookup
    const handleRemoveLookupOption = (fieldId: string, optionIndex: number, isNewField: boolean = false) => {
        if (isNewField && newField) {
            const updatedOptions = newField.options?.filter((_, index) => index !== optionIndex) || [];
            setNewField({
                ...newField,
                options: updatedOptions
            });
        } else {
            // Xử lý cho existing fields
            const currentField = editingFields[fieldId] ||
                formConfigData.find((item: AssetCategoryOption) => item._id === _id)?._fields.find((f: NestedField) => f._ID === fieldId);

            if (currentField) {
                const updatedOptions = currentField.options?.filter((_, index) => index !== optionIndex) || [];
                setEditingFields({
                    ...editingFields,
                    [fieldId]: {
                        ...currentField,
                        options: updatedOptions
                    }
                });
            }
        }
    };

    // Hàm lưu form data mới vào db
    const handleSaveFormData = () => {
        // Cập nhật các trường đã chỉnh sửa
        Object.keys(editingFields).forEach(fieldId => {
            const formAdvancedIfData = formConfigData.find((item: AssetCategoryOption) => item._id === _id);
            if (formAdvancedIfData) {
                const fieldIndex = formAdvancedIfData._fields.findIndex((f: NestedField) => f._ID === fieldId);
                if (fieldIndex !== -1) {
                    formAdvancedIfData._fields[fieldIndex] = editingFields[fieldId];
                }
            }
        });

        // Kiểm tra xem có trường mới nào chưa hoàn thành không
        if (newField != null && newField._label.trim() !== '') {
            const formData = newField;
            const selectedFormId = _id;
            const formAdvancedIfData = formConfigData.find((form: AssetCategoryOption) => form._id === selectedFormId);

            if (!formAdvancedIfData) {
                alert("Không tìm thấy form để thêm trường.");
                return;
            }

            if (!Array.isArray(formAdvancedIfData._fields)) {
                formAdvancedIfData._fields = [];
            }

            if (newField && newField._label.trim() !== '' && newField._name.trim() !== '') {
                formAdvancedIfData._fields.push(formData);
                localStorage.setItem("data", JSON.stringify(allData));
                alert("Thêm mới thành công.");
                nav("/taisan/settings/advanced-info", { state: { reload: true } });
            }
        } else {
            // Lưu dữ liệu vào localStorage
            localStorage.setItem('data', JSON.stringify(allData));
            alert(`Cập nhật thành công.`);
            nav("/taisan/settings/advanced-info", {state: {reload: true}});
        }
    };

    // Component render lookup options
    const renderLookupOptions = (field: ExtendedNestedField, isNewField: boolean = false) => {
        const options = field.options || [];

        return (
            <div style={{ marginTop: '12px', padding: '12px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
                <Text weight="semibold" size={300}>Cấu hình giá trị Lookup:</Text>
                {options.map((option, index) => (
                    <div key={index} style={{ display: 'flex', gap: '8px', marginTop: '8px', alignItems: 'center' }}>
                        <Input
                            placeholder="Nhập label"
                            value={option.label}
                            onChange={(e) => handleUpdateLookupOption(
                                field._ID || '',
                                index,
                                'label',
                                e.target.value,
                                isNewField
                            )}
                            style={{ flex: 1 }}
                        />
                        <Input
                            placeholder="Value (tự động)"
                            value={option.value}
                            readOnly
                            style={{ flex: 1, backgroundColor: '#f5f5f5' }}
                        />
                        <Button
                            icon={<Delete20Regular />}
                            size="small"
                            appearance="subtle"
                            onClick={() => handleRemoveLookupOption(field._ID || '', index, isNewField)}
                        />
                    </div>
                ))}
                <Button
                    icon={<AddCircle20Regular />}
                    size="small"
                    appearance="subtle"
                    onClick={() => handleAddLookupOption(field._ID || '', isNewField)}
                    style={{ marginTop: '8px' }}
                >
                    Thêm giá trị
                </Button>
            </div>
        );
    };

    return <>
        <div className={style.formConfigDetailStyle}>
            {/*ToolBar*/}
            <div className={style.toolBar}>
                <div className={style.toolBarStart}>
                    <Button className={style.toolBarStartBtn} icon={<ChevronLeft24Regular/>}
                            onClick={() => nav('/taisan/settings/advanced-info')}>
                        <h4 className={style.toolBarH4}>Cấu hình thông tin nâng cao</h4>
                    </Button>
                </div>
                <div className={style.toolBarEnd}>
                    <Button onClick={() => nav('/taisan/settings/advanced-info')} className={style.toolBarEndBtn} icon={<Dismiss20Regular/>}>Hủy</Button>
                    <Button onClick={handleSaveFormData} appearance="primary" icon={<Checkmark20Regular/>}>Cập nhật cấu
                        hình</Button>
                </div>
            </div>
            {/*Content*/}
            <div className={style.content}>
                {formConfigData.map((item: AssetCategoryOption) =>
                    (item._id == _id) ? (
                        <Card className={style.contentCard} key={item._id}>
                            <div className={style.contentCardHeader}>
                                <Label className={style.contentCardHeaderWidth}>
                                    Tên nhóm biểu mẫu
                                </Label>
                                <Input
                                    className={style.contentCardHeaderWidth}
                                    readOnly={true}
                                    defaultValue={item.label}
                                />
                            </div>
                            <div>
                                Cấu hình các trường dữ liệu
                            </div>
                            <div>
                                {
                                    item._fields.map((field: NestedField) => {
                                        const currentField = editingFields[field._ID] || field;
                                        return (
                                            <CardPreview key={field._ID} className={style.contentCardBody}>
                                                <div className={style.rowContentCardBody}>
                                                    <div className={style.divInput} style={{display: "flex", alignItems: "center"}}>
                                                        <Checkbox checked={true} />
                                                        <Input
                                                            className={style.divDropdown}
                                                            defaultValue={field._label}
                                                            onChange={(e) => {
                                                                setEditingFields({
                                                                    ...editingFields,
                                                                    [field._ID]: {
                                                                        ...currentField,
                                                                        _label: e.target.value,
                                                                        _name: generateFieldName(e.target.value)
                                                                    }
                                                                });
                                                            }}
                                                        />
                                                    </div>
                                                    <div className={style.divInput} style={{display: "flex", alignItems: "center"}}>
                                                        <Dropdown
                                                            id={field._ID}
                                                            name={field._ID}
                                                            value={currentField._type}
                                                            className={style.divDropdown}
                                                            onOptionSelect={(e, data) => {
                                                                if (data.optionValue) {
                                                                    const updatedField = {
                                                                        ...currentField,
                                                                        _type: data.optionValue
                                                                    };

                                                                    // Nếu chọn lookup, khởi tạo mảng options
                                                                    if (data.optionValue === 'lookup' && !updatedField.options) {
                                                                        updatedField.options = [];
                                                                    }

                                                                    setEditingFields({
                                                                        ...editingFields,
                                                                        [field._ID]: updatedField
                                                                    });
                                                                }
                                                            }}
                                                            {...props}
                                                        >
                                                            {fieldTypes.map((type) => (
                                                                <Option key={type} value={type}>
                                                                    {type}
                                                                </Option>
                                                            ))}
                                                        </Dropdown>
                                                        <Menu positioning={{ autoSize: true }}>
                                                            <MenuTrigger>
                                                                <MoreVertical20Regular/>
                                                            </MenuTrigger>

                                                            <MenuPopover>
                                                                <MenuList>
                                                                    <MenuItem>Xóa</MenuItem>
                                                                    <MenuItem>Sửa</MenuItem>
                                                                </MenuList>
                                                            </MenuPopover>
                                                        </Menu>
                                                    </div>
                                                </div>
                                                {/* Hiển thị cấu hình lookup options nếu type là lookup */}
                                                {currentField._type === 'lookup' && renderLookupOptions(currentField)}
                                            </CardPreview>
                                        );
                                    })
                                }
                                {/* New Field */}
                                {newField && (
                                    <CardPreview className={`${style.contentCardBody} new-field-highlight`}>
                                        <div className={style.rowContentCardBody}>
                                            <div className={style.divInput}>
                                                <Input
                                                    className={style.divDropdown}
                                                    value={newField._label}
                                                    placeholder="Nhập tên trường (bắt buộc)"
                                                    onChange={handleNewFieldChange}
                                                />
                                            </div>
                                            <div className={style.divInput}>
                                                <Dropdown
                                                    value={newField._type}
                                                    className={style.divDropdown}
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
                                        {/* Hiển thị cấu hình lookup options cho trường mới nếu type là lookup */}
                                        {newField._type === 'lookup' && renderLookupOptions(newField, true)}
                                    </CardPreview>
                                )}
                            </div>

                            <CardFooter className={style.contentCardFooter}>
                                <div className={style.contentCardFooterLine}>

                                </div>
                                <div>
                                    <Button onClick={handleAddNewField} className={style.contentCardFooterBtn}
                                            icon={<AddCircle20Regular/>}/>
                                </div>
                                <div className={style.contentCardFooterLine}>

                                    </div>
                                    </CardFooter>
                                    </Card>
                                    ) : null
                                    ) }
                            </div>
                        </div>
                    </>
                };

export default FormAdvancedInfoDetail;