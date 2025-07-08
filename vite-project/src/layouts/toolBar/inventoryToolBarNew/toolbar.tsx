import { Image, Tab, TabList, type TabListProps } from "@fluentui/react-components"
import type React from "react"
import logo from "../../../assets/Images/logo.png"
import toolBarStyle from "../../../styles/toolBar/toolBar"

type TabToolBar = {
    value: string
    label: string
    icon?: React.ReactNode
}

type ToolBarTab = {
    tabListProps?: TabListProps
    tabs: TabToolBar[]
    selectedTab: string
    onTabChange: (value: string) => void
}

const ToolbarNew = ({ tabListProps, tabs, selectedTab, onTabChange }: ToolBarTab) => {
    const style = toolBarStyle()

    return (
        <div className={style.toolbar}>
            <div className={style.toolbarStart}>
                <Image
                className={style.toolbarStartImage}
                alt="Icon"
                src={logo}
                height={32}
                width={32} />
                <h3 className={style.toolBarStartTitle}>Kiểm kê</h3>
                <div className={style.tabList}>
                    <TabList
                        {...tabListProps}
                        selectedValue={selectedTab}
                        className={style.tabListItem}
                        onTabSelect={(_, data) => onTabChange(data.value as string)} >
                        {tabs.map((item) => (
                            <Tab value={item.value} key={item.label}>
                                {item.label}
                            </Tab>
                        ))}
                    </TabList>
                </div>
            </div>
        </div>
    )
}

export default ToolbarNew