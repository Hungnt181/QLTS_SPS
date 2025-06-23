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

export interface TypeAsset {
    id: string;
    tenLoaiTaiSan: string; 
    maLoaiTaiSan: string;
    tenNhomTaiSan: string;
    moTa: string;
}

export interface StatusList {
  tenTinhTrang: string;
  mauSac: string;
  moTa: string;
}

export interface StateList {
  tenTrangThai: string;
  mauSac: string;
  moTa: string;
}

export interface InventoryListType {
    maSoPhieu: string,
    id: string,
    noidung: string,
    kiKiemKe: string,
    hanKiemKe: string,
    diaDiem: string,
    boPhan: string,
    nhomTaiSan: string,
    loaiTaiSan: string,
    truongBanKiemKe: string,
    chucVu: string,
    trangThai: string,
    tienDo: string,
}

export interface InvenBoardType {
    STT: string,
    hoTen: string,
    phongBan: string,
    chucVu: string,
    diaDiem: string,
    vaiTro: string,
    // ghiChu: string,
}

export interface AssetInvenType {
    tenTaiSan: string,
    maTaiSan: string,
    qr: string,
    nguoiQuanLy: string,
    chucVu: string,
    phongBan: string,
    chuaSuDung: string,
    dangSuDung: string,
    hongSua: string,
}

// Interface cho field trong form thường
export interface Field {
    idField: string;
    label: string;
    type: string;
    name: string;
}

// Interface cho các _fields trong danh mục tài sản nâng cao
export interface NestedField {
    _ID: string;
    _label: string;
    _type: string;
    _name: string;
}

// Interface cho từng option trong danh mục tài sản nâng cao
export interface AssetCategoryOption {
    label: string;
    _id: string;
    _loaiTaiSan: string;
    _nhomTaiSan: string;
    _moTa: string;
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

