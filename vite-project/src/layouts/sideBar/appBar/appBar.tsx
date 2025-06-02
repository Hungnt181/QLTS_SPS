import appBarStyle from "../../../styles/listPages/siderBar/appBar/appBar.ts";
import {
    ArrowClockwise24Filled,
    ArrowClockwise24Regular, DataBarVerticalAscending24Filled,
    DataBarVerticalAscending24Regular, DocumentBulletListMultiple24Filled,
    DocumentBulletListMultiple24Regular, WebAsset24Filled, WebAsset24Regular
} from "@fluentui/react-icons";
import {useNavigate, useParams} from "react-router-dom";
import {mergeClasses} from "@fluentui/react-components";
import {useState} from "react";

const AppBar = () => {
    const style = appBarStyle()
    const nav = useNavigate()
    const {AssetID} = useParams()
    const [activeItem, setActiveItem] = useState<string | null>(AssetID || null);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const menu = [
        {
            icon: [<DataBarVerticalAscending24Regular/>, <DataBarVerticalAscending24Filled/>],
            title: "Tổng quan",
            url: "tongquan",
            action: () => {
                setActiveItem("tongquan");
                nav("/tongquan")
            },
        },
        {
            icon: [<ArrowClockwise24Regular/>, <ArrowClockwise24Filled/>],
            title: "Quy trình",
            url: "quytrinh",
            action: () => {
                setActiveItem("quytrinh");
                nav("/quytrinh")
            },
        },
        {
            icon: [<DocumentBulletListMultiple24Regular/>, <DocumentBulletListMultiple24Filled/>],
            title: "Công việc",
            url: "congviec",
            action: () => {
                setActiveItem("congviec");
                nav("/congviec")
            },
        },
        {
            icon: [<WebAsset24Regular/>,<WebAsset24Filled/>],
            title: "Tài sản",
            url: "taisan",
            action: () => {
                setActiveItem("taisan");
                nav("/taisan")
            },
        },
        {
            icon: [<DataBarVerticalAscending24Regular/>, <DataBarVerticalAscending24Filled/>],
            title: "Tổng quan",
            url: "tongquan1",
            action: () => {
                setActiveItem("tongquan1");
                nav("/tongquan1")
            },
        },
        {
            icon: [<ArrowClockwise24Regular/>, <ArrowClockwise24Filled/>],
            title: "Quy trình",
            url: "quytrinh1",
            action: () => {
                setActiveItem("quytrinh1");
                nav("/quytrinh1")
            },
        },
        {
            icon: [<DocumentBulletListMultiple24Regular/>, <DocumentBulletListMultiple24Filled/>],
            title: "Công việc",
            url: "congviec1",
            action: () => {
                setActiveItem("congviec1");
                nav("/congviec1")
            },
        }
    ]
    return (
        <div className={style.appBar}>
            {menu.map((item, index) => (
                <div key={index}
                     className={mergeClasses(style.appBarItem, item?.url == AssetID ? style.appBarItemActiveParent : '')}
                     onClick={item?.action}
                     onMouseEnter={() => setHoveredItem(item.url)}
                     onMouseLeave={() => setHoveredItem(null)}
                >
                    <div className={mergeClasses(style.appBarItemIcon, item?.url == AssetID ? style.appBarItemActive : '')}>
                        {hoveredItem === item.url || activeItem === item.url
                            ? item.icon[1]
                            : item.icon[0]}
                    </div>
                    <div  className={mergeClasses(style.appBarItemTitle, item?.url == AssetID ? style.appBarItemActive : '')}>{item.title}</div>
                </div>
            ))}
        </div>
    );
};

export default AppBar;