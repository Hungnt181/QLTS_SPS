import { useParams } from "react-router-dom"
import AssetDetailHeader from "./assetDetailHeader"
import AssetDetailNewStyle from "../../styles/listPages/assetDetail/assetDetailNew"

const AssetDetailNew = () => {
    const { id } = useParams()
    const style = AssetDetailNewStyle()

    return (
        <div className={style.detailPage}>
            <AssetDetailHeader />
        </div>
    )
}
export default AssetDetailNew