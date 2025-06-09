import menuBarStyle from "../../../styles/listPages/siderBar/menuBar/menuBar.ts";
import {
    Box20Filled,
    Box20Regular,
    BoxEdit20Filled,
    BoxEdit20Regular, Clipboard3Day20Filled, Clipboard3Day20Regular,
    Compose20Regular, DatabaseMultiple20Filled, DatabaseMultiple20Regular, DocumentData20Filled, DocumentData20Regular,
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
    Nav, NavCategory, NavCategoryItem,
    type NavCategoryItemProps,
    type NavCategoryProps, NavItem, NavSubItem, NavSubItemGroup,
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
    navItem?: {
        value: string;
        icon?: JSX.Element[];
        children: string;
        href?: string;
        action?: () => void;
    };
};


const MenuBar = ({tooltipProps}: MenuBar) => {
    const style = menuBarStyle()

    const [selectedItem, setSelectedItem] = useState("12")
    const nav = useNavigate()

    // Array of menu bar items
    const splitNavItemNestedProps: SplitNavItemNestedProps[] = [
        {
            splitNavItem: {
                navItem: {
                    value: "1", icon: [<Grid20Regular/>, <Grid20Filled/>], children: "Tổng quan",
                    action: () => {
                        nav("/taisan/dashboard");
                        setSelectedItem("1")
                    }
                },
            },
        },
        {
            splitNavItem: {
                navCategory: {value: "2"},
                navCategoryItem: {icon: [<Box20Regular/>, <Box20Filled/>], children: "Tài sản"},
                navSubItems: [
                    {
                        navItem: {
                            value: "11", children: "Tài sản của tôi",
                            icon: [<DatabaseMultiple20Regular/>, <DatabaseMultiple20Filled/>],
                            action: () => {
                                nav("/taisan/my-asset");
                                setSelectedItem("11")
                            }
                        }
                    },
                    {
                        navItem: {
                            value: "12",
                            children: "Danh sách quản lý",
                            icon: [<DocumentData20Regular/>, <DocumentData20Filled/>],
                            action: () => {
                                nav("/taisan/list");
                                setSelectedItem("12")
                            }
                        }
                    },
                ],
            },
        },
        {
            splitNavItem: {
                navItem: {
                    value: "3",
                    icon: [<History20Regular/>, <History20Filled/>],
                    children: "Bảo dưỡng",
                    action: () => {
                        nav("/taisan/maintenance");
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
                    action: () => {
                        nav("/taisan/fix");
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
                    action: () => {
                        nav("/taisan/liquidation");
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
                    action: () => {
                        nav("/taisan/inventory");
                        setSelectedItem("6")
                    }
                },
            },
        },
        {
            splitNavItem: {
                navCategory: {value: "7"},
                navCategoryItem: {icon: [<Settings20Regular/>, <Settings20Filled/>], children: "Cấu hình"},
                navSubItems: [
                    {
                        navItem: {
                            value: "8", children: "Master Data",
                            icon: [<DatabaseMultiple20Regular/>, <DatabaseMultiple20Filled/>],
                            action: () => {
                                nav("/taisan/settings/master-data");
                                setSelectedItem("8")
                            }
                        }
                    },
                    {
                        navItem: {
                            value: "9",
                            children: "Cấu hình bểu mẫu",
                            icon: [<DocumentData20Regular/>, <DocumentData20Filled/>],
                            action: () => {
                                nav("/taisan/settings/form-config");
                                setSelectedItem("9")
                            }
                        }
                    },
                    {
                        navItem: {
                            value: "10",
                            children: "Thông tin nâng cao",
                            icon: [<Clipboard3Day20Regular/>, <Clipboard3Day20Filled/>],
                            action: () => {
                                nav("/taisan/settings/advanced-info");
                                setSelectedItem("10")
                            }
                        }
                    },
                ],
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
                    defaultSelectedCategoryValue="2"
                >
                    {splitNavItemNestedProps.map((item: SplitNavItemNestedProps, index) =>
                        item?.splitNavItem?.navCategory ? (
                            <NavCategory value={ item?.splitNavItem?.navCategory?.value} key={ item?.splitNavItem?.navCategory?.value}>
                                <NavCategoryItem icon={
                                    item?.splitNavItem?.navCategoryItem?.icon[0]
                                }  >
                                    { item?.splitNavItem?.navCategoryItem?.children}
                                </NavCategoryItem>

                                <NavSubItemGroup>
                                    {item?.splitNavItem?.navSubItems?.map((subItem, subIndex) => (
                                        <NavSubItem
                                            key={subItem?.navItem?.value}
                                            value={subItem?.navItem?.value}
                                            onClick={subItem?.navItem?.action}
                                        >
                                            {subItem.navItem.children}
                                        </NavSubItem>
                                    ))}
                                </NavSubItemGroup>
                            </NavCategory>
                        ) : (
                            <NavItem
                                key={item?.splitNavItem?.navItem?.value}
                                href={item?.splitNavItem?.navItem?.href}
                                icon={
                                    selectedItem == item?.splitNavItem?.navItem?.value
                                        ? item?.splitNavItem?.navItem?.icon[1]
                                        : item?.splitNavItem?.navItem?.icon[0]
                                }
                                value={item?.splitNavItem?.navItem?.value}
                                onClick={item?.splitNavItem?.navItem?.action}
                                className={mergeClasses(
                                    style.menuBarItem,
                                    selectedItem == item?.splitNavItem?.navItem?.value
                                        ? style.menuBarItemActive
                                        : ""
                                )}
                            >
                                {item?.splitNavItem?.navItem?.children}
                            </NavItem>
                        )
                    )}
                </Nav>
            </div>
        </div>
    );
};

export default MenuBar;