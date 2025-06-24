import subToolBarStyle from "../../styles/subToolBar/subToolBar.ts";
import {Button, Field, SearchBox, type SearchBoxProps} from "@fluentui/react-components";
import {
    Add20Regular, Delete20Regular,
} from "@fluentui/react-icons";

type SubToolBarMasterDataProps = {
    onOpenAdd: () => void;
    searchProps?: SearchBoxProps;
}
const SubToolBarMasterData = ({onOpenAdd, searchProps= {}}:
                              SubToolBarMasterDataProps
) => {
    const style = subToolBarStyle()
    //tạo state cho nút button
    return (
        <div className={style.subToolBar}>
            <div className={style.subToolBarStart}>
                <div>
                    <Button appearance="primary" icon={<Add20Regular/>} onClick={onOpenAdd}>
                        Thêm mới
                    </Button>
                    <Button appearance="subtle" icon={<Delete20Regular/>} className={style.marginLeft}>
                        Xóa
                    </Button>
                </div>
            </div>
            <div className={style.subToolBarEnd}>
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

export default SubToolBarMasterData;