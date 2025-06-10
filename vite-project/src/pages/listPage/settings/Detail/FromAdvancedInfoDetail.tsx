// import formConfigDetailStyle from "../../../../styles/listPages/settings/formConfigDetail.ts";
// import {
//     Button,
//     Card,
//     CardFooter,
//     CardPreview,
//     Dropdown,
//     type DropdownProps,
//     Input,
//     Label, Option,
// } from "@fluentui/react-components";
// import {AddCircle20Regular, Checkmark20Regular, ChevronLeft24Regular, Dismiss20Regular} from "@fluentui/react-icons";
// import {useNavigate, useParams} from "react-router-dom";
// import type {AssetCategoryOption, FormConfigItem, NestedField} from "../../../../types/table.ts";
// import {useState} from "react";

// const FormAdvancedInfoDetail = (props: Partial<DropdownProps>) => {
//     const style = formConfigDetailStyle();
//     const nav = useNavigate();
//     // lấy id từ param
//     const {_id} = useParams();
//     const data = localStorage.getItem('data');
//     const allData = data ? JSON.parse(data) : [];
//     const selectedFormId = "ttnc";
//     const advancedData = allData.formConfig.find((form: FormConfigItem)

//     const formConfigData = allData.formConfig
//     console.log('formConfigData', formConfigData);
//     const fieldTypes: string[] = [
//         'text',
//         'Dòng văn bản đơn',
//         'Dòng văn bản đa dòng',
//         'lookup',
//         'number',
//         'date',
//     ];

//     // Tạo 1 item filed mới

//     // State để hiển thị thông báo lỗi
//     // State cho trường đang được thêm mới
//     const [newField, setNewField] = useState<NestedField | null>(null);
//     // Hàm lấy name tự động theo label
//     const generateFieldName = (_label: string): string => {
//         // 1. Bỏ dấu tiếng Việt
//         const noDiacritics = _label.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

//         // 2. Tách từ, loại bỏ khoảng trắng thừa
//         const words = noDiacritics.trim().split(/\s+/);

//         // 3. Chuyển thành camelCase
//         const camelCased = words
//             .map((word, index) =>
//                 index === 0
//                     ? word.toLowerCase()
//                     : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//             )
//             .join("");

//         return camelCased;

//     };
//     // Hàm thêm trường mới
//     const handleAddNewField = () => {
//         // Kiểm tra xem có trường mới nào chưa hoàn thành không
//         if (newField && (!newField._label || newField._label.trim() === '')) {
//             return;
//         }

//         // Tạo trường mới
//         const newFieldData: NestedField = {
//             _ID: `field_${Date.now()}`,
//             _label: "",
//             _type: "text",
//             _name: "",
//         };
//         setNewField(newFieldData);
//     };
//     // Hàm xử lý thay đổi label của trường mới
//     const handleNewFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newLabel = e.target.value;
//         if (newField) {
//             setNewField({
//                 ...newField,
//                 _label: newLabel,
//                 _name: generateFieldName(newLabel),
//             });
//         }
//     };
//     // Hàm xử lý thay đổi type của trường mới
//     const handleNewFieldTypeChange = (selectedOption: string) => {
//         if (newField) {
//             setNewField({
//                 ...newField,
//                 _type: selectedOption,
//             });
//         }
//     };

//     // Hàm lưu form data mới vào db

//     const handleSaveFormData = () => {
//         console.log('formData', newField);
//         console.log('allData', allData.formConfig);
//         // Kiểm tra xem có trường mới nào chưa hoàn thành không
//         if (newField != null && newField._label.trim() !== '') {
//             const formData = newField
//             const selectedFormId = "ttnc";
//             const formConfigData = allData.formConfig.find((form: FormConfigItem) => form.id === selectedFormId);

//             if (!formConfigData) {
//                 alert("Không tìm thấy form để thêm trường.");
//                 return;
//             }

//             if (!Array.isArray(formConfigData.fields)) {
//                 formConfigData.fields = [];
//             }

//             if (newField && newField._label.trim() !== '' && newField._name.trim() !== '') {
//                 formConfigData.fields.push(formData);
//                 localStorage.setItem("data", JSON.stringify(allData));
//                 alert("Thêm mới thành công.");
//                 nav("/taisan/settings/form-config", { state: { reload: true } }) }
//         } else {
//             // Lưu dữ liệu vào localStorage
//             localStorage.setItem('data', JSON.stringify(allData));
//             alert(`Cập nhật thành công.`);
//             nav("/taisan/settings/form-config", {state: {reload: true}})
//         }
//     }

