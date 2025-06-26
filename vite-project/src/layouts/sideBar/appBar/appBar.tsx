import appBarStyle from "../../../styles/listPages/siderBar/appBar/appBar.ts";
import {
  ArrowClockwise24Filled,
  ArrowClockwise24Regular,
  DataBarVerticalAscending24Filled,
  DataBarVerticalAscending24Regular,
  DocumentBulletListMultiple24Filled,
  DocumentBulletListMultiple24Regular,
  WebAsset24Filled,
  WebAsset24Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import { mergeClasses } from "@fluentui/react-components";
import { useState } from "react";

const AppBar = () => {
  const style = appBarStyle();
  const nav = useNavigate();

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menu = [
    {
      icon: [
        <DataBarVerticalAscending24Regular />,
        <DataBarVerticalAscending24Filled />,
      ],
      title: "Tổng quan",
      url: "/tongquan",
      action: () => {
        nav("/tongquan");
      },
    },
    {
      icon: [<ArrowClockwise24Regular />, <ArrowClockwise24Filled />],
      title: "Quy trình",
      url: "/quytrinh",
      action: () => {
        nav("/quytrinh");
      },
    },
    {
      icon: [
        <DocumentBulletListMultiple24Regular />,
        <DocumentBulletListMultiple24Filled />,
      ],
      title: "Công việc",
      url: "/congviec",
      action: () => {
        nav("/congviec");
      },
    },
    {
      icon: [<WebAsset24Regular />, <WebAsset24Filled />],
      title: "Tài sản",
      url: "/asset",
      action: () => {
        nav("/asset");
      },
    },
    // {
    //     icon: [<DataBarVerticalAscending24Regular/>, <DataBarVerticalAscending24Filled/>],
    //     title: "Tổng quan",
    //     url: "/dashboard",
    //     action: () => {
    //         nav("/dashboard")
    //     },
    // },
    // {
    //     icon: [<ArrowClockwise24Regular/>, <ArrowClockwise24Filled/>],
    //     title: "Quy trình",
    //     url: "/flow",
    //     action: () => {
    //         nav("/flow")
    //     },
    // },
    // {
    //     icon: [<DocumentBulletListMultiple24Regular/>, <DocumentBulletListMultiple24Filled/>],
    //     title: "Công việc",
    //     url: "/work",
    //     action: () => {
    //         nav("/work")
    //     },
    // }
  ];
  return (
    <div className={style.appBar}>
      {menu.map((item, index) => {
        const isActive = location.pathname.startsWith(item.url);
        return (
          <div
            key={index}
            className={mergeClasses(
              style.appBarItem,
              isActive ? style.appBarItemActiveParent : ""
            )}
            onClick={item?.action}
            onMouseEnter={() => setHoveredItem(item.url)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div
              className={mergeClasses(
                style.appBarItemIcon,
                isActive ? style.appBarItemActive : ""
              )}
            >
              {hoveredItem === item.url || isActive
                ? item.icon[1]
                : item.icon[0]}
            </div>
            <div
              className={mergeClasses(
                style.appBarItemTitle,
                isActive ? style.appBarItemActive : ""
              )}
            >
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppBar;
