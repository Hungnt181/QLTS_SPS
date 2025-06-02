import toolBarStyle from "../../styles/toolBar/toolBar.ts";
import {Image, Tab, TabList} from "@fluentui/react-components";
import logo from "../../assets/Images/logo.png"
import type {TabListProps} from "@fluentui/react-components";

type ToolBarTab = {
    tabListProps?: TabListProps
}
const ToolBar = ({tabListProps}: ToolBarTab) => {
    const style = toolBarStyle()
    const tabToolBar = [
        {
            value: "danhsach",
            url: "#",
            label: "Danh sách"
        },
        // {
        //     value: "nhomTS",
        //     url: "#",
        //     label: "Nhóm tài sản"
        // }
    ]
    return (
        <div className={style.toolbar}>
            <div className={style.toolbarStart}>
                <Image
                    className={style.toolbarStartImage}
                    alt="Icon"
                    src={logo}
                    height={32}
                    width={32}
                />
                <h3 className={style.toolBarStartTitle}>
                    Tài sản
                </h3>
                <div className={style.tabList}>
                    <TabList {...tabListProps} className={style.tabListItem} defaultSelectedValue={"danhsach"}>
                        {tabToolBar.map((item, index) =>
                            (
                                <Tab value={item?.value} key={index}>{item?.label}</Tab>
                            )
                        )}
                    </TabList>
                </div>
            </div>
        </div>
    );
};

export default ToolBar;