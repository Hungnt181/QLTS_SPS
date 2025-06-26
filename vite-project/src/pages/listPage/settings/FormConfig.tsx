import masterDataStyle from "../../../styles/listPages/settings/masterData.ts";
import ToolBar from "../../../layouts/toolBar/toolBar.tsx";
import {Outlet} from "react-router-dom";
import {useRef} from "react";
import SubToolBarFormConfig from "../../../layouts/subToolBar/SubToolBarFormConfig.tsx";

//interface cho titleToolBar
type TabToolBar = {
    value: string;
    url: string;
    label: string;
    icon?: React.ReactNode;
    action?: () => void;
}
//interface cho subToolBar

const FormConfig = () => {
    const style = masterDataStyle()
    //titelToolBar
    const titleToolBar = useRef<TabToolBar[]>([
        // {value: "danhSach", url: "#", label: "Danh sách"},
        // {value: "add", url: "#", label: "", icon: <Add20Regular/>},
    ]);

    // state cho Filter

    return (
        <div className={style.masterData}>
            <ToolBar titleToolBar={titleToolBar}></ToolBar>
            <Outlet></Outlet>
        </div>
    );
};

export default FormConfig;