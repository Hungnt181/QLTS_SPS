import { useNavigate, useParams } from "react-router-dom";
import type { TypeTaiSan } from "../../../types/table";
import { Button, Label, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, Toolbar, ToolbarButton } from "@fluentui/react-components";
import { useMediaQuery } from "react-responsive"
import { BoxEdit20Regular, EditSettings20Regular, History20Regular, MoreHorizontal20Regular, PersonArrowLeft20Regular, PersonArrowRight20Regular } from "@fluentui/react-icons";
import AssetDetailNewStyle from "../../../styles/listPages/assetDetail/assetDetailNew";
import { useEffect, useState } from "react";

interface Props {
    asset: TypeTaiSan | null;
    onAction: (actionLabel: string) => void
}

export const AssetActionToolbar = ({ asset, onAction }: Props) => {
    const nav = useNavigate()
    const { id } = useParams()
    const style = AssetDetailNewStyle()
    const [isDisabled, setIsDisabled] = useState(false)
    const isSmallScreen = useMediaQuery({ maxWidth: 1300 })

    useEffect(() => {
        if (asset?.nguoiSuDung != "") {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [asset]);

    const actions = [
        {
            label: "Thu hồi",
            icon: <PersonArrowLeft20Regular />,
            disabled: !isDisabled,
            // onClick: () => nav(`/asset/list/detail/${id}/revoke`)
        },
        {
            label: "Cấp phát",
            icon: <PersonArrowRight20Regular />,
            disabled: isDisabled,
            // onClick: () => nav(`/asset/list/detail/${id}/assign`)
        },
        {
            label: "Chỉnh sửa",
            icon: <EditSettings20Regular />,
            onClick: () => { }
        },
        {
            label: "Sửa chữa",
            icon: <BoxEdit20Regular />,
            disabled: asset?.trangThai === "Đang sửa chữa",
            // onClick: () => nav(`/asset/list/detail/${id}/repair`)
        },
        {
            label: "Bảo dưỡng",
            icon: <History20Regular />,
            disabled: ["Đang sửa chữa", "Đang bảo dưỡng"].includes(asset?.trangThai ?? ""),
            // onClick: () => nav(`/asset/list/detail/${id}/maintenance`)
        },
    ]

    const renderActions = () =>
        actions.map((a) =>
            isSmallScreen ? (
                <MenuItem
                    key={a.label}
                    icon={a.icon}
                    disabled={a.disabled}
                    onClick={() => onAction(a.label)}
                >
                    {a.label}
                </MenuItem>
            ) : (
                <Button
                    key={a.label}
                    icon={a.icon}
                    disabled={a.disabled}
                    onClick={() => onAction(a.label)}
                    className={style.btn}
                    size="small"
                    style={{ marginRight: 8 }}
                >
                    {a.label}
                </Button>
            )
        )

    if (isSmallScreen) {
        return (
            <Menu>
                <MenuTrigger>
                    <Button className={style.btn} icon={<MoreHorizontal20Regular />} />
                </MenuTrigger>
                <MenuPopover>
                    <MenuList>
                        {actions.map((a) => (
                            <MenuItem
                                key={a.label}
                                icon={a.icon}
                                disabled={a.disabled}
                                onClick={a.onClick}
                            >
                                {a.label}
                            </MenuItem>
                        ))}
                    </MenuList>
                </MenuPopover>
            </Menu>
        )
    }

    return (
        <>
            {/* {actions.map((a) => (
                <Button
                    className={style.btn}
                    key={a.label}
                    size="small"
                    icon={a.icon}
                    disabled={a.disabled}
                    onClick={a.onClick}
                    style={{ marginRight: 8 }}
                >
                    {a.label}
                </Button>
            ))} */}
            {renderActions()}
        </>
    )
}
