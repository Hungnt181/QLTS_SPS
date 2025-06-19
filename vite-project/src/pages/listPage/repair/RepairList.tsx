import ToolBar from "../../../layouts/toolBar/toolBar.tsx";
import assetListStyle from "../../../styles/listPages/assetList/asstList.ts";
import FilterDraw from "../../../layouts/filterDraw/filterDraw.tsx";
import {useRef, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import SubToolBarRepair from "../../../layouts/subToolBar/SubToolBarRepair.tsx";
import TableListRepair from "../../../layouts/tableList/tableListRepair.tsx";

//interface cho titleToolBar
type TabToolBar = {
    value: string;
    url: string;
    label: string;
    icon?: React.ReactNode;
    action?: () => void;

}
const RepairList = () => {
    const style = assetListStyle();
    const nav = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);
    //titelToolBar
    const titleToolBar = useRef<TabToolBar[]>([
        {value: "danhSach", url: "#", label: "Danh sách"},
    ]);
    // state cho Filters
    const onOpen = () => {
        setIsOpen(true);
        console.log('open')
    }
    const onClose = () => {
        setIsOpen(false);
    }
    const [selectedId, setSelectedId] = useState<string | null>(null);
    //Lấy id Phiếu kiê kê
    const getID = (id:string) =>{
        setSelectedId(id)
        setDisabled(false);
    }
    // state cho Form Add New Asset
    // const [open, setOpen] = useState(false);
    const onOpenAdd = () => {
        nav(`/taisan/repair/completed/${selectedId}`);
    }

    return (
        <div className={style.assetList}>
            <ToolBar titleToolBar={titleToolBar}></ToolBar>
            <SubToolBarRepair disabled={disabled} onOpen={onOpen} onOpenAdd={onOpenAdd}></SubToolBarRepair>
            <TableListRepair getID={getID}></TableListRepair>
            <FilterDraw isOpen={isOpen} onClose={onClose}></FilterDraw>
            <Outlet></Outlet>
        </div>
    );
};

export default RepairList;