import toolBarStyle from "../../styles/toolBar/toolBar.ts";
import {Image, Tab, TabList} from "@fluentui/react-components";
import logo from "../../assets/Images/logo.png"
import type {TabListProps} from "@fluentui/react-components";


type TabToolBar = {
    value: string;
    url: string;
    label: string;
    icon?: React.ReactNode;
    action?: () => void;
}
type ToolBarTab = {
    tabListProps?: TabListProps;
    titleToolBar?: React.MutableRefObject<TabToolBar[]>;
}

const DashboardToolBar = ({tabListProps,titleToolBar}: ToolBarTab, ) => {
    const style = toolBarStyle()
    const tabToolBar = titleToolBar?.current || [];

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
                    Tổng quan
                </h3>
                <div className={style.tabList}>
                    <TabList {...tabListProps} className={style.tabListItem} defaultSelectedValue={tabToolBar[0]?.value}>
                        {tabToolBar.map((item:TabToolBar) => {
                            return (
                                <Tab value={item?.value} key={item?.value}
                                    onClick={item?.action}
                                >{item?.label}
                                    {item?.icon ? ( <div>
                                        {item?.icon}
                                    </div>) : ""}</Tab>
                            )
                        })}
                    </TabList>
                </div>
            </div>
        </div>
    );
};

export default DashboardToolBar;