import { Button } from "@fluentui/react-components"
import { DismissSquare24Regular } from "@fluentui/react-icons"
import { useNavigate } from "react-router-dom"
import AssetDetailNewStyle from "../../styles/listPages/assetDetail/assetDetailNew"

const AssetDetailHeader = () => {
    const nav = useNavigate()
    const style = AssetDetailNewStyle()
    const handleClose = () => {
        nav("/taisan/list")
    }
    return (
        <div className={style.actionBar}>
            <div className={style.barTitle}>
                <Button size="small" iconOnly appearance="subtle" onClick={handleClose} icon={<DismissSquare24Regular className={style.titleIcon} />} />
                <h2 className={style.title}>Chi tiết tài sản</h2>
            </div>
        </div>
    )
}
export default AssetDetailHeader