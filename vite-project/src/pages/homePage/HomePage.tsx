import listPageStyle from "../../styles/listPages/listPage.ts";
import Header from "../../layouts/header/header.tsx";
import { Outlet } from "react-router-dom";
import AppBar from "../../layouts/sideBar/appBar/appBar.tsx";

const HomePage = () => {
  const style = listPageStyle();
  // lưu data vào localStroage
  const data = {
    dataTable: [
      {
        tenTaiSan: "Laptop Dell XPS 15",
        maTaiSan: "TS001",
        maQR: "QR001",
        nhomTaiSan: "Thiết bị CNTT",
        loaiTaiSan: "Laptop",
        diaDiem: "Văn phòng Hà Nội",
        boPhan: "Phòng IT",
        nguyenGia: 35000000,
        soLuong: "1",
        trangThai: "Đang sử dụng",
        nguoiQuanLy: "Nguyễn Văn A",
        nguoiSuDung: "Trần Thị B",
        ngayTiepNhan: "15-01-2025",
        hanBaoHanh: "15-01-2026",
        hanBaoDuong: "15-01-2026",
        tinhTrang: "Tốt",
        id: "6cc0",
        chucVuQL: "Quản lý IT",
        chucVuSD: "Nhân viên IT",
        taiLieu: "https://example.com/tai-lieu/ts001.pdf",
        ngayMua: "10/01/2025",
        lichSuBaoTri: "Lần bảo trì gần nhất vào 01-02-2025",
        lichSuKiemKe: "Lần kiểm kê gần nhất vào 01-03-2025",
      },
      {
        tenTaiSan: "Máy in Canon 2900",
        maTaiSan: "TS002",
        maQR: "QR002",
        nhomTaiSan: "Thiết bị văn phòng",
        loaiTaiSan: "Máy in",
        diaDiem: "Chi nhánh Đà Nẵng",
        boPhan: "Hành chính",
        nguyenGia: 2500000,
        soLuong: "1",
        trangThai: "Chưa sử dụng",
        nguoiQuanLy: "Lê Văn C",
        nguoiSuDung: "",
        ngayTiepNhan: "",
        hanBaoHanh: "20-08-2025",
        hanBaoDuong: "",
        tinhTrang: "Hỏng",
        id: "ce98",
      },
      {
        tenTaiSan: "Máy chiếu Epson EB-X06",
        maTaiSan: "TS003",
        maQR: "QR003",
        nhomTaiSan: "Thiết bị trình chiếu",
        loaiTaiSan: "Máy chiếu",
        diaDiem: "Phòng họp HCM",
        boPhan: "Phòng Kinh doanh",
        nguyenGia: 12000000,
        soLuong: "1",
        trangThai: "Đang sử dụng",
        nguoiQuanLy: "Nguyễn Thị C",
        nguoiSuDung: "Lê Văn D",
        ngayTiepNhan: "10-03-2024",
        hanBaoHanh: "10-03-2026",
        hanBaoDuong: "10-03-2025",
        tinhTrang: "Tốt",
        id: "ea0c",
      },
      {
        tenTaiSan: "Máy tính để bàn HP ProDesk",
        maTaiSan: "TS004",
        maQR: "QR004",
        nhomTaiSan: "Thiết bị CNTT",
        loaiTaiSan: "PC",
        diaDiem: "Chi nhánh Cần Thơ",
        boPhan: "Phòng Kế toán",
        nguyenGia: 18000000,
        soLuong: "1",
        trangThai: "Chưa sử dụng",
        nguoiQuanLy: "Trần Văn E",
        nguoiSuDung: "Chưa phân công",
        ngayTiepNhan: "05-05-2025",
        hanBaoHanh: "05-05-2027",
        hanBaoDuong: "05-05-2026",
        tinhTrang: "Mới",
        id: "1c6e",
      },
    ],
    nhomTaiSan: [
      {
        id: "NTS001",
        tenNhomTaiSan: "Công cụ, dụng cụ",
        maNhomTaiSan: "CCDC",
        moTa: "Các tài sản sản có giá trị dưới 30 triệu đồng",
      },
      {
        id: "NTS002",
        tenNhomTaiSan: "Tài sản cố định hữu hình",
        maNhomTaiSan: "TSCDHH",
        moTa: "Các tài sản sản có giá trị trên 30 triệu đồng",
      },
      {
        id: "NTS003",
        tenNhomTaiSan: "Tài sản cố định vô hình",
        maNhomTaiSan: "TSCDVH",
        moTa: "",
      },
    ],
    typeAsset: [
      {
        id: "NTS001",
        tenLoaiTaiSan: "Máy móc thiết bị",
        maLoaiTaiSan: "MMTB",
        tenNhomTaiSan: "Công cụ, dụng cụ",
        moTa: "Các tài sản sản có giá trị dưới 30 triệu đồng",
      },
      {
        id: "NTS002",
        tenLoaiTaiSan: "Phương tiện di chuyển",
        maLoaiTaiSan: "PTDC",
        tenNhomTaiSan: "Tài sản cố định hữu hình",
        moTa: "Các tài sản sản có giá trị trên 30 triệu đồng",
      },
      {
        id: "NTS003",
        tenLoaiTaiSan: "Bàn ghế",
        maLoaiTaiSan: "BG",
        tenNhomTaiSan: "Tài sản cố định vô hình",
        moTa: "",
      },
    ],
    statusList: [
      {
        tenTinhTrang: "Mới",
        mauSac: "",
        moTa: "Tài sản tình trạng mới",
      },
      {
        tenTinhTrang: "Cũ",
        mauSac: "",
        moTa: "Tài sản tình trạng cũ",
      },
    ],
    stateList: [
      {
        tenTrangThai: "Đang sử dụng",
        mauSac: "",
        moTa: "Đã bàn giao đang có người sử dụng",
      },
      {
        tenTrangThai: "Chưa sử dụng",
        mauSac: "",
        moTa: "Chưa có ai sử dụng",
      },
    ],
    // formConfig: [
    //     {
    //         id: "ttc",
    //         name: "Thông tin chung",
    //         fields: [
    //             {
    //                 idField: "ttc1",
    //                 label: "Tên tài sản",
    //                 type: "text",
    //                 name: "tenTaiSan",
    //             },
    //             {
    //                 idField: "ttc2",
    //                 label: "Mã tài sản",
    //                 type: "text",
    //                 name: "maTaiSan",
    //             },
    //             {idField: "ttc3", label: "Mã QR", type: "text", name: "maQR"},
    //             {
    //                 idField: "ttc3",
    //                 label: "Mã QR",
    //                 type: "text",
    //                 name: "maQR",
    //             },
    //             {
    //                 idField: "ttc4",
    //                 label: "Số lượng",
    //                 type: "number",
    //                 name: "soLuong",
    //             },
    //             {
    //                 idField: "ttc5",
    //                 label: "Đơn vị tính",
    //                 type: "text",
    //                 name: "donViTinh",
    //             },
    //             {
    //                 idField: "ttc6",
    //                 label: "Nhóm tài sản",
    //                 type: "lookup",
    //                 name: "nhomTaiSan",
    //             },
    //             {
    //                 idField: "ttc7",
    //                 label: "Loại tài sản",
    //                 type: "lookup",
    //                 name: "loaiTaiSan",
    //             },
    //             {
    //                 idField: "ttc8",
    //                 label: "Địa điểm",
    //                 type: "lookup",
    //                 name: "diaDiem",
    //             },
    //             {idField: "ttc9", label: "Bộ phận", type: "text", name: "boPhan"},
    //             {
    //                 idField: "ttc9",
    //                 label: "Bộ phận",
    //                 type: "text",
    //                 name: "boPhan",
    //             },
    //             {
    //                 idField: "ttc10",
    //                 label: "Nguyên giá",
    //                 type: "number",
    //                 name: "nguyenGia",
    //             },
    //             {
    //                 idField: "ttc11",
    //                 label: "Người quản lý",
    //                 type: "text",
    //                 name: "nguoiQuanLy",
    //             },
    //             {
    //                 idField: "ttc12",
    //                 label: "Trạng thái",
    //                 type: "lookup",
    //                 name: "trangThai",
    //             },
    //             {
    //                 idField: "ttc13",
    //                 label: "Tình trạng",
    //                 type: "lookup",
    //                 name: "tinhTrang",
    //             },
    //             {
    //                 idField: "ttc14",
    //                 label: "Ngày mua",
    //                 type: "date",
    //                 name: "ngayMua",
    //             },
    //         ],
    //         description: "Chứa các trường thông tin chung của tài sản",
    //     },
    //     {
    //         id: "bh",
    //         name: "Bảo hành",
    //         fields: [
    //             {
    //                 idField: "bh1",
    //                 label: "Thời gian bảo hành",
    //                 type: "date",
    //                 name: "thoiGianBaoHanh",
    //             },
    //             {
    //                 idField: "bh2",
    //                 label: "Đơn vị tính",
    //                 type: "lookup",
    //                 name: "donViTinh2",
    //             },
    //             {
    //                 idField: "bh3",
    //                 label: "Hạn bảo hành",
    //                 type: "date",
    //                 name: "hanBaoHanh",
    //             },
    //         ],
    //         description: "Chứa các trường thông tin bảo hành",
    //     },
    //     {
    //         id: "dcp",
    //         name: "Đã cấp phát",
    //         fields: [
    //             {
    //                 idField: "dcp1",
    //                 label: "Ngày tiếp nhận",
    //                 type: "date",
    //                 name: "ngayTiepNhan",
    //             },
    //             {
    //                 idField: "dcp2",
    //                 label: "Ngời tiếp nhân",
    //                 type: "lookup",
    //                 name: "nguoiSuDung",
    //             },
    //
    //             {
    //                 idField: "dcp3",
    //                 label: "Chức vụ",
    //                 type: "lookup",
    //                 name: "chucVu",
    //             },
    //         ],
    //         description: "Chứa các trường thông tin của việc đã cấp phát tài sản",
    //     },
    //     {
    //         id: "ttnc",
    //         name: "Thông tin nâng cao",
    //         fields: [
    //             {
    //                 label: "Danh mục tài sản",
    //                 type: "look",
    //                 name: "danhMucTaiSan",
    //                 options: [
    //                     {
    //                         label: "Máy tính để bàn ",
    //                         _id: "danhMuc1",
    //                         _loaiTaiSan: "Máy móc thiết bị",
    //                         _nhomTaiSan: "Công cụ, dụng cụ",
    //                         _moTa: "Tập hợp các thiết bị máy tính để bàn",
    //                         _fields: [
    //                             {
    //                                 _ID: "mtdb1",
    //                                 _label: "Năm sản xuất",
    //                                 _type: "number",
    //                                 _name: "namSanXuat",
    //                             },
    //                             {
    //                                 _ID: "mtdb2",
    //                                 _label: "Hãng sản xuất",
    //                                 _type: "text",
    //                                 _name: "hangSanXuat",
    //                             },
    //                             {
    //                                 _ID: "mtdb3",
    //                                 _label: "Thông số Ram",
    //                                 _type: "text",
    //                                 _name: "ram",
    //                             },
    //                         ],
    //                     },
    //                     {
    //                         label: "Tivi",
    //                         _id: "danhMuc2",
    //                         _loaiTaiSan: "Máy móc thiết bị",
    //                         _nhomTaiSan: "Công cụ, dụng cụ",
    //                         _moTa: "Tập hợp các thiết bị tivi",
    //                         _fields: [
    //                             {
    //                                 _ID: "tivi1",
    //                                 _label: "Năm sản xuất",
    //                                 _type: "text",
    //                                 _name: "namSanXuat",
    //                             },
    //                             {
    //                                 _ID: "tivi2",
    //                                 _label: "Kích cỡ",
    //                                 _type: "text",
    //                                 _name: "kichCo",
    //                             },
    //                         ],
    //                     },
    //                 ],
    //             },
    //         ],
    //         description:
    //             "Chứa các trường nng cao dễ dàng tìm kiếm và phân loại tài sản chi tiết",
    //     },
    // ],
    // Tài sản thu hồi
    InventoryList: [
      {
        maSoPhieu: "KK00001",
        noidung: "Kiểm kê tài sản SPS",
        kiKiemKe: "Tháng 06/2025",
        hanKiemKe: "16/06/2025",
        diaDiem: "VP Hà Nội",
        phongBan: "Phòng công nghệ",
        nhomTaiSan: "Cố định hữu hình",
        loaiTaiSan: "Máy móc thiết bị",
        truongBanKiemKe: "Nguyễn Văn Anh",
        chucVu: "Trưởng phòng công nghệ",
        trangThai: "Chưa kiểm kê",
        tienDo: "0%",
        id: "k31c",
      },
    ],

    InvenBoardData: {
      KK00001: [
        {
          STT: "001",
          hoTen: "Nguyễn Văn Anh",
          phongBan: "Phòng kế toán",
          chucVu: "Phó trưởng phòng",
          diaDiem: "VP Hà Nội",
          vaiTro: "Trưởng ban",
        },
        {
          STT: "002",
          hoTen: "Trần Văn Bảo",
          phongBan: "Phòng kế toán",
          chucVu: "Nhân viên",
          diaDiem: "VP Hà Nội",
          vaiTro: "Thành viên",
        },
      ],
      temp: [
        {
          STT: "001",
          hoTen: "Nguyễn Văn Anh",
          phongBan: "Phòng kế toán",
          chucVu: "Phó trưởng phòng",
          diaDiem: "VP Hà Nội",
          vaiTro: "Trưởng ban",
        },
        {
          STT: "002",
          hoTen: "Trần Văn Bảo",
          phongBan: "Phòng kế toán",
          chucVu: "Nhân viên",
          diaDiem: "VP Hà Nội",
          vaiTro: "Thành viên",
        },
      ],
    },

    AssetInvenList: {
      phongKinhDoanh: [
        {
          tenTaiSan: "Máy tính DELL",
          maTaiSan: "DELL1",
          nguoiQuanLy: "Nguyễn Diệu Anh",
          chucVu: "Phó phòng KD",
          phongBan: "Phòng kinh doanh",
          chuaSuDung: "0",
          diaDiem: "VP Hà Nội",
          dangSuDung: "1",
          hongSua: "0",
        },
        {
          tenTaiSan: "Máy tính DELL",
          maTaiSan: "DELL2",
          nguoiQuanLy: "Nguyễn Diệu Anh",
          chucVu: "Phó phòng KD",
          phongBan: "Phòng kinh doanh",
          chuaSuDung: "0",
          diaDiem: "VP Hà Nội",
          dangSuDung: "1",
          hongSua: "0",
        },
      ],
      phongCongNghe: [
        {
          tenTaiSan: "Máy tính DELL",
          maTaiSan: "DELL3",
          nguoiQuanLy: "Nguyễn Diệu Anh",
          chucVu: "Phó phòng KD",
          phongBan: "Phòng công nghệ",
          chuaSuDung: "0",
          diaDiem: "VP Hồ Chí Minh",
          dangSuDung: "1",
          hongSua: "0",
        },
      ],
    },

    formConfig: [
      {
        id: "ttc",
        name: "Thông tin chung",
        fields: [
          {
            idField: "ttc1",
            label: "Tên tài sản",
            type: "text",
            name: "tenTaiSan",
            required: true,
          },
          {
            idField: "ttc2",
            label: "Mã tài sản",
            type: "text",
            name: "maTaiSan",
            required: true,
          },
          // {
          //     idField: "ttc3",
          //     label: "Mã QR",
          //     type: "text",
          //     name: "maQR",
          // },
          {
            idField: "ttc4",
            label: "Số lượng",
            type: "number",
            name: "soLuong",
            defaultValue: "1",
            readOnly: true,
            required: true,
          },
          {
            idField: "ttc5",
            label: "Đơn vị tính",
            type: "text",
            name: "donViTinh",
            defaultValue: "Cái",
          },
          {
            idField: "ttc6",
            label: "Nhóm tài sản",
            type: "lookup",
            name: "nhomTaiSan",
            options: [
              { label: "Công cụ, dụng cụ", value: "Công cụ, dụng cụ" },
              {
                label: "Tài sản cố định hữu hình",
                value: "Tài sản cố định hữu hình",
              },
              {
                label: "Tài sản cố định vô hình",
                value: "Tài sản cố định vô hình",
              },
              { label: "Tài sản lưu động", value: "Tài sản lưu động" },
              { label: "Tài sản khác", value: "Tài sản khác" },
            ],
            defaultValue: "Công cụ, dụng cụ",
          },
          {
            idField: "ttc7",
            label: "Loại tài sản",
            type: "lookup",
            name: "loaiTaiSan",
            options: [
              { label: "Máy móc thiết bị", value: "Máy móc thiết bị" },
              { label: "Phương tiện vận tải", value: "Phương tiện vận tải" },
              {
                label: "Nhà cửa, vật kiến trúc",
                value: "Nhà cửa, vật kiến trúc",
              },
            ],
            defaultValue: "Tài sản cố định hữu hình",
          },
          {
            idField: "ttc8",
            label: "Địa điểm",
            type: "lookup",
            name: "diaDiem",
            options: [
              { label: "Tầng 1", value: "Tầng 1" },
              { label: "Tầng 2", value: "Tầng 2" },
              { label: "Tầng 3", value: "Tầng 3" },
              { label: "Kho A", value: "Kho A" },
              { label: "Kho B", value: "Kho B" },
              { label: "Văn phòng A", value: "Văn phòng A" },
              { label: "Văn phòng B", value: "Văn phòng B" },
            ],
            defaultValue: "Tầng 1",
          },
          {
            idField: "ttc9",
            label: "Bộ phận",
            type: "lookup",
            name: "boPhan",
            options: [
              { label: "", value: "" },
              { label: "Phòng kinh doanh", value: "Phòng kinh doanh" },
              { label: "Phòng nhân sự", value: "Phòng nhân sự" },
              { label: "Phòng kế toán", value: "Phòng kế toán" },
              { label: "Phòng IT", value: "Phòng IT" },
            ],
            defaultValue: "Phòng kinh doanh",
          },
          {
            idField: "ttc10",
            label: "Nguyên giá",
            type: "number",
            name: "nguyenGia",
            suffix: "VNĐ",
            required: true,
          },
          {
            idField: "ttc11",
            label: "Người quản lý",
            type: "lookup",
            name: "nguoiQuanLy",
            options: [
              { label: "", value: "" },
              { label: "Nguyễn Văn A", value: "Nguyễn Văn A" },
              { label: "Trần Thị B", value: "Trần Thị B" },
              { label: "Lê Văn C", value: "Lê Văn C" },
              { label: "Phạm Thị D", value: "Phạm Thị D" },
            ],
            defaultValue: "Nguyễn Văn A",
          },
          {
            idField: "ttc12",
            label: "Trạng thái",
            type: "lookup",
            name: "trangThai",
            options: [
              { label: "Đang sử dụng", value: "Đang sử dụng" },
              { label: "Chưa sử dụng", value: "Chưa sử dụng" },
              { label: "Đang bảo trì", value: "Đang bảo trì" },
              { label: "Hỏng", value: "Hỏng" },
              { label: "Đã thanh lý", value: "Đã thanh lý" },
            ],
            defaultValue: "Đang sử dụng",
          },
          {
            idField: "ttc13",
            label: "Tình trạng",
            type: "lookup",
            name: "tinhTrang",
            options: [
              { label: "Tốt", value: "Tốt" },
              { label: "Khá", value: "Khá" },
              { label: "Trung bình", value: "Trung bình" },
              { label: "Kém", value: "Kém" },
              { label: "Hỏng", value: "Hỏng" },
            ],
            defaultValue: "Tốt",
          },
          {
            idField: "ttc14",
            label: "Ngày mua",
            type: "date",
            name: "ngayMua",
          },
        ],
        description: "Chứa các trường thông tin chung của tài sản",
      },
      {
        id: "bh",
        name: "Bảo hành",
        fields: [
          {
            idField: "bh1",
            label: "Thời gian bảo hành",
            type: "text",
            name: "thoiGianBaoHanh",
          },
          {
            idField: "bh2",
            label: "Đơn vị tính",
            type: "lookup",
            name: "donViTinh2",
            options: [
              { label: "Tháng", value: "Tháng" },
              { label: "Năm", value: "Năm" },
              { label: "Ngày", value: "Ngày" },
              { label: "Tuần", value: "Tuần" },
            ],
            defaultValue: "Tháng",
          },
          {
            idField: "bh3",
            label: "Hạn bảo hành",
            type: "date",
            name: "hanBaoHanh",
          },
        ],
        description: "Chứa các trường thông tin bảo hành",
      },
      {
        id: "dcp",
        name: "Đã cấp phát",
        fields: [
          {
            idField: "dcp1",
            label: "Ngày tiếp nhận",
            type: "date",
            name: "ngayTiepNhan",
          },
          {
            idField: "dcp2",
            label: "Người sử dụng",
            type: "lookup",
            name: "nguoiSuDung",
            options: [
              { label: "", value: "" },
              { label: "Nguyễn Văn A", value: "Nguyễn Văn A" },
              { label: "Trần Thị B", value: "Trần Thị B" },
              { label: "Lê Văn C", value: "Lê Văn C" },
              { label: "Phạm Thị D", value: "Phạm Thị D" },
            ],
            defaultValue: "Nguyễn Văn A",
          },
          {
            idField: "dcp3",
            label: "Chức vụ",
            type: "lookup",
            name: "chucVu",
            options: [
              { label: "", value: "" },
              { label: "Giám đốc", value: "Giám đốc" },
              { label: "Phó giám đốc", value: "Phó giám đốc" },
              { label: "Trưởng phòng", value: "Trưởng phòng" },
              { label: "Phó phòng", value: "Phó phòng" },
              { label: "Nhân viên", value: "Nhân viên" },
              { label: "Chuyên viên", value: "Chuyên viên" },
            ],
          },
        ],
        description: "Chứa các trường thông tin của việc đã cấp phát tài sản",
      },
      {
        id: "ttnc",
        name: "Thông tin nâng cao",
        fields: [
          {
            idField: "ttnc1",
            label: "Danh mục tài sản",
            type: "lookup",
            name: "danhMucTaiSan",
            options: [
              {
                label: "Máy tính để bàn",
                value: "may_tinh_de_ban",
                _id: "danhMuc1",
                _loaiTaiSan: "Máy móc thiết bị",
                _nhomTaiSan: "Công cụ, dụng cụ",
                _moTa: "Tập hợp các thiết bị máy tính để bàn",
                _fields: [
                  {
                    _ID: "mtdb1",
                    _label: "Năm sản xuất",
                    _type: "number",
                    _name: "namSanXuat",
                  },
                  {
                    _ID: "mtdb2",
                    _label: "Hãng sản xuất",
                    _type: "text",
                    _name: "hangSanXuat",
                  },
                  {
                    _ID: "mtdb3",
                    _label: "Thông số Ram",
                    _type: "lookup",
                    _name: "ram",
                    options: [
                      { label: "", value: "" },
                      { label: "2GB", value: "2GB" },
                      { label: "4GB", value: "4GB" },
                      { label: "8GB", value: "8GB" },
                      { label: "16GB", value: "16GB" },
                      { label: "32GB", value: "32GB" },
                    ],
                    defaultValue: "2GB",
                  },
                ],
              },
              {
                label: "Tivi",
                value: "tivi",
                _id: "danhMuc2",
                _loaiTaiSan: "Máy móc thiết bị",
                _nhomTaiSan: "Công cụ, dụng cụ",
                _moTa: "Tập hợp các thiết bị tivi",
                _fields: [
                  {
                    _ID: "tivi1",
                    _label: "Năm sản xuất",
                    _type: "text",
                    _name: "namSanXuat",
                  },
                  {
                    _ID: "tivi2",
                    _label: "Kích cỡ",
                    _type: "text",
                    _name: "kichCo",
                  },
                ],
              },
            ],
          },
        ],
        description:
          "Chứa các trường nâng cao dễ dàng tìm kiếm và phân loại tài sản chi tiết",
      },
    ],
    revokeAsset: [],
    // Tài sản đã cấp phát
    assignAsset: [],
    //Tài sản cần sửa chữa
    repairAsset: [
      {
        id: "SC_6cc01",
        moTa: "Hỏng màn hình",
        ngaySuaChua: "20/06/2025",
        taiSan: {
          id: "6cc01",
          tenTaiSan: "Laptop Dell XPS 15",
          maTaiSan: "TS00101",
          nguoiQuanLy: "Nguyễn Văn A",
          nguoiSuDung: "Trần Thị B",
          ngayMua: "10/01/2025",
          hanBaoHanh: "15/01/2026",
          nguyenGia: 35000000,
          trangThai: "Đang sửa chữa",
        },
      },
      {
        id: "SC_2",
        moTa: "Hỏng màn hình",
        ngaySuaChua: "20/06/2025",
        taiSan: {
          id: "6cc01",
          tenTaiSan: "Laptop Dell XPS 15",
          maTaiSan: "TS00101",
          nguoiQuanLy: "Nguyễn Văn A",
          nguoiSuDung: "Trần Thị B",
          ngayMua: "10/01/2025",
          hanBaoHanh: "15/01/2026",
          nguyenGia: 35000000,
          trangThai: "Đang sửa chữa",
        },
      },
      {
        id: "SC_3",
        moTa: "Hỏng màn hình",
        ngaySuaChua: "20/06/2025",
        taiSan: {
          id: "6cc01",
          tenTaiSan: "Laptop Dell XPS 15",
          maTaiSan: "TS00101",
          nguoiQuanLy: "Nguyễn Văn A",
          nguoiSuDung: "Trần Thị B",
          ngayMua: "10/01/2025",
          hanBaoHanh: "15/01/2026",
          nguyenGia: 35000000,
          trangThai: "Đang sửa chữa",
        },
      },
    ],
    maintenanceAsset: [
      {
        id: "BD_6cc01",
        moTa: "Bảo dưỡng thiết bị",
        ngayBaoDuong: "20/06/2025",
        loaiBaoDuong: "Định kỳ",
        taiSan: {
          id: "6cc01",
          tenTaiSan: "Laptop Dell XPS 15",
          maTaiSan: "TS00101",
          nguoiQuanLy: "Nguyễn Văn A",
          nguoiSuDung: "Trần Thị B",
          ngayMua: "10/01/2025",
          hanBaoDuong: "15/01/2026",
          nguyenGia: 35000000,
          trangThai: "Đang bảo dưỡng",
        },
      },
    ],
  };

  localStorage.setItem("data", JSON.stringify(data));
  return (
    <>
      <div>
        <Header />
        {/*body*/}
        <div className={style.body}>
          <div>
            {/*    sideBar*/}
            <AppBar></AppBar>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
