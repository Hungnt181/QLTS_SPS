export interface TypeTaiSan {
    id: string;
    tenTaiSan: string;
    maTaiSan: string;
    maQR: string;
    nhomTaiSan: string;
    loaiTaiSan: string;
    diaDiem: string;
    boPhan: string;
    nguyenGia: number;
    trangThai: string;
    nguoiQuanLy: string;
    nguoiSuDung: string;
    ngayTiepNhan: string;
    hanBaoHanh: string;
    hanBaoDuong: string;
    tinhTrang: string;
}

export interface TypeGroupAsset {
    id: string;
    tenNhomTaiSan: string;
    maNhomTaiSan: string;
    moTa: string;
}

// Interface cho field trong form thường
export interface Field {
    label: string;
    type: string;
    name: string;
}

// Interface cho các _fields trong danh mục tài sản nâng cao
export interface NestedField {
    _label: string;
    _type: string;
    _name: string;
}

// Interface cho từng option trong danh mục tài sản nâng cao
export interface AssetCategoryOption {
    label: string;
    _id: string;
    _fields: NestedField[];
}

// Interface riêng cho field đặc biệt: danh mục tài sản trong "Thông tin nâng cao"
export interface AssetCategoryField {
    label: string;
    type: "look";
    name: string;
    options: AssetCategoryOption[];
}

// Tổng hợp interface cho một Form
export interface FormConfigItem {
    id: string;
    name: string;
    fields: (Field | AssetCategoryField)[];
    description: string;
}

