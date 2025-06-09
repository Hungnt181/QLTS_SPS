import subToolBarStyle from "../../styles/subToolBar/subToolBar.ts";
import { Field, SearchBox, type SearchBoxProps} from "@fluentui/react-components";

type SubToolBarMasterDataProps = {
    searchProps?: SearchBoxProps;
}
const SubToolBarFormConfig = ({ searchProps= {}}:
                              SubToolBarMasterDataProps
) => {
    const style = subToolBarStyle()
    //tạo state cho nút button
    return (
        <div className={style.subToolBar}>
            <div className={style.subToolBarStart}>
                <div>

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

export default SubToolBarFormConfig;