import { useParams } from "react-router-dom"
import AssetDetailNewStyle from "../../styles/listPages/assetDetail/assetDetailNew"
import AssetDetailHeader from "./assetDetailToolbar/assetDetailHeader"
import { useState } from "react"
import type { TypeTaiSan } from "../../types/table"
import DetailBox from "./detail/detaiBox"
import HistoryBox from "./history/historyBox"

const AssetDetailNew = () => {
    const { id } = useParams()
    const style = AssetDetailNewStyle()
    const [asset, setAsset] = useState<TypeTaiSan | null>(null);
    const [showHistory, setShowHistory] = useState(true);


    return (
        <div className={style.detailPage}>
            <div className={style.mainContent}>
                <div>
                    <AssetDetailHeader asset={asset}
                        showHistory={showHistory}
                        setShowHistory={setShowHistory} />
                </div>
                <div className={style.detail}>
                    <DetailBox />
                </div>
            </div>

            {showHistory && ( <HistoryBox /> )}

        </div>
    )
}
export default AssetDetailNew