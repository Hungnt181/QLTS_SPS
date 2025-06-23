import subToolBarStyle from "../../styles/subToolBar/subToolBar.ts";
import {Button, Field, SearchBox, type SearchBoxProps} from "@fluentui/react-components";
import {
    Add20Regular,
    ArrowExport16Regular,
} from "@fluentui/react-icons";

type SubToolBarInventoryProps = {
    onOpenAdd: () => void
    searchProps?: SearchBoxProps
}

const InventorySubToolBar = ({ onOpenAdd, searchProps = {}} : SubToolBarInventoryProps) => {
    const style = subToolBarStyle()
    return (
        <div className={style.subToolBar}>
            <div className={style.subToolBarStart}>
                <div>
                    <Button appearance="primary" icon={<Add20Regular/>} onClick={onOpenAdd}>
                        Lập lịch kiểm kê
                    </Button>
                </div>
            </div>
            <div className={style.subToolBarEnd}>
                <div>
                    <Button className={style.subToolBarEndBtnNoBorder} icon={<ArrowExport16Regular style={{ transform: "rotate(90deg)" }} />}>Xuất File</Button>
                </div>

                <div>
                    <Field className={style.inPutSearch}>
                        <SearchBox {...searchProps} className={style.SearchBox}
                                    placeholder={searchProps.placeholder ?? "Tìm kếm"}
                        />
                    </Field>
                </div>
            </div>
        </div>
    );
};

export default InventorySubToolBar;