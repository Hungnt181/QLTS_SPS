import ToolBar from "../../../layouts/toolBar/toolBar.tsx";
import assetListStyle from "../../../styles/listPages/assetList/asstList.ts";
import SubToolBar from "../../../layouts/subToolBar/subToolBar.tsx";
import TableList from "../../../layouts/tableList/tableList.tsx";
import FilterDraw from "../../../layouts/filterDraw/filterDraw.tsx";
import {useRef, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";

//interface cho titleToolBar
type TabToolBar = {
    value: string;
    url: string;
    label: string;
    icon?: React.ReactNode;
    action?: () => void;

}
const AssetList = () => {
    const style = assetListStyle();
    const nav = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
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
    // state cho Form Add New Asset
    // const [open, setOpen] = useState(false);
    const onOpenAdd = () => {
        nav("/taisan/list/w-create");
    }

    return (
        <div className={style.assetList}>
            <ToolBar titleToolBar={titleToolBar}></ToolBar>
            <SubToolBar onOpen={onOpen} onOpenAdd={onOpenAdd}></SubToolBar>
            <TableList></TableList>
            <FilterDraw isOpen={isOpen} onClose={onClose}></FilterDraw>
            <Outlet></Outlet>
        </div>
    );
};

export default AssetList;