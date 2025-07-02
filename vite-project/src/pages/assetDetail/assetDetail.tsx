import { useEffect, useState } from "react";
import { Text, Persona, PersonaSize } from "@fluentui/react";
import { useParams, useNavigate, Outlet, useLocation } from "react-router-dom";
import type {
  AssignAssetItem,
  RevokeAssetItem,
  TypeTaiSan,
} from "../../types/table";
import assetDetailStyle from "../../styles/listPages/assetDetail/assetDetail.ts";

import {
  NumberSymbolSquare20Regular,
  ScanText20Regular,
  GroupList20Regular,
  Tag20Regular,
  Money20Regular,
  Autosum20Regular,
  Location20Regular,
  Person20Regular,
  PersonAccounts20Regular,
  Attach20Regular,
  Calendar20Regular,
  CalendarClock20Regular,
  Status20Regular,
  PulseSquare20Regular,
  CalendarEdit20Regular,
  PersonArrowLeft20Regular,
  PersonArrowRight20Regular,
  EditSettings20Regular,
  BoxEdit20Regular,
  History20Regular,
  DismissSquare24Regular,
  Print20Regular,
  ArrowCounterclockwise20Regular,
  Comment20Regular,
  ChevronDown20Regular,
  GroupReturn20Regular,
} from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";
import { AssetActionToolbar } from "./assetDetailToolbar/assetActionToolbar.tsx";

