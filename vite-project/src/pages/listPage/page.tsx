
import { Outlet } from "react-router-dom";
import listPageStyle from "../../styles/listPages/listPage.ts";
import MenuBar from "../../layouts/sideBar/menuBar/menuBar.tsx";

const ListPages = () => {
    const style = listPageStyle()
    return (
        <div className={style.body}>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </div>
    )

};

export default ListPages;