//     return <>
//         <div className={style.formConfigDetailStyle}>
//             {/*ToolBar*/}
//             <div className={style.toolBar}>
//                 <div className={style.toolBarStart}>
//                     <Button className={style.toolBarStartBtn} icon={<ChevronLeft24Regular/>}
//                             onClick={() => nav('/taisan/settings/advanced-info')}>
//                         <h4 className={style.toolBarH4}>Cấu hình thông tin nâng cao</h4>
//                     </Button>
//                 </div>
//                 <div className={style.toolBarEnd}>
//                     <Button className={style.toolBarEndBtn} icon={<Dismiss20Regular/>}>Hủy</Button>
//                     <Button onClick={handleSaveFormData} appearance="primary" icon={<Checkmark20Regular/>}>Cập nhật cấu
//                         hình</Button>
//                 </div>
//             </div>
//             {/*Content*/}
//             <div className={style.content}>
//                 {formConfigData.map((item: FormConfigItem) =>
//                     item.id === "ttnc" ? (
//                         <Card className={style.contentCard} key={item.id}>
//                             <div className={style.contentCardHeader}>
//                                 <Label className={style.contentCardHeaderWidth}>
//                                     Tên nhóm biểu mẫu
//                                 </Label>
//                                 <Input
//                                     className={style.contentCardHeaderWidth}
//                                     readOnly={true}
//                                     defaultValue={item.name}
//                                 />
//                             </div>
//                             <div>
//                                 Cấu hình các trường dữ liệu
//                             </div>
//                             <div>
//                                 {
//                                     item.fields.map((field) => {
//                                         if ("idField" in field) {
//                                             return (
//                                                 <CardPreview key={field.idField} className={style.contentCardBody}>
//                                                     <div className={style.rowContentCardBody}>
//                                                         <div className={style.divInput}>
//                                                             <Input className={style.divDropdown}
//                                                                    defaultValue={field.label}/>
//                                                         </div>
//                                                         <div className={style.divInput}>
//                                                             <Dropdown
//                                                                 id={item.name}
//                                                                 name={item.name}
//                                                                 value={field.type}
//                                                                 className={style.divDropdown}
//                                                                 {...props}
//                                                             >
//                                                                 {fieldTypes.map((type) => (
//                                                                     <Option key={type} value={type}>
//                                                                         {type}
//                                                                     </Option>
//                                                                 ))}
//                                                             </Dropdown>
//                                                         </div>
//                                                     </div>
//                                                 </CardPreview>
//                                             );
//                                         } else {
//                                             return null;
//                                         }
//                                     })
//                                 }
//                                 {/* New Field */}
//                                 {newField && (
//                                     <CardPreview className={`${style.contentCardBody} new-field-highlight`}>
//                                         <div className={style.rowContentCardBody}>
//                                             <div className={style.divInput}>
//                                                 <Input
//                                                     className={style.divDropdown}
//                                                     value={newField.label}
//                                                     placeholder="Nhập tên trường (bắt buộc)"
//                                                     onChange={handleNewFieldChange}
//                                                 />
//                                             </div>
//                                             <div className={style.divInput}>
//                                                 <Dropdown
//                                                     value={newField.type}
//                                                     className={style.divDropdown}
//                                                     onOptionSelect={(e, data) => {
//                                                         if (data.optionValue) {
//                                                             handleNewFieldTypeChange(data.optionValue);
//                                                         }
//                                                     }}
//                                                     {...props}
//                                                 >
//                                                     {fieldTypes.map((type: string) => (
//                                                         <Option key={type} value={type}>
//                                                             {type}
//                                                         </Option>
//                                                     ))}
//                                                 </Dropdown>
//                                             </div>
//                                         </div>
//                                     </CardPreview>
//                                 )}
//                             </div>

//                             <CardFooter className={style.contentCardFooter}>
//                                 <div className={style.contentCardFooterLine}>

//                                 </div>
//                                 <div>
//                                     <Button onClick={handleAddNewField} className={style.contentCardFooterBtn}
//                                             icon={<AddCircle20Regular/>}/>
//                                 </div>
//                                 <div className={style.contentCardFooterLine}>

//                                 </div>
//                             </CardFooter>
//                         </Card>
//                     ) : null
//                 )}

//             </div>
//         </div>
//     </>
// };

// export default FormAdvancedInfoDetail;
