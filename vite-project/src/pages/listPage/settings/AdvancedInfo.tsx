//interface cho titleToolBar
import masterDataStyle from "../../../styles/listPages/settings/masterData.ts";
import ToolBar from "../../../layouts/toolBar/toolBar.tsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useRef} from "react";
import SubToolBarMasterData from "../../../layouts/subToolBar/subToolBarMasterData.tsx";
import TableAdvancedInfo from "../../../layouts/tableList/tableAdvancedInfo.tsx";
type TabToolBar = {
    value: string;
    url: string;
    label: string;
    icon?: React.ReactNode;
    action?: () => void;
}
const AdvancedInfo = () => {
    const style = masterDataStyle()
    const nav = useNavigate();
    //titelToolBar
    const titleToolBar = useRef<TabToolBar[]>([
        {value: "danhSach", url: "#", label: "Danh sách"},
        // {value: "add", url: "#", label: "", icon: <Add20Regular/>},
    ]);

    const onOpenAdd = () => {
        nav(`/taisan/settings/advanced-info/w-create`);
    }
    // state cho Filter

    return (
        <div className={style.masterData}>
            <ToolBar titleToolBar={titleToolBar}></ToolBar>
            <SubToolBarMasterData onOpenAdd={onOpenAdd} ></SubToolBarMasterData>
            <TableAdvancedInfo></TableAdvancedInfo>
            <Outlet></Outlet>
        </div>
    );
};

export default AdvancedInfo;