const AssetDetail = () => {
  // const [assetDetail, setAssetDetail] = useState<TypeTaiSan | null> (null)
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const style = assetDetailStyle();
  const { id } = useParams();
  const [asset, setAsset] = useState<TypeTaiSan | null>(null);
  const [assetRevoke, setAssetRevoke] = useState<RevokeAssetItem | null>(null);
  const [assetAssign, setAssetAssign] = useState<AssignAssetItem | null>(null);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = localStorage.getItem("data");

      if (!data) return;
      const parsed = JSON.parse(data);
      const assetList: TypeTaiSan[] = Array.isArray(parsed.dataTable)
        ? parsed.dataTable
        : [];
      const foundAsset = assetList.find(
        (item) => String(item.id) === String(id)
      );
      setAsset(foundAsset || null);
      // Lấy data của tài sản thu hồi
      const allData = data ? JSON.parse(data) : { revokeAsset: [] };
      const revokeAsset = allData?.revokeAsset.filter(
        (item: RevokeAssetItem) => item?.taiSan?.id == id
      );
      setAssetRevoke(revokeAsset);
      //lấy data của tài sản cấp phát
      const assignAsset = allData?.assignAsset.filter(
        (item: AssignAssetItem) => item?.taiSan?.id == id
      );
      setAssetAssign(assignAsset);
    } catch (error) {
      console.log("Lỗi đọc tài sản trong Local Storage", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData().then();
    // if (id) {
    //     fetchData().then()
    // }
    if (location.state?.reload) {
      fetchData();
    }
  }, [id, location.state?.reload]);

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
    <div className={style.detailPage}>
      <div className={style.leftElements}>
        <div className={style.actionBar}>
          <div className={style.leftActionBar}>
            <div className={style.title}>
              <button
                className={style.buttonIcon}
                onClick={() => navigate("/asset/list")}
              >
                <DismissSquare24Regular className={style.titleIcon} />
              </button>
              <Text variant="xLarge" className={style.actionBarTitle}>
                Chi tiết tài sản
              </Text>
            </div>

            {/* <div className={style.actionButton}>
              <Button
                className={style.button}
                disabled={!isDisabled}
                onClick={() => navigate(`/asset/list/detail/${id}/revoke`)}
              >
                <PersonArrowLeft20Regular className={style.icon} />
                <span className={style.buttonTitle}>Thu hồi</span>
              </Button>
              <Button
                className={style.button}
                disabled={isDisabled}
                onClick={() => navigate(`/asset/list/detail/${id}/assign`)}
              >
                <PersonArrowRight20Regular className={style.icon} />
                <span className={style.buttonTitle}>Cấp phát</span>
              </Button>
              <Button className={style.button}>
                <EditSettings20Regular className={style.icon} />
                <span className={style.buttonTitle}>Chỉnh sửa</span>
              </Button>
              <Button
                className={style.button}
                disabled={asset?.trangThai === "Đang sửa chữa"}
                onClick={() => navigate(`/asset/list/detail/${id}/repair`)}
              >
                <BoxEdit20Regular className={style.icon} />
                <span className={style.buttonTitle}>Sửa chữa</span>
              </Button>
              <Button
                className={style.button}
                disabled={
                  asset?.trangThai === "Đang bảo dưỡng" ||
                  asset?.trangThai === "Đang sửa chữa"
                }
                onClick={() =>
                  navigate(`/asset/list/detail/${id}/maintenance`)
                }
              >
                <History20Regular className={style.icon} />
                <span className={style.buttonTitle}>Bảo dưỡng</span>
              </Button>
            </div> */}
            <div>
              <AssetActionToolbar asset={asset} />
            </div>

            <div className={style.rightActionButton}>
              <button className={style.button}>
                <Print20Regular className={style.iconButton} />
              </button>
              <button className={style.button}>
                <ArrowCounterclockwise20Regular className={style.iconButton} />
              </button>
              <button className={style.button}>
                <History20Regular className={style.iconButton} />
              </button>
              <button className={style.button}>
                <Comment20Regular className={style.iconButton} />
              </button>
            </div>
          </div>
        </div>

        <div className={style.contentContainer}>
          <div className={style.general}>
            <div className={style.h2}>
              <h2 className={style.contentContainerTitle}>Thông tin chung</h2>
            </div>
            <div className={style.detail}>
              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <NumberSymbolSquare20Regular className={style.contentIcon} />
                  <span className={style.span}>ID</span>
                </div>
                <Text className={style.valueText}>{asset?.maTaiSan}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <ScanText20Regular className={style.contentIcon} />
                  <span className={style.span}>Tên tài sản</span>
                </div>
                <Text className={style.valueText}>{asset?.tenTaiSan}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <GroupList20Regular className={style.contentIcon} />
                  <span className={style.span}>Nhóm tài sản</span>
                </div>
                <Text className={style.valueText}>{asset?.nhomTaiSan}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Tag20Regular className={style.contentIcon} />
                  <span className={style.span}>Loại tài sản</span>
                </div>
                <Text className={style.valueText}>{asset?.loaiTaiSan}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Money20Regular className={style.contentIcon} />
                  <span className={style.span}>Nguyên giá</span>
                </div>
                <Text className={style.valueText}>
                  {asset?.nguyenGia.toLocaleString("vi-VN")}
                </Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Autosum20Regular className={style.contentIcon} />
                  <span className={style.span}>Số lượng</span>
                </div>
                <Text className={style.valueText}>{asset?.soLuong}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Location20Regular className={style.contentIcon} />
                  <span className={style.span}>Địa điểm</span>
                </div>
                <Text className={style.valueText}>{asset?.diaDiem}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Location20Regular className={style.contentIcon} />
                  <span className={style.span}>Bộ phận</span>
                </div>
                <Text className={style.valueText}>{asset?.boPhan}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Person20Regular className={style.contentIcon} />
                  <span className={style.span}>Người quản lý</span>
                </div>
                <Persona
                  className={style.valueText}
                  text={asset?.nguoiQuanLy}
                  style={{ paddingTop: "8px", paddingBottom: "8px" }}
                  size={PersonaSize.size32}
                />
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <PersonAccounts20Regular className={style.contentIcon} />
                  <span className={style.span}>Chức vụ</span>
                </div>
                <Text className={style.valueText}>{asset?.chucVuQL}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Attach20Regular className={style.contentIcon} />
                  <span className={style.span}>Tài liệu</span>
                </div>
                <Text className={style.valueText}>{asset?.taiLieu}</Text>
                {/*<ul className={style.valueText}>*/}
                {/*    {asset?.taiLieu}*/}
                {/*</ul>*/}
              </div>
            </div>
          </div>
          <div className={style.general}>
            <div className={style.h2}>
              <h2 className={style.contentContainerTitle}>
                Thông tin trạng thái
              </h2>
            </div>

            <div className={style.detail}>
              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Status20Regular className={style.contentIcon} />
                  <span className={style.span}>Trạng thái</span>
                </div>
                <Text className={style.valueText}>{asset?.trangThai}</Text>
              </div>
              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <PulseSquare20Regular className={style.contentIcon} />
                  <span className={style.span}>Tình trạng</span>
                </div>
                <Text className={style.valueText}>{asset?.tinhTrang}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <CalendarEdit20Regular className={style.contentIcon} />
                  <span className={style.span}>Hạn bảo dưỡng</span>
                </div>
                <Text className={style.valueText}>{asset?.hanBaoDuong}</Text>
              </div>
              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Calendar20Regular className={style.contentIcon} />
                  <span className={style.span}>Ngày mua</span>
                </div>

                <Text className={style.valueText}>{asset?.ngayMua}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <CalendarClock20Regular className={style.contentIcon} />
                  <span className={style.span}>Hạn bảo hành</span>
                </div>
                <Text className={style.valueText}>{asset?.hanBaoHanh}</Text>
              </div>
            </div>
          </div>
          <div className={style.general}>
            <div className={style.h2}>
              <h2 className={style.contentContainerTitle}>Lịch sử</h2>
            </div>
            <div className={style.detail}>
              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Status20Regular className={style.contentIcon} />
                  <span className={style.span}>
                    Lịch sử bảo dưỡng - sửa chữa
                  </span>
                </div>
                <Text className={style.valueText}>{asset?.lichSuBaoTri}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Status20Regular className={style.contentIcon} />
                  <span className={style.span}>Lịch sử kiểm kê gần nhất</span>
                </div>
                <Text className={style.valueText}>{asset?.lichSuKiemKe}</Text>
              </div>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.h2}>
              <h2 className={style.contentContainerTitle}>
                Thông tin người tiếp nhận
              </h2>
            </div>
            <div className={style.detail}>
              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Person20Regular className={style.contentIcon} />
                  <span className={style.span}>Tên người tiếp nhận</span>
                </div>
                {asset?.nguoiSuDung ? (
                  <Persona
                    className={style.valueText}
                    text={asset?.nguoiSuDung}
                    size={PersonaSize.size32}
                  />
                ) : null}
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <GroupList20Regular className={style.contentIcon} />
                  <span className={style.span}>Chức vụ</span>
                </div>
                <Text className={style.valueText}>{asset?.chucVuSD}</Text>
              </div>

              <div className={style.itemBlock}>
                <div className={style.spanContainer}>
                  <Calendar20Regular className={style.contentIcon} />
                  <span className={style.span}>Ngày tiếp nhận</span>
                </div>
                <Text className={style.valueText}>
                  {asset?.ngayTiepNhan || ""}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.rightElements}>
        <div className={style.historyHeader}>
          <div className={style.historyTitle}>
            <span style={{ fontSize: "16px" }}>Lịch sử</span>
            <ChevronDown20Regular />
          </div>
        </div>
        <div className={style.historyTable}>
          {Array.isArray(assetRevoke)
            ? assetRevoke.map((item: RevokeAssetItem) => (
                <div key={item?.id} className={style.history}>
                  <div className={style.time}>
                    <Text>{item?.ngayThuHoi}</Text>
                  </div>

                  <div className={style.timeContainer}>
                    <div className={style.timeLine}>
                      <div className={style.activities}>
                        <div className={style.statusText}>Đã thu hồi</div>
                        <div className={style.info}>
                          <div className={style.text}>
                            <Persona
                              size={PersonaSize.size32}
                              className={style.persona}
                            />
                            <span className={style.name}>
                              {item?.nguoiThuHoi}
                            </span>
                            <span className={style.chucVu}>
                              Nhân viên thực tập - Phòng Công Nghệ 1 - SPSVN
                            </span>
                          </div>
                        </div>
                        <div className={style.iconWrapper}>
                          <GroupReturn20Regular />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
          {Array.isArray(assetAssign)
            ? assetAssign.map((item: AssignAssetItem) => (
                <div key={item?.id} className={style.history}>
                  <div className={style.time}>
                    <Text>{item?.ngayCapPhat}</Text>
                  </div>

                  <div className={style.timeContainer}>
                    <div className={style.timeLine}>
                      <div className={style.activities}>
                        <div className={style.statusText}>Đã cấp phát</div>
                        <div className={style.info}>
                          <div className={style.text}>
                            <Persona
                              size={PersonaSize.size32}
                              className={style.persona}
                            />
                            <span className={style.name}>
                              {item?.nguoiCapPhat}
                            </span>
                            <span className={style.chucVu}>
                              Nhân viên thực tập - Phòng Công Nghệ 1 - SPSVN
                            </span>
                          </div>
                        </div>
                        <div className={style.iconWrapper}>
                          <GroupReturn20Regular />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
          <div className={style.history}>
            <div className={style.time}>
              <Text>10/08 8:00</Text>
            </div>

            <div className={style.timeContainer}>
              <div className={style.timeLine}>
                <div className={style.activities}>
                  <div className={style.statusText}>Đã tiếp nhận</div>
                  <div className={style.info}>
                    <div className={style.text}>
                      <Persona
                        size={PersonaSize.size32}
                        className={style.persona}
                      />
                      <span className={style.name}>Nguyễn Như Trọng</span>
                      <span className={style.chucVu}>
                        Nhân viên thực tập - Phòng Công Nghệ 1 - SPSVN
                      </span>
                    </div>
                  </div>
                  <div className={style.iconWrapper}>
                    <GroupReturn20Regular />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AssetDetail;
