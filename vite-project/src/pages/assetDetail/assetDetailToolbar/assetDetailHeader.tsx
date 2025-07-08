import { Button, Tooltip } from "@fluentui/react-components"
import { ArrowCounterclockwise20Regular, BoxEdit20Regular, Comment20Regular, Dismiss24Filled, EditSettings20Regular, History20Regular, PersonArrowLeft20Regular, PersonArrowRight20Regular, Print20Regular } from "@fluentui/react-icons"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import AssetDetailNewStyle from "../../../styles/listPages/assetDetail/assetDetailNew"
import { useEffect, useState } from "react"
import type { TypeTaiSan } from "../../../types/table"
import { AssetActionToolbar } from "./assetActionToolbar"

interface Props {
    asset: TypeTaiSan | null;
    showHistory: boolean;
    setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
}

const AssetDetailHeader = ({ asset, showHistory, setShowHistory }: Props) => {
    const { id } = useParams()
    const nav = useNavigate()
    const style = AssetDetailNewStyle()
    const [isDisabled, setIsDisabled] = useState(false);
    const handleClose = () => {
        nav("/asset/list")
    }

    const handleAction = (action: string) => {
        switch (action) {
            case "Thu hồi":
                nav(`/asset/list/detail/${id}/revoke`);
                break;
            case "Cấp phát":
                nav(`/asset/list/detail/${id}/assign`);
                break;
            case "Chỉnh sửa":
                alert("Mở form chỉnh sửa");
                break;
            case "Sửa chữa":
                nav(`/asset/list/detail/${id}/repair`);
                break;
            case "Bảo dưỡng":
                nav(`/asset/list/detail/${id}/maintenance`);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (asset?.nguoiSuDung != "") {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [asset]);
    return (
        <div className={style.actionBar}>
            <div className={style.left}>
                <div className={style.barTitle}>
                    <Button className={style.button} size="medium" icon={<Dismiss24Filled />} onClick={handleClose} />
                    <h2 className={style.title}>Chi tiết tài sản</h2>
                </div>
                <div className={style.actionBtn}>
                    <AssetActionToolbar asset={asset} onAction={handleAction} />
                </div>
                <div className={style.iconBtn}>
                    <Button className={style.btn} size="small" icon={<Print20Regular />} />
                    <Button className={style.btn} size="small" icon={<ArrowCounterclockwise20Regular />} />
                    <Button className={style.btn} size="small" icon={<History20Regular />} />
                    <Button
                        className={style.btn}
                        size="small"
                        icon={<Comment20Regular />}
                        onClick={() => setShowHistory(prev => !prev)}
                    />
                </div>
            </div>


            <Outlet />
        </div>
    )
}
export default AssetDetailHeader