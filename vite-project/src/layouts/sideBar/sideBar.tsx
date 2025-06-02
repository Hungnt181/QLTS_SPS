import AppBar from "./appBar/appBar.tsx";
import MenuBar from "./menuBar/menuBar.tsx";
import siderBarStyle from "../../styles/listPages/siderBar/siderBar.ts";

const SideBar = () => {
    const style = siderBarStyle()
    return (
        <div className={style.siderBar}>
            <div><AppBar /></div>
            <div><MenuBar /></div>
        </div>
    );
};

export default SideBar;