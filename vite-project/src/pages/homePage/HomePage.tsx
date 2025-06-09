import listPageStyle from "../../styles/listPages/listPage.ts";
import Header from "../../layouts/header/header.tsx";
import {Outlet} from "react-router-dom";
import AppBar from "../../layouts/sideBar/appBar/appBar.tsx";

const HomePage = () => {
    const style = listPageStyle()
    return <>
        <div style={{width:'100%',height:'100%'}}>
            <Header/>
            {/*body*/}
            <div className={style.body}>
                    {/*    sideBar*/}
                    <AppBar></AppBar>
                    <Outlet></Outlet>
            </div>
        </div>
    </>
};

export default HomePage;