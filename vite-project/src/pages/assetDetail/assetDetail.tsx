import React, {useEffect, useState} from "react"
import { Text, Persona, PersonaSize} from "@fluentui/react"
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import type { TypeTaiSan } from "../../types/table";
import assetDetailStyle from "../../styles/listPages/assetDetail/assetDetail.ts"

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
    GroupReturn20Regular
} from "@fluentui/react-icons";

const AssetDetail = () => {
    // const [assetDetail, setAssetDetail] = useState<TypeTaiSan | null> (null)
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const [showAssetRecalPopup, setShowAssetRecalPopup] = useState(false) 
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
        document.body.style.overflow = '';
        };
    }, []);

    const style = assetDetailStyle()
    const {id} = useParams()
    const [asset, setAsset] = useState<TypeTaiSan | null > (null)
    console.log({id});
    
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:3000/dataTable/${id}`)
    //             console.log('response', response);
    //             setAsset(response.data);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     })();
    // }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = localStorage.getItem('data')
                // const allData: TypeTaiSan[] = data ? JSON.parse(data) : []
                // const foundAsset = allData.find(item => String(item.id) === String(id))
                // setAsset (foundAsset || null)
                if (!data) return

                const parsed = JSON.parse(data)
                const assetList: TypeTaiSan[] = Array.isArray(parsed.dataTable)
                    ? parsed.dataTable
                    : []
                const foundAsset= assetList.find(item => String(item.id) === String(id))
                setAsset(foundAsset || null)
            } catch(error) {
                console.log ('Lỗi đọc tài sản trong Local Storage', error)
            } finally {
                setIsLoading(false)
            }
        }  
        if (id) {
            fetchData()
        }      
    }, [id])

    if(isLoading) {
        <div>Đang tải thông tin tài sản...</div>
    }
    if(!asset) {
        <div>Không tìm thấy thông tin tài sản</div>
    }

    return (
    <div className={style.detailPage}>
        <div className={style.leftElements}>
            <div className={style.actionBar}>
                <div className={style.leftActionBar}>
                    <div className={style.title}>
                        <button className={style.buttonIcon} onClick = {() => navigate(-1)}>
                            <DismissSquare24Regular />
                        </button>
                        <Text variant="xLarge" className={style.actionBarTitle}>Chi tiết tài sản</Text>
                    </div>
                    
                    <div className={style.actionButton}>
                        <button className={style.button} onClick={() => setShowAssetRecalPopup(true)}>
                            <PersonArrowLeft20Regular className={style.icon}/>
                            <span className={style.buttonTitle}>Thu hồi</span>
                        </button>
                        {/* {showAssetRecalPopup && <assetRecall onClose={() => setShowAssetRecalPopup(false)} />} */}
                        <button className={style.button}>
                            <PersonArrowRight20Regular className={style.icon}/>
                            <span className={style.buttonTitle}>Cấp phát</span>
                        </button>
                        <button className={style.button}>
                            <EditSettings20Regular className={style.icon}/>
                            <span className={style.buttonTitle}>Chỉnh sửa</span>
                        </button>
                        <button className={style.button}>
                            <BoxEdit20Regular className={style.icon}/>
                            <span className={style.buttonTitle}>Sửa chữa</span>
                        </button>
                        <button className={style.button}>
                            <History20Regular className={style.icon}/>
                            <span className={style.buttonTitle}>Bảo dưỡng</span>
                        </button>
                    </div>

                    <div className={style.rightActionButton}>
                        <button className={style.button}>
                            <Print20Regular />
                        </button>
                        <button className={style.button}>
                            <ArrowCounterclockwise20Regular />
                        </button>
                        <button className={style.button}>
                            <History20Regular />
                        </button>
                        <button className={style.button}>
                            <Comment20Regular />
                        </button>
                    </div>
                </div>
            </div>

            <div className={style.contentContainer}>
                <div className={style.general}>
                    <div className={style.h2}>
                        <h2>Thông tin chung</h2>
                    </div>
                    <div className={style.detail}>
                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <NumberSymbolSquare20Regular className={style.contentIcon}/>
                                <span className={style.span}>ID</span>
                            </div>
                                <Text className={style.valueText}>{asset?.maTaiSan}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <ScanText20Regular className={style.contentIcon}/>
                                <span className={style.span}>Tên tài sản</span>
                            </div>
                                <Text className={style.valueText}>{asset?.tenTaiSan}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <GroupList20Regular className={style.contentIcon}/>
                                <span className={style.span}>Nhóm tài sản</span>
                            </div>
                                <Text className={style.valueText}>{asset?.nhomTaiSan}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Tag20Regular className={style.contentIcon}/>
                                <span className={style.span}>Loại tài sản</span>
                            </div>
                                <Text className={style.valueText}>{asset?.loaiTaiSan}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Money20Regular className={style.contentIcon}/>
                                <span className={style.span}>Nguyên giá</span>
                            </div>                            
                                <Text className={style.valueText}>{asset?.nguyenGia.toLocaleString("vi-VN")}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Autosum20Regular className={style.contentIcon}/>
                                <span className={style.span}>Số lượng</span>
                            </div>                            
                                <Text className={style.valueText}>{''}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Location20Regular className={style.contentIcon}/>
                                <span className={style.span}>Địa điểm</span>
                            </div>                                
                                <Text className={style.valueText}>{asset?.diaDiem}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Location20Regular className={style.contentIcon}/>
                                <span className={style.span}>Bộ phận</span>
                            </div>                            
                                <Text className={style.valueText}>{asset?.boPhan}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Person20Regular className={style.contentIcon}/>
                                <span className={style.span}>Người quản lý</span>
                            </div>                            
                                <Persona className={style.valueText} text={asset?.nguoiQuanLy} style={{paddingTop: "8px", paddingBottom: "8px"}} size={PersonaSize.size32} />
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <PersonAccounts20Regular className={style.contentIcon}/>
                                <span className={style.span}>Chức vụ</span>
                            </div>                            
                                <Text className={style.valueText}>{''}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Attach20Regular className={style.contentIcon}/>
                                <span className={style.span}>Tài liệu</span>
                            </div>
                            
                                <ul className={style.valueText}>
                                    {''}
                                </ul>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Calendar20Regular className={style.contentIcon}/>
                                <span className={style.span}>Ngày mua</span>
                            </div>
                            
                                <Text className={style.valueText}>{''}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <CalendarClock20Regular className={style.contentIcon}/>
                                <span className={style.span}>Hạn bảo hành</span>
                            </div>                            
                                <Text className={style.valueText}>{''}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Status20Regular className={style.contentIcon}/>
                                <span className={style.span}>Trạng thái</span>
                            </div>                            
                                <Text className={style.valueText}>{''}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Status20Regular className={style.contentIcon}/>
                                <span className={style.span}>Lịch sử bảo dưỡng - sửa chữa</span>
                            </div>                            
                                <Text className={style.valueText}>{''}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Status20Regular className={style.contentIcon}/>
                                <span className={style.span}>Lịch sử kiểm kê gần nhất</span>
                            </div>                            
                                <Text className={style.valueText}>{''}</Text>
                        </div>
                    </div>
                </div>

                <div className={style.user}>
                    <div className={style.h2}>
                        <h2>Thông tin người tiếp nhận</h2>
                    </div>
                    <div className={style.detail}>
                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Person20Regular className={style.contentIcon}/>
                                <span className={style.span}>Tên người tiếp nhận</span>
                            </div>                            
                                <Persona className={style.valueText} text={asset?.nguoiSuDung || "Chưa cấp phát"} size={PersonaSize.size32} />
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <GroupList20Regular className={style.contentIcon}/>
                                <span className={style.span}>Chức vụ</span>
                            </div>                            
                                <Text className={style.valueText}>{''}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <Calendar20Regular className={style.contentIcon}/>
                                <span className={style.span}>Ngày tiếp nhận</span>
                            </div>                            
                                <Text className={style.valueText}>{asset?.ngayTiepNhan || ""}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <PulseSquare20Regular className={style.contentIcon}/>
                                <span className={style.span}>Tình trạng</span>
                            </div>                            
                                <Text className={style.valueText}>{''}</Text>
                        </div>

                        <div className={style.itemBlock}>
                            <div className={style.spanContainer}>
                                <CalendarEdit20Regular className={style.contentIcon}/>
                                <span className={style.span}>Hạn bảo dưỡng</span>
                            </div>                            
                                <Text className={style.valueText}>{''}</Text>
                        </div>
                    </div>
                </div>
            </div>          
        </div>

        <div className={style.rightElements}>
            <div className={style.historyHeader}>
                <div className={style.historyTitle}>
                    <span style={{fontSize: "16px"}}>Lịch sử</span>
                    <ChevronDown20Regular />
                </div>
            </div>
            <div className={style.historyTable}>
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
                                        <Persona size={PersonaSize.size32} className={style.persona} />
                                        <span className={style.name}>Nguyễn Như Trọng</span>
                                        <span className={style.chucVu}>Nhân viên thực tập - Phòng Công Nghệ 1 - SPSVN</span>                                   
                                    </div>
                                </div>
                                <div className={style.iconWrapper}>
                                    <GroupReturn20Regular />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default AssetDetail;