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
    const [curentUrl, setCurrentUrl] = useState<string>("/asset/settings/master-data/group");
    //titelToolBar
    const titleToolBar = useRef<TabToolBar[]>([
        {value: "group", url: "/asset/settings/master-data/group", label: "Nhóm tài sản",
            action: () => {nav("/asset/settings/master-data/group")
                                setCurrentUrl("/asset/settings/master-data/group")
        }},
        {value: "type", url: "/asset/settings/master-data/type", label: "Loại tài sản",
            action: () => {nav("/asset/settings/master-data/type")
                setCurrentUrl("/asset/settings/master-data/type")
        }},
        {value: "status", url: "/asset/settings/master-data/status", label: "Tình trạng",
            action: () => {nav("/asset/settings/master-data/status")
                                setCurrentUrl("/asset/settings/master-data/status")
        }},
        {value: "state", url: "/asset/settings/master-data/state", label: "Trạng thái",
            action: () => {nav("/asset/settings/master-data/state")
                                setCurrentUrl("/asset/settings/master-data/state")
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