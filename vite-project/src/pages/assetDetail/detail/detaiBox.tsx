import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import AssetDetailNewStyle from "../../../styles/listPages/assetDetail/assetDetailNew"
import type { AssignAssetItem, RevokeAssetItem, TypeAsset, TypeTaiSan } from "../../../types/table"
import RevokeAsset from "../Form/RevokeAssset"
import AssetInfoTable from "./assetInfoTable"

const DetailBox = () => {
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    const [isDisabled, setIsDisabled] = useState(false);

    const style = AssetDetailNewStyle()
    const { id } = useParams()
    const [asset, setAsset] = useState<TypeTaiSan | null>(null)
    const [assetRevoke, setAssetRevoke] = useState<RevokeAssetItem | null>(null);
    const [assetAssign, setAssetAssign] = useState<AssignAssetItem | null>(null);

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const data = localStorage.getItem("data")

            if (!data) return
            const parsed = JSON.parse(data)
            const assetList: TypeTaiSan[] = Array.isArray(parsed.dataTable)
                ? parsed.dataTable
                : []
            const foundAsset = assetList.find(
                (item) => String(item.id) === String(id)
            )
            setAsset(foundAsset || null)
            const allData = data ? JSON.parse(data) : { revokeAsset: [] }
            const revokeAsset = allData?.revokeAsset.filter(
                (item: RevokeAssetItem) => item?.taiSan?.id == id
            )
            setAssetRevoke(revokeAsset)

            const assignAsset = allData?.assignAsset.filter(
                (item: AssignAssetItem) => item?.taiSan?.id == id
            )
            setAssetAssign(assignAsset)
        } catch (error) {
            console.log("lỗi", error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData().then()
        if (location.state?.reload) {
            fetchData()
        }
    }, [id, location.state?.reload])

    useEffect(() => {
        if (asset?.nguoiSuDung != "") {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [asset]);

    if (isLoading) {
        <div>Đang tải thông tin tài sản...</div>;
    }
    if (!asset) {
        <div>Không tìm thấy thông tin tài sản</div>;
    }

    return (
        <div>
            {asset && <AssetInfoTable asset={asset} />}
        </div>
    )
}
export default DetailBox