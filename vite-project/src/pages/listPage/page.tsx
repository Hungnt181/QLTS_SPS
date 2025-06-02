import Header from "../../layouts/header/header.tsx";
import SideBar from "../../layouts/sideBar/sideBar.tsx";
import {Outlet} from "react-router-dom";
import listPageStyle from "../../styles/listPages/listPage.ts";

const ListPages = () => {
    const style = listPageStyle()
    return <>
        <div>
            <Header/>
            {/*body*/}
            <div className={style.body}>
                <div>
                    {/*    sideBar*/}
                    <SideBar/>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    </>
};

export default ListPages;