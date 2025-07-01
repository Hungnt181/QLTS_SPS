import toolBarStyle from "../../styles/toolBar/toolBar.ts";
import {Image, Tab, TabList} from "@fluentui/react-components";
import logo from "../../assets/Images/logo.png"
import type {TabListProps} from "@fluentui/react-components";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


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

const ToolBar = ({tabListProps,titleToolBar}: ToolBarTab, ) => {
    const style = toolBarStyle()
    const tabToolBar = titleToolBar?.current || [];
    // Tạo mapping giữa URL prefix và item value (sắp xếp theo độ dài giảm dần)
    const URL_PREFIX_TO_ITEM_MAP: Array<{prefix: string, value: string}> = [
        // Routes dài hơn phải đặt trước để match chính xác
        { prefix: '/asset/settings/master-data/group', value: 'group' },
        { prefix: '/asset/settings/master-data/type', value: 'type' },
        { prefix: '/asset/settings/master-data/status', value: 'status' },
        { prefix: '/asset/settings/master-data/state', value: 'state' },
        { prefix: '/asset/settings/master-data/add', value: 'add' },
    ];

// Function để lấy item value từ current URL (sử dụng prefix matching)
    const getSelectedItemFromUrl = (pathname: string): string => {
        // Tìm prefix đầu tiên khớp với pathname
        const matchedItem = URL_PREFIX_TO_ITEM_MAP.find(item =>
            pathname.startsWith(item.prefix)
        );

        return matchedItem?.value || 'group'; // Default là '1' nếu không tìm thấy
    };
    const location = useLocation();

    // Khởi tạo selectedItem từ URL hiện tại
    const [selectedItem, setSelectedItem] = useState(() =>
        getSelectedItemFromUrl(location.pathname)
    );
    useEffect(() => {
        const currentItem = getSelectedItemFromUrl(location.pathname);
        setSelectedItem(currentItem);
    }, [location.pathname]);
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
                    <TabList {...tabListProps} className={style.tabListItem} defaultSelectedValue={selectedItem} >
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

export default ToolBar;