import filterDrawStyle from "../../styles/filterDraw/filterDraw.ts";
import {
    Avatar,
    Button,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerHeaderTitle,
    Dropdown, Label,
    Option,
    OverlayDrawer,
    useRestoreFocusSource,
    Checkbox
} from "@fluentui/react-components";
import {Dismiss24Regular} from "@fluentui/react-icons";
import { Slider } from "@fluentui/react";
import {
    TagPicker,
    TagPickerList,
    TagPickerInput,
    TagPickerControl,
    // TagPickerProps,
    TagPickerOption,
    TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Field } from "@fluentui/react-components";
import * as React from "react";
const FilterDraw = ({isOpen, onClose}: { isOpen: boolean; onClose: () => void }) => {
    const style = filterDrawStyle()
    //
    const restoreFocusSourceAttributes = useRestoreFocusSource();
    //
    const options = [
        "Nguyễn Văn Anh",
        "Trần Văn Nam",
        "Lê Dương Bảo Lâm",
        "Nguyễn Thanh Tùng",
        "Nguyễn Minh Hiếu",
        "Ngô Kiến Huy",
        "Triệu Hoàng Duy",
        "Trịnh Trần Phương Tuấn",
    ];
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
    const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
        if (data.value === "no-options") {
            return;
        }
        setSelectedOptions(data.selectedOptions);
    };
    const tagPickerOptions = options.filter(
        (option) => !selectedOptions.includes(option)
    );
    //
    const [selectedOptions2, setSelectedOptions2] = React.useState<string[]>([]);
    const onOptionSelect2: TagPickerProps["onOptionSelect"] = (e, data) => {
        if (data.value === "no-options") {
            return;
        }
        setSelectedOptions2(data.selectedOptions);
    };
    const tagPickerOptions2 = options.filter(
        (option) => !selectedOptions2.includes(option)
    );
    //
    const [option1, setOption1] = React.useState(false);
    const [option2, setOption2] = React.useState(true);
    const [option3, setOption3] = React.useState(false);

    return (
        <div className={style.filterDraw}>
            <OverlayDrawer
                as="aside"
                position="end"
                {...restoreFocusSourceAttributes}
                open={isOpen}
                onOpenChange={(_, {open}) => {
                    if (!open) onClose();
                }}
            >
                <DrawerHeader>
                    <DrawerHeaderTitle
                        action={
                            <Button
                                appearance="subtle"
                                aria-label="Close"
                                icon={<Dismiss24Regular/>}
                                onClick={onClose}
                            />
                        }
                    >
                        Tìm kiếm
                    </DrawerHeaderTitle>
                </DrawerHeader>

                <DrawerBody className={style.drawerBody}>
                    <div className={style.drawerBodyItem}>
                        <label className={style.itemLabel}>Nhóm tài sản</label>
                        <Dropdown placeholder="Nhóm tài sản" multiselect={true} className={style.itemInput}>
                            <Option>Công cụ dụng cụ</Option>
                            <Option>Tài sản cố định hữu hình</Option>
                            <Option>Tài sản cố định vô hình</Option>
                        </Dropdown>
                    </div>
                    <div className={style.drawerBodyItem}>
                        <label className={style.itemLabel}>Loại tài sản</label>
                        <Dropdown placeholder="Loại tài sản" multiselect={true} className={style.itemInput}>
                            <Option>Thết bị máy móc</Option>
                            <Option>Phương tiện vận chuyển</Option>
                            <Option>Dụng cụ lao động</Option>
                            <Option>Dụng cụ vệ sinh</Option>
                        </Dropdown>
                    </div>
                    <div className={style.drawerBodyItem}>
                        <label className={style.itemLabel}>Danh mục tài sản</label>
                        <Dropdown placeholder="Danh mục tài sản" multiselect={true} className={style.itemInput}>
                            <Option>Thiết bị máy tính</Option>
                            <Option>Thiết bị máy chiếu</Option>
                            <Option>Hệ thống điều hòa</Option>
                        </Dropdown>
                    </div>
                    <div className={style.drawerBodyItem}>
                        <label className={style.itemLabel}>Giá trị</label>
                        <div >
                            <Slider min={0} max={300} className={style.itemSlider}/>
                            <Label>0-300 VNĐ</Label>
                        </div>
                    </div>
                    <div className={style.drawerBodyItem}>
                        <label className={style.itemLabel}>Địa điểm</label>
                        <Dropdown placeholder="Địa điểm" multiselect={true} className={style.itemInput}>
                            <Option>Văn phòng Hà Nội</Option>
                            <Option>Văn phòng Đà Nẵng</Option>
                        </Dropdown>
                    </div>
                    <div className={style.drawerBodyItem}>
                        <Field label="Người quản lý" style={{ maxWidth: 400 }}>
                            <TagPicker
                                onOptionSelect={onOptionSelect}
                                selectedOptions={selectedOptions}
                            >
                                <TagPickerControl>
                                    <TagPickerGroup aria-label="Selected Employees">
                                        {selectedOptions.map((option) => (
                                            <Tag
                                                key={option}
                                                shape="rounded"
                                                media={<Avatar aria-hidden name={option} color="colorful" />}
                                                value={option}
                                            >
                                                {option}
                                            </Tag>
                                        ))}
                                    </TagPickerGroup>
                                    <TagPickerInput aria-label="Select Employees" />
                                </TagPickerControl>
                                <TagPickerList>
                                    {tagPickerOptions.length > 0 ? (
                                        tagPickerOptions.map((option) => (
                                            <TagPickerOption
                                                media={
                                                    <Avatar
                                                        shape="square"
                                                        aria-hidden
                                                        name={option}
                                                        color="colorful"
                                                    />
                                                }
                                                value={option}
                                                key={option}
                                            >
                                                {option}
                                            </TagPickerOption>
                                        ))
                                    ) : (
                                        <TagPickerOption value="no-options">
                                            No options available
                                        </TagPickerOption>
                                    )}
                                </TagPickerList>
                            </TagPicker>
                        </Field>
                    </div>
                    <div className={style.drawerBodyItem}>
                        <label className={style.itemLabel}>Trạng thái</label>
                        <Checkbox
                            checked={
                                option1 && option2 && option3
                                    ? true
                                    : !(option1 || option2 || option3)
                                        ? false
                                        : "mixed"
                            }
                            onChange={(_ev, data) => {
                                setOption1(!!data.checked);
                                setOption2(!!data.checked);
                                setOption3(!!data.checked);
                            }}
                            label="Tất cả trạng thái"
                        />

                        <Checkbox
                            checked={option1}
                            onChange={() => setOption1((checked) => !checked)}
                            label="Đang sử dụng"
                        />
                        <Checkbox
                            checked={option2}
                            onChange={() => setOption2((checked) => !checked)}
                            label="Chưa sử dụng"
                        />
                        <Checkbox
                            checked={option3}
                            onChange={() => setOption3((checked) => !checked)}
                            label="Đang bảo dưỡng"
                        />
                        <Checkbox
                            checked={option3}
                            onChange={() => setOption3((checked) => !checked)}
                            label="Đang sửa chữa"
                        />
                    </div>
                    <div className={style.drawerBodyItem}>
                        <Field label="Người sử dụng" >
                            <TagPicker
                                onOptionSelect={onOptionSelect2}
                                selectedOptions={selectedOptions2}
                            >
                                <TagPickerControl>
                                    <TagPickerGroup aria-label="Selected Employees">
                                        {selectedOptions2.map((option) => (
                                            <Tag
                                                key={option}
                                                shape="rounded"
                                                media={<Avatar aria-hidden name={option} color="colorful" />}
                                                value={option}
                                            >
                                                {option}
                                            </Tag>
                                        ))}
                                    </TagPickerGroup>
                                    <TagPickerInput aria-label="Select Employees" />
                                </TagPickerControl>
                                <TagPickerList>
                                    {tagPickerOptions.length > 0 ? (
                                        tagPickerOptions2.map((option) => (
                                            <TagPickerOption
                                                media={
                                                    <Avatar
                                                        shape="square"
                                                        aria-hidden
                                                        name={option}
                                                        color="colorful"
                                                    />
                                                }
                                                value={option}
                                                key={option}
                                            >
                                                {option}
                                            </TagPickerOption>
                                        ))
                                    ) : (
                                        <TagPickerOption value="no-options">
                                            No options available
                                        </TagPickerOption>
                                    )}
                                </TagPickerList>
                            </TagPicker>
                        </Field>
                    </div>
                </DrawerBody>

                <DrawerFooter className={style.drawerFooter}>
                    <Button onClick={onClose}>Đặt lại</Button>
                    <Button appearance="primary" onClick={onClose}>Tìm kiếm</Button>
                </DrawerFooter>
            </OverlayDrawer>


        </div>
    );
};

export default FilterDraw;
