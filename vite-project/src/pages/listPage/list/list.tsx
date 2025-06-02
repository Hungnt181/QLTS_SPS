import ToolBar from "../../../layouts/toolBar/toolBar.tsx";
import assetListStyle from "../../../styles/listPages/assetList/asstList.ts";
import SubToolBar from "../../../layouts/subToolBar/subToolBar.tsx";
import TableList from "../../../layouts/tableList/tableList.tsx";
import FilterDraw from "../../../layouts/filterDraw/filterDraw.tsx";
import {useState} from "react";
import AddNewAsset from "../../../layouts/FormAdd/formAddNewAs.tsx";
import {Outlet, useNavigate} from "react-router-dom";

const AssetList = () => {
    const style = assetListStyle();
    const nav = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    // state cho Filter
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
    // const closeAdd = () => {
    //     setOpen(false);
    // }
    return (
        <div className={style.assetList}>
            <ToolBar></ToolBar>
            <SubToolBar onOpen={onOpen} onOpenAdd={onOpenAdd}></SubToolBar>
            <TableList></TableList>
            <FilterDraw isOpen={isOpen} onClose={onClose}></FilterDraw>
            <Outlet></Outlet>
        </div>
    );
};

export default AssetList;