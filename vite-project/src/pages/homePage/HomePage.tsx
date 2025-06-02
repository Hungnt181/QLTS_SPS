import listPageStyle from "../../styles/listPages/listPage.ts";
import Header from "../../layouts/header/header.tsx";
import {Outlet} from "react-router-dom";
import AppBar from "../../layouts/sideBar/appBar/appBar.tsx";

const HomePage = () => {
    const style = listPageStyle()
    return <>
        <div>
            <Header/>
            {/*body*/}
            <div className={style.body}>
                <div>
                    {/*    sideBar*/}
                    <AppBar></AppBar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    </>
};

export default HomePage;