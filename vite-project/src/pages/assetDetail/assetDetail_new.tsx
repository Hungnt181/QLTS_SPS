import { useParams } from "react-router-dom"
import AssetDetailNewStyle from "../../styles/listPages/assetDetail/assetDetailNew"
import AssetDetailHeader from "./assetDetailToolbar/assetDetailHeader"
import { useState } from "react"
import type { TypeTaiSan } from "../../types/table"

const AssetDetailNew = () => {
    const { id } = useParams()
    const style = AssetDetailNewStyle()
    const [asset, setAsset] = useState<TypeTaiSan | null>(null);
    const [showHistory, setShowHistory] = useState(false);


    return (
        <div className={style.detailPage}>
            <div className={style.mainContent}>
                <AssetDetailHeader asset={asset}
                    showHistory={showHistory}
                    setShowHistory={setShowHistory} />
            </div>

        </div>
    )
}
export default AssetDetailNew