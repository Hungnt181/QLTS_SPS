
import {Outlet} from "react-router-dom";
import listPageStyle from "../../styles/listPages/listPage.ts";
import MenuBar from "../../layouts/sideBar/menuBar/menuBar.tsx";

const ListPages = () => {
    const style = listPageStyle()
    return <>
        <div>
            {/*body*/}
            <div className={style.body}>
                <div>
                    <MenuBar></MenuBar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    </>
};

export default ListPages;