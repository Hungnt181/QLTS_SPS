import formConfigDetailStyle from "../../../../styles/listPages/settings/formConfigDetail.ts";
import {
    Button,
    Card,
    CardFooter,
    CardPreview,
    Dropdown,
    type DropdownProps,
    Input,
    Label, Option,
} from "@fluentui/react-components";
import {Checkmark20Regular, ChevronLeft24Regular, Dismiss20Regular } from "@fluentui/react-icons";
import {useNavigate, useParams} from "react-router-dom";
import type {Field, FormConfigItem} from "../../../../types/table.ts";

const FormConfigDetail = (props: Partial<DropdownProps>) => {
    const style = formConfigDetailStyle();
    const nav= useNavigate();
    // lấy id từ param
    const {id} = useParams();
    const data = localStorage.getItem('data');
    const allData = data ? JSON.parse(data) : [];
    const formConfigData = allData.formConfig
    const fieldTypes: string[] = [
        'Dòng văn bản đơn',
        'Dòng văn bản đa dòng',
        'Lookup',
        'Nhập kiểu dữ liệu',
        'Số',
        'Ngày tháng',
        'Checkbox',
        'Dropdown'
    ];
    return <>
        <div className={style.formConfigDetailStyle}>
            {/*ToolBar*/}
            <div className={style.toolBar}>
                <div className={style.toolBarStart}>
                    <Button className={style.toolBarStartBtn} icon={<ChevronLeft24Regular />} onClick={()=>nav('/taisan/settings/form-config/list')}>
                        <h4 className={style.toolBarH4}>Cấu hình biểu mẫu</h4>
                    </Button>
                </div>
                <div className={style.toolBarEnd}>
                    <Button className={style.toolBarEndBtn} icon={<Dismiss20Regular/>}>Hủy</Button>
                    <Button appearance="primary" icon={<Checkmark20Regular/>}>Cập nhật cấu hình</Button>
                </div>
            </div>
            {/*Content*/}
            <div className={style.content}>
                { formConfigData.map((item : FormConfigItem)=>
                    item.id === id ? (
                        <Card className={style.contentCard} key={item.id}>
                            <div className={style.contentCardHeader}>
                                <Label className={style.contentCardHeaderWidth}>
                                    Tên nhóm biểu mẫu
                                </Label>
                                <Input
                                    className={style.contentCardHeaderWidth}
                                    readOnly={true}
                                    defaultValue={item.name}
                                />
                            </div>
                            <div>
                                Cấu hình các trường dữ liệu
                            </div>
                            {
                                item.fields.map((field :Field) =>  (
                                    <CardPreview  className={style.contentCardBody}>
                                        <div className={style.rowContentCardBody}>
                                            <div className={style.divInput}>
                                                <Input className={style.divDropdown}
                                                    defaultValue={field.label}
                                                />
                                            </div>
                                           <div className={style.divInput}>
                                               <Dropdown id={item?.name} name={item.name} value={field.type} className={style.divDropdown} {...props}>
                                                   {fieldTypes.map((type:string) => {
                                                       return (
                                                           <Option  key={type} value={type} >{type}</Option>
                                                       )
                                                   })}
                                               </Dropdown >
                                           </div>

                                        </div>

                                    </CardPreview>
                                ) )
                            }

                            <CardFooter>

                            </CardFooter>
                        </Card>
                    ) : null
                )}

            </div>
        </div>
    </>
};

export default FormConfigDetail;