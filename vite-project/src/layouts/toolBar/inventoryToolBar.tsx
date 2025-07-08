import toolBarStyle from "../../styles/toolBar/toolBar.ts";
import {Image, Tab, TabList} from "@fluentui/react-components";
import logo from "../../assets/Images/logo.png"
import type {TabListProps} from "@fluentui/react-components";
import { useRef, useState } from "react";
import ToolbarNew from "./inventoryToolBarNew/toolbar.tsx";


// type TabToolBar = {
//     value: string;
//     url: string;
//     label: string;
//     icon?: React.ReactNode;
//     action?: () => void;
// }
// type ToolBarTab = {
//     tabListProps?: TabListProps;
//     titleToolBar?: React.MutableRefObject<TabToolBar[]>;
// }

// const InventoryToolBar = ({tabListProps,titleToolBar}: ToolBarTab, ) => {
//     const style = toolBarStyle()
//     const tabToolBar = titleToolBar?.current || [];

//     return (
//         <div className={style.toolbar}>
//             <div className={style.toolbarStart}>
//                 <Image
//                     className={style.toolbarStartImage}
//                     alt="Icon"
//                     src={logo}
//                     height={32}
//                     width={32}
//                 />
//                 <h3 className={style.toolBarStartTitle}>
//                     Kiểm kê
//                 </h3>
//                 <div className={style.tabList}>
//                     <TabList {...tabListProps} className={style.tabListItem} defaultSelectedValue={tabToolBar[0]?.value}>
//                         {tabToolBar.map((item:TabToolBar) => {
//                             return (
//                                 <Tab value={item?.value} key={item?.value}
//                                     onClick={item?.action}
//                                 >{item?.label}
//                                     {item?.icon ? ( <div>
//                                         {item?.icon}
//                                     </div>) : ""}</Tab>
//                             )
//                         })}
//                     </TabList>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InventoryToolBar;

const InventoryToolBar = () => {
    const [selectedTab, setSelectedTab] = useState("list")
    const tabsRef = useRef([
        {
            value: "list",
            url: "/inventory/list",
            label: "Danh sách",
            action: () => {
                console.log("danh sách")
            }
        },
    ])

    const tabListProps: TabListProps = {
        selectedValue: selectedTab,
        onTabSelect: (_,data) => {
            selectedTab: (data.value as string)
            const tab = tabsRef.current.find((t) => t.value === data.value)
            tab?.action?.() 
        },
    }

    return (
        <>
            <ToolbarNew 
                tabs={tabsRef.current}
                selectedTab={selectedTab}
                onTabChange={(value) => setSelectedTab(value)}
            />
            { selectedTab === "list"}
        </>
    )
}
export default InventoryToolBar