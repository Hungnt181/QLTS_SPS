import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Field,
  Input,
  Label,
  Select,
  Text,
} from "@fluentui/react-components";
import type { AccordionToggleEventHandler } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import AddNewAssetStyle from "../../styles/formAdd/formAdd.ts";
import { useNavigate } from "react-router-dom";
import { ChevronLeft16Regular } from "@fluentui/react-icons";
import { useState } from "react";

const AddNewAsset = () => {
  const style = AddNewAssetStyle();
  const nav = useNavigate();
  const [openItems, setOpenItems] = useState(["1"]);

  // FormConfig data
  const data = localStorage.getItem("data");
  const allData = data ? JSON.parse(data) : [];
  const formConfig = allData.formConfig;

  // Thêm state để quản lý dynamic fields
  const [dynamicFields, setDynamicFields] = useState({});

  const handleToggle: AccordionToggleEventHandler<string> = (_event, data) => {
    setOpenItems(data.openItems);
  };

  // Tạo initial form data từ config
  const createInitialFormData = () => {
    const initialData = {};
    formConfig.forEach((section) => {
      section.fields.forEach((field) => {
        // Đặc biệt xử lý cho danhMucTaiSan - để trống ban đầu
        if (field.name === "danhMucTaiSan") {
          initialData[field.name] = "";
        } else {
          initialData[field.name] = field.defaultValue || "";
        }
      });
    });
    return initialData;
  };

  const [formData, setFormData] = useState(createInitialFormData());

  const addNewItem = async () => {
    // console.log("formData", formData);
    const data = localStorage.getItem("data");
    const allData = data ? JSON.parse(data) : { dataTable: [] };
    allData.dataTable.push({
      id: `TS_${formConfig.id}`,
      ...formData,
    });
    localStorage.setItem("data", JSON.stringify(allData));
    alert(`Thêm mới thành công.`);
    nav("/asset/list", { state: { reload: true } });
  };

  // Cập nhật hàm handleInputChange để xử lý dynamic fields
  const handleInputChange = (fieldName, value, sectionId = null) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Xử lý khi chọn danh mục tài sản (có _fields)
    if (fieldName === "danhMucTaiSan") {
      // Tìm option được chọn để lấy _fields
      const selectedSection = formConfig.find(
        (section) => section.id === "ttnc"
      );
      const danhMucField = selectedSection?.fields.find(
        (field) => field.name === "danhMucTaiSan"
      );
      const selectedOption = danhMucField?.options.find(
        (option) => option.value === value
      );

      if (selectedOption && selectedOption._fields) {
        // console.log('Selected option _fields:', selectedOption._fields);
        setDynamicFields({
          ...dynamicFields,
          [sectionId || "ttnc"]: selectedOption._fields,
        });

        // Set default values cho dynamic fields
        const newFormData = { ...formData, [fieldName]: value };
        selectedOption._fields.forEach((field) => {
          newFormData[field._name] = field._defaultValue || "";
        });
        setFormData(newFormData);
      } else {
        // Xóa dynamic fields nếu không có _fields
        setDynamicFields({
          ...dynamicFields,
          [sectionId || "ttnc"]: [],
        });
      }
    }
  };

  const handleDateChange = (fieldName) => (date) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: date ? date.toLocaleDateString("vi-VN") : "",
    }));
  };

  // Hàm render dynamic field
  const renderDynamicField = (field) => {
    switch (field._type) {
      case "text":
      case "number":
        return (
          <div key={field._ID} className={style.formDiv}>
            <Label
              size="medium"
              htmlFor={field._name}
              className={style.formLabel}
            >
              {field._label}
            </Label>
            <Input
              size="medium"
              name={field._name}
              id={field._name}
              className={style.formInput}
              type={field._type}
              defaultValue={field._defaultValue}
              onChange={(e) => handleInputChange(field._name, e.target.value)}
            />
          </div>
        );

      case "lookup":
        return (
          <div key={field._ID} className={style.formDiv}>
            <Label
              size="medium"
              htmlFor={field._name}
              className={style.formLabel}
            >
              {field._label}
            </Label>
            <Select
              id={field._name}
              name={field._name}
              className={style.formInput}
              defaultValue={field.defaultValue}
              onChange={(event, data) =>
                handleInputChange(field._name, data.value)
              }
            >
              {field.options?.map((option, idx) => (
                <option
                  key={idx}
                  value={option.value}
                  hidden={option.value === ""}
                >
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
        );

      default:
        return null;
    }
  };

  // Render field dựa trên type
  const renderField = (field, index, sectionId = null) => {
    const isDoubleField =
      field.name === "soLuong" || field.name === "donViTinh";

    switch (field.type) {
      case "text":
      case "number":
        return (
          <div
            key={field.idField}
            className={isDoubleField ? style.formDiv : style.formDiv}
          >
            <Label
              size="medium"
              required={field.required}
              htmlFor={field.name}
              className={style.formLabel}
            >
              {field.label}
            </Label>
            <Input
              size="medium"
              name={field.name}
              id={field.name}
              className={style.formInput}
              readOnly={field.readOnly}
              defaultValue={field.defaultValue}
              contentAfter={
                field.suffix ? (
                  <Text size={400}>{field.suffix}</Text>
                ) : undefined
              }
              onChange={(e) =>
                handleInputChange(field.name, e.target.value, sectionId)
              }
            />
          </div>
        );

      case "lookup":
        return (
          <div
            key={field.idField}
            className={isDoubleField ? style.formDiv : style.formDiv}
          >
            <Label
              size="medium"
              required={field.required}
              htmlFor={field.name}
              className={style.formLabel}
            >
              {field.label}
            </Label>
            <Select
              id={field.name}
              name={field.name}
              className={style.formInput}
              defaultValue={
                field.name === "danhMucTaiSan" ? "" : field.defaultValue
              }
              placeholder={
                field.name === "danhMucTaiSan"
                  ? "Chọn danh mục tài sản"
                  : undefined
              }
              onChange={(event, data) => {
                // Với Fluent UI Select, giá trị được chọn nằm trong data.value
                handleInputChange(field.name, data.value, sectionId);

                // Log để debug
                if (field.name === "danhMucTaiSan") {
                  console.log("Selected danh muc value:", data.value);
                }
              }}
            >
              {field.name === "danhMucTaiSan" && (
                <option value="" disabled hidden>
                  Chọn danh mục tài sản
                </option>
              )}
              {field.options?.map((option, idx) => (
                <option
                  key={idx}
                  value={option.value}
                  hidden={option.value === ""}
                >
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
        );

      case "date":
        return (
          <div key={field.idField} className={style.formDiv}>
            <Field label={field.label} className={style.formLabel}>
              <DatePicker
                className={style.formInput}
                placeholder={`Chọn ${field.label.toLowerCase()}`}
                id={field.name}
                name={field.name}
                onSelectDate={handleDateChange(field.name)}
              />
            </Field>
          </div>
        );

      default:
        return null;
    }
  };

  // Render section với các trường hợp đặc biệt cho layout
  const renderSection = (section, sectionIndex) => {
    const fields = section.fields;
    const renderedFields = [];
    const sectionDynamicFields = dynamicFields[section.id] || [];

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const nextField = fields[i + 1];

      // Xử lý trường hợp đặc biệt cho layout 2 cột
      if (
        (field.name === "soLuong" && nextField?.name === "donViTinh") ||
        (field.name === "thoiGianBaoHanh" && nextField?.name === "donViTinh2")
      ) {
        renderedFields.push(
          <div
            key={`${field.idField}-${nextField.idField}`}
            className={style.formDivTow}
          >
            {renderField(field, i, section.id)}
            {renderField(nextField, i + 1, section.id)}
          </div>
        );
        i++; // Skip next field vì đã render
      } else {
        renderedFields.push(renderField(field, i, section.id));
      }
    }

    // Thêm dynamic fields nếu có
    if (sectionDynamicFields.length > 0) {
      renderedFields.push(
        <div key={`dynamic-${section.id}`}>
          <div
            style={{
              marginTop: "16px",
              paddingTop: "16px",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <Text
              size={500}
              weight="semibold"
              style={{ marginBottom: "12px", display: "block" }}
            >
              Thông tin chi tiết
            </Text>
            {sectionDynamicFields.map((dynamicField) =>
              renderDynamicField(dynamicField)
            )}
          </div>
        </div>
      );
    }

    return renderedFields;
  };

  return (
    <div className={style.addnewAsset}>
      <Dialog open={true}>
        <DialogSurface className={style.editWdith}>
          <DialogTitle style={{padding: '20px'}}>Thêm mới tài sản</DialogTitle>
          <DialogBody className={style.formAdd}>
            <DialogContent>
              <Accordion
                openItems={openItems}
                onToggle={handleToggle}
                multiple
                collapsible
              >
                {formConfig.map((section, sectionIndex) => (
                  <AccordionItem
                    key={section.id}
                    value={(sectionIndex + 1).toString()}
                    className={
                      sectionIndex > 0 ? style.formAccordionItem : undefined
                    }
                  >
                    <AccordionHeader
                      className={style.formSection}
                      expandIconPosition="end"
                      size="extra-large"
                    >
                      <h4 className={style.formSectionTitle}>{section.name}</h4>
                    </AccordionHeader>
                    <AccordionPanel className={style.formContent}>
                      <div style={{padding: '0 8px 0 20px'}}>{renderSection(section, sectionIndex)}</div>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </DialogContent>
            <DialogActions className={style.Formbutton}>
                <DialogTrigger disableButtonEnhancement>
                  <Button
                    icon={<ChevronLeft16Regular />}
                    className={style.closeBtn}
                    appearance="secondary"
                    onClick={() => nav("/asset/list")}
                  >
                    Quay lại
                  </Button>
                </DialogTrigger>
                <Button appearance="primary" onClick={() => addNewItem()}>
                  Thêm mới
                </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
};

export default AddNewAsset;
