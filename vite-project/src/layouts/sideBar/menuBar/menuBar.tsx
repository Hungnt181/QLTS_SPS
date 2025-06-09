import menuBarStyle from "../../../styles/listPages/siderBar/menuBar/menuBar.ts";
import {
    Box20Filled,
    Box20Regular,
    BoxEdit20Filled,
    BoxEdit20Regular,
    Compose20Regular,
    DocumentEdit20Filled,
    DocumentEdit20Regular,
    Filter20Regular,
    Grid20Filled,
    Grid20Regular,
    History20Filled,
    History20Regular,
    Settings20Filled,
    Settings20Regular,
    Warning20Filled,
    Warning20Regular
} from "@fluentui/react-icons";
import {
    Nav,
    type NavCategoryItemProps,
    type NavCategoryProps, NavItem,
    type SplitNavItemProps,
} from "@fluentui/react-nav-preview";

import {
    mergeClasses,
    Tooltip,
    type TooltipProps
} from "@fluentui/react-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

type MenuBar = {
    tooltipProps?: TooltipProps;
}

type SplitNavItemNestedProps = {
    splitNavItem?: SplitNavItemProps;
    navCategory?: NavCategoryProps;
    navCategoryItem?: NavCategoryItemProps;
    navSubItems?: SplitNavItemProps[];
};


const MenuBar = ({tooltipProps}: MenuBar) => {
    const style = menuBarStyle()
    const [selectedItem, setSelectedItem] = useState("2")
    const nav = useNavigate()

    // Array of menu bar items
    const splitNavItemNestedProps: SplitNavItemNestedProps[] = [
        {
            splitNavItem: {
                navItem: {
                    value: "1", icon: [<Grid20Regular/>, <Grid20Filled/>], children: "Tổng quan",
                    acction: () => {
                        nav("/taisan/dasboard");
                        setSelectedItem("1")
                    }
                },
            },
        },
        {
            splitNavItem: {
                navItem: {
                    value: "2", icon: [<Box20Regular/>, <Box20Filled/>], children: "Tài sản", acction: () => {
                        nav("/taisan/list");
                        setSelectedItem("2")
                    }
                },
            },
        },
        {
            splitNavItem: {
                navItem: {
                    value: "3",
                    icon: [<History20Regular/>, <History20Filled/>],
                    children: "Bảo dưỡng",
                    acction: () => {
                        nav("/taisan/dasboard");
                        setSelectedItem("3")
                    }
                },
            },
        },
        {
            splitNavItem: {
                navItem: {
                    value: "4",
                    icon: [<BoxEdit20Regular/>, <BoxEdit20Filled/>],
                    children: "Sửa chữa",
                    acction: () => {
                        nav("/taisan/dasboard");
                        setSelectedItem("4")
                    }
                },
            },
        },
        {
            splitNavItem: {
                navItem: {
                    value: "5",
                    icon: [<Warning20Regular/>, <Warning20Filled/>],
                    children: "Mất-Hủy-Thanh lý",
                    acction: () => {
                        nav("/taisan/dasboard");
                        setSelectedItem("5")
                    }
                },
            },
        },
        {
            splitNavItem: {
                navItem: {
                    value: "6",
                    icon: [<DocumentEdit20Regular/>, <DocumentEdit20Filled/>],
                    children: "Kiểm kê",
                    acction: () => {
                        nav("/taisan/dasboard");
                        setSelectedItem("6")
                    }
                },
            },
        },
        {
            splitNavItem: {
                navItem: {
                    value: "7",
                    icon: [<Settings20Regular/>, <Settings20Filled/>],
                    children: "Cấu hình",
                    acction: () => {
                        nav("/taisan/dasboard");
                        setSelectedItem("7")
                    }
                },
                // navCategory: { value: "7" },
                // navCategoryItem: { icon: [<Settings20Regular/>,<Settings20Filled/> ], children: "Cấu hình" },
                // navSubItems: [
                //     { navItem: { value: "9", children: "Cấu hình 1", href: "#" } },
                //     { navItem: { value: "8", children: "Cấu hình 2", href: "#" } },
                // ],
            },
        },
    ];
    return (
         <div className={style.menuBar}>
            {/*Header*/}
            <div className={style.menuBarHeader}>
                <div className={style.menuBarHeaderTitle}>
                    Tài sản
                </div>
                <div className={style.menuBarHeaderIcon}>
                    <div>
                        <Tooltip content="Tìm kiếm" relationship="label" {...tooltipProps}>
                            <Filter20Regular/>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip content="Thêm mới tài sản" relationship="label" {...tooltipProps}>
                            <Compose20Regular/>
                        </Tooltip>
                    </div>
                </div>
            </div>
            {/*MenuBar Item*/}
            <div className={style.menuBarContent}>
                <Nav
                    defaultSelectedValue={selectedItem}
                    defaultSelectedCategoryValue=""
                >
                    {splitNavItemNestedProps.map((item, index) => {
                        if (!item.navCategoryItem) {
                            return (
                                <NavItem key={index} href={item?.splitNavItem?.navItem?.href}
                                         icon={selectedItem == item?.splitNavItem?.navItem?.value ? item?.splitNavItem?.navItem?.icon[1] : item?.splitNavItem?.navItem?.icon[0]}
                                         value={item?.splitNavItem?.navItem?.value}
                                         onClick={item?.splitNavItem?.navItem?.acction}
                                         className={mergeClasses(style.menuBarItem,
                                             selectedItem == item?.splitNavItem?.navItem?.value ? style.menuBarItemActive : "")}
                                >
                                    {item?.splitNavItem?.navItem?.children}
                                </NavItem>
                            );
                        }


                    })}
                </Nav>
            </div>
        </div>
    );
};

export default MenuBar;