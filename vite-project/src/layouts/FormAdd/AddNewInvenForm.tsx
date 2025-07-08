import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const useAddNewInvenForm = () => {
    const generateMaSoPhieu = () => {
        const data = localStorage.getItem("data")
        const allData = data ? JSON.parse(data) : { InventoryList: [] }
        const count = allData.InventoryList.length + 1
        return `KK${String(count).padStart(4, "0")}` // VD: KK0001
    }

    const [formData, setFormData] = useState({
        noidung: "",
        maSoPhieu: "",
        kiKiemKeThang: "",
        kiKiemKeNam: "",
        kiKiemKe: "",
        hanKiemKe: "",
        diaDiem: "",
        phongBan: "",
        nhomTaiSan: "",
        loaiTaiSan: "",
        trangThai: "Chưa kiểm kê",
        tienDo: "0%",
        truongBanKiemKe: "",
        vaiTro: "Trưởng ban",
        chucVu: "",
    })

    useEffect(() => {
        const maSoPhieu = generateMaSoPhieu()

        const data = localStorage.getItem("data")
        const allData = data ? JSON.parse(data) : { InvenBoardData: {} }
        const tempList = allData.InvenBoardData?.temp || []

        const truongBan = tempList.find((item: any) => item.vaiTro === "Trưởng ban")

        setFormData((prev) => ({
            ...prev,
            maSoPhieu,
            truongBanKiemKe: truongBan?.hoTen || "",
            chucVu: truongBan?.chucVu || "",
        }))
    }, [])

    const handleDateChange = (field: keyof typeof formData) => (date: Date | null | undefined) => {
        setFormData((prev) => ({
            ...prev,
            [field]: date ? date.toLocaleDateString("vi-VN") : "",
        }))
    }

    const nav = useNavigate()

    const addNewInventoryDate = async () => {
        const data = localStorage.getItem("data")
        const allData = data ? JSON.parse(data) : { InventoryList: [], InvenBoardData: {} }
        const kiKiemKeText = `${formData.kiKiemKeThang}/${formData.kiKiemKeNam}`

        allData.InventoryList.push({
            id: formData.maSoPhieu,
            ...formData,
            kiKiemKe: kiKiemKeText,
        })

        if (!allData.InvenBoardData) allData.InvenBoardData = {}
        if (allData.InvenBoardData.temp && allData.InvenBoardData.temp.length > 0) {
            allData.InvenBoardData[formData.maSoPhieu] = allData.InvenBoardData.temp
            delete allData.InvenBoardData.temp
        }

        localStorage.setItem("data", JSON.stringify(allData))
        alert("Thêm mới thành công")
        nav("/asset/inventory", { state: { reload: true } })
    }

    return {
        formData,
        setFormData,
        handleDateChange,
        addNewInventoryDate,
    }
}