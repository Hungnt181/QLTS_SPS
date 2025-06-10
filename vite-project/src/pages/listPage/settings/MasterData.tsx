import masterDataStyle from "../../../styles/listPages/settings/masterData.ts";
import ToolBar from "../../../layouts/toolBar/toolBar.tsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import {Add20Regular} from "@fluentui/react-icons";
import SubToolBarMasterData from "../../../layouts/subToolBar/subToolBarMasterData.tsx";

//interface cho titleToolBar
type TabToolBar = {
    value: string;
    url: string;
    label: string;
    icon?: React.ReactNode;
    action?: () => void;

}
//interface cho subToolBar

const MasterData = () => {
    const style = masterDataStyle()
    const nav = useNavigate();
    const [curentUrl, setCurrentUrl] = useState<string>("/taisan/settings/master-data/group");
    //titelToolBar
    const titleToolBar = useRef<TabToolBar[]>([
        {value: "nhomTaiSan", url: "/taisan/settings/master-data/group", label: "Nhóm tài sản",
            action: () => {nav("/taisan/settings/master-data/group")
                                setCurrentUrl("/taisan/settings/master-data/group")
        }},
        {value: "loaiTaiSan", url: "/taisan/settings/master-data/type", label: "Loại tài sản",
            action: () => {nav("/taisan/settings/master-data/type")
                setCurrentUrl("/taisan/settings/master-data/type")
        }},
        {value: "tinhTrang", url: "/taisan/settings/master-data/status", label: "Tình trạng",
            action: () => {nav("/taisan/settings/master-data/status")
                                setCurrentUrl("/taisan/settings/master-data/status")
        }},
        {value: "trangThai", url: "/taisan/settings/master-data/state", label: "Trạng thái",
            action: () => {nav("/taisan/settings/master-data/state")
                                setCurrentUrl("/taisan/settings/master-data/state")
        }},
        {value: "add", url: "#", label: "", icon: <Add20Regular/>},
    ]);

    // state cho Filter
    const onOpenAdd = () => {
        nav(`${curentUrl}/w-create`);
    }
    return (
        <div className={style.masterData}>
            <ToolBar titleToolBar={titleToolBar}></ToolBar>
            <SubToolBarMasterData onOpenAdd={onOpenAdd}></SubToolBarMasterData>
            <Outlet></Outlet>
        </div>
    );
};

export default MasterData;