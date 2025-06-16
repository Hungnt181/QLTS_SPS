import myDashboardStyles from "../../styles/myDashboard/myDashboard.ts";
import {
    ArrowRight12Regular,
    ArrowSyncCheckmark20Regular,
    Calendar20Regular,
    Calendar24Regular,
    CalendarToday20Regular,
    CheckmarkCircle16Filled,
    CircleHalfFill16Filled,
    Clock12Regular,
    DataHistogram24Filled,
    Desktop20Regular, DismissCircle16Filled,
    DocumentData20Regular,
    Filter20Regular,
    Grid20Regular,
    PersonCircle24Filled,
    TaskListSquareAdd24Regular,
    TaskListSquareLtr20Regular
} from "@fluentui/react-icons";
import {
    Avatar, Badge,
    Body1,
    Button,
    Card, CardFooter,
    CardHeader, CardPreview,
    Menu,
    MenuButton, MenuItem, MenuList,
    MenuPopover,
    MenuTrigger
} from "@fluentui/react-components";
import {DatePicker} from "@fluentui/react-datepicker-compat";
import {
    type ChartProps,
    DataVizPalette,
    DonutChart, getColorFromToken,
} from "@fluentui/react-charts";

// interfaces
interface Participant {
    idUser: string;
    name: string;
}

interface Participants {
    users: Participant[];
    otherCount: number;
    currentUserIncluded: boolean;
}

interface EventItem {
    id: string;
    timeLeft: string | null;
    startTime: string;
    duration: string;
    title: string;
    location: string;
    participants: Participants;
    hasActions: boolean;
}

interface DashboardData {
    events: EventItem[];
    tasks?: TaskItem[];
}

interface TaskItem {
    id: string;
    title: string;
    category: string;
    status: "Đang thực hiện" | "Hoàn thành" | "Từ chối";
    dueDate: string;
}

const MyDashBoard = () => {
    // style
    const style = myDashboardStyles()
    // Khởi tạo data
    const dataDashboard = {
        "events": [
            {
                "id": "e01",
                "timeLeft": "Còn 5 phút",
                "startTime": "11:30",
                "duration": "30 phút",
                "title": "[SALE-Toàn quốc] - Review công việc tuần",
                "location": "Online",
                "participants": {
                    "users": [
                        {"idUser": "u01", "name": "Mai"},
                        {"idUser": "u02", "name": "Hưng"},
                        {"idUser": "u03", "name": "Trang"}
                    ],
                    "otherCount": 10,
                    "currentUserIncluded": true
                },
                "hasActions": true
            },
            {
                "id": "e02",
                "timeLeft": null,
                "startTime": "15:00",
                "duration": "60 phút",
                "title": "Triển khai dự án PC1",
                "location": "Phòng họp tầng 1",
                "participants": {
                    "users": [
                        {"idUser": "u02", "name": "Hưng"},
                        {"idUser": "u04", "name": "Lan"},
                        {"idUser": "u05", "name": "Minh"}
                    ],
                    "otherCount": 5,
                    "currentUserIncluded": true
                },
                "hasActions": false
            },
            {
                "id": "e03",
                "timeLeft": "Còn 10 phút",
                "startTime": "13:00",
                "duration": "45 phút",
                "title": "Đào tạo phần mềm mới",
                "location": "Online",
                "participants": {
                    "users": [
                        {"idUser": "u06", "name": "Tú"},
                        {"idUser": "u07", "name": "Phương"}
                    ],
                    "otherCount": 7,
                    "currentUserIncluded": false
                },
                "hasActions": true
            },
            {
                "id": "e04",
                "timeLeft": null,
                "startTime": "16:30",
                "duration": "90 phút",
                "title": "Họp ban giám đốc",
                "location": "Phòng họp tầng 2",
                "participants": {
                    "users": [
                        {"idUser": "u08", "name": "Giám đốc A"},
                        {"idUser": "u09", "name": "Giám đốc B"}
                    ],
                    "otherCount": 0,
                    "currentUserIncluded": false
                },
                "hasActions": false
            },
            {
                "id": "e05",
                "timeLeft": "Còn 15 phút",
                "startTime": "09:00",
                "duration": "20 phút",
                "title": "Check-in đầu ngày",
                "location": "Online",
                "participants": {
                    "users": [
                        {"idUser": "u10", "name": "Quang"},
                        {"idUser": "u11", "name": "Linh"},
                        {"idUser": "u02", "name": "Hưng"}
                    ],
                    "otherCount": 20,
                    "currentUserIncluded": true
                },
                "hasActions": true
            },
            {
                "id": "e06",
                "timeLeft": null,
                "startTime": "17:45",
                "duration": "15 phút",
                "title": "Kết thúc ngày làm việc",
                "location": "Online",
                "participants": {
                    "users": [
                        {"idUser": "u02", "name": "Hưng"},
                        {"idUser": "u12", "name": "My"}
                    ],
                    "otherCount": 3,
                    "currentUserIncluded": true
                },
                "hasActions": false
            }
        ],
        "tasks": [
            {
                "id": "task001",
                "title": "Hoàn thiện figma cho màn hình chính",
                "category": "Công việc",
                "status": "Đang thực hiện",
                "dueDate": "14/06 09:30"
            },
            {
                "id": "task002",
                "title": "Thiết kế giao diện QLTS",
                "category": "Quy trình",
                "status": "Hoàn thành",
                "dueDate": "14/06 09:30"
            },
            {
                "id": "task003",
                "title": "Dịch đa ngôn ngữ tiếng Nhật",
                "category": "Công việc",
                "status": "Từ chối",
                "dueDate": "11/06 09:30"
            },
            {
                "id": "task004",
                "title": "Văn bản quy định chấm công",
                "category": "Văn bản",
                "status": "Đang thực hiện",
                "dueDate": "14/06 09:30"
            },
            {
                "id": "task005",
                "title": "Biên bản thanh lý",
                "category": "Văn bản",
                "status": "Hoàn thành",
                "dueDate": "14/06 09:30"
            }
        ]
    };
    localStorage.setItem('dataDashboard', JSON.stringify(dataDashboard));

    const data = localStorage.getItem('dataDashboard');
    const allData: DashboardData = data ? JSON.parse(data) : {};

    // data chart
    const points = [
        {
            legend: "Quá hạn",
            data: 15,
            color: getColorFromToken(DataVizPalette.color1),
            xAxisCalloutData: "2020/04/30",
        },
        {
            legend: "Hôm nay",
            data: 20,
            color: getColorFromToken(DataVizPalette.color2),
            xAxisCalloutData: "2024/04/20",
        },
        {
            legend: "Hoàn thành",
            data: 85,
            color: getColorFromToken(DataVizPalette.color3),
            xAxisCalloutData: "2024/04/20",
        },
    ];

    const dataChart: ChartProps = {
        chartTitle: "Donut chart basic example",
        chartData: points,
    };
    return (
        <>
            <div className={style.dashboardToolBar}>
                <div className={style.ToolBarLogo}>
                    <div className={style.ToolBarLogoIcon}>
                        {<DataHistogram24Filled className={style.iconColor}/>}
                    </div>
                    <div className={style.logoText}>
                        Dashboard
                    </div>
                </div>
            </div>
            <div className={style.dashboardContent}>
                {/*1st Row*/}
                <div className={style.fisrtRow}>
                    {/*// Card 1: Thông tin lịch họp*/}
                    <Card className={style.calendarCard}>
                        <CardHeader
                            className={style.calendarCardHeader}
                            header={
                                <Body1 className={style.headerBody1}>
                                    <div className={style.CardHeaderLogo}>
                                        <div>
                                            {<Calendar24Regular className={style.icon}/>}
                                        </div>
                                        <p className={style.title}>Lịch</p>
                                    </div>
                                    <div className={style.CardHeaderLogoBtn}>
                                        <Button icon={<CalendarToday20Regular/>} className={style.btnNoneBorder}>
                                            Hôm nay
                                        </Button>
                                        <Menu>
                                            <MenuTrigger disableButtonEnhancement>
                                                <MenuButton className={style.btnNoneBorder}>Thứ 4,
                                                    12/06/2025</MenuButton>
                                            </MenuTrigger>

                                            <MenuPopover>
                                                <DatePicker placeholder="Chọn ngày tìm kiếm"
                                                />
                                            </MenuPopover>
                                        </Menu>
                                        <Menu>
                                            <MenuTrigger disableButtonEnhancement>
                                                <MenuButton icon={<Filter20Regular/>}
                                                            className={style.btnNoneBorder}></MenuButton>
                                            </MenuTrigger>

                                            <MenuPopover>
                                                <MenuList>
                                                    <MenuItem>Tất cả</MenuItem>
                                                    <MenuItem>SP365</MenuItem>
                                                    <MenuItem>OutLook</MenuItem>
                                                </MenuList>

                                            </MenuPopover>
                                        </Menu>
                                    </div>
                                </Body1>
                            }
                        />
                        <CardPreview className={style.calendarCardPreview}>
                            {allData.events.map((event: EventItem) => {
                                return (
                                    <div key={event.id} className={style.cardPreviewItem}>
                                        <div>
                                            {event.timeLeft ? (
                                                    <Badge appearance="tint"
                                                           icon={<Clock12Regular/>}>{event?.timeLeft}</Badge>
                                                ) :
                                                null
                                            }
                                        </div>
                                        <div className={style.previewItemContent}>
                                            <div className={style.contentTime}>
                                                <p className={style.startTime}>{event?.startTime}</p>
                                                <p className={style.duration}>{event?.duration}</p>
                                            </div>
                                            <div className={style.line}>

                                            </div>
                                            <div className={style.basicInfo}>
                                                <h5 className={style.basicInfoTitle}> {event?.title} </h5>
                                                <p className={style.location}>{event?.location}</p>
                                                <div className={style.userProfile}>
                                                    {
                                                        event.participants.users.map((user: Participant) => (
                                                            <span key={user.idUser}>
                                                                    <Avatar size={20} name={user?.name}/>
                                                                </span>
                                                        ))
                                                    }
                                                    {event?.participants?.otherCount > 0 ? (
                                                        <p className={style.otherCount}>Bạn cùng
                                                            với {event?.participants?.otherCount} tham
                                                            gia</p>) : null}

                                                </div>
                                            </div>
                                            {event.hasActions && (
                                                <div className={style.itemBtn1}>
                                                    <div className={style.itemBtn}>
                                                        <Button appearance="primary" size="medium">Phê duyệt</Button>
                                                        <Button size="medium">Từ chối</Button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </CardPreview>
                        <CardFooter>
                            <Button className={style.cardFooterBtn} appearance="transparent"
                                    icon={<ArrowRight12Regular/>} iconPosition={"after"}>
                                Xem tất cả
                            </Button>
                        </CardFooter>
                    </Card>

                    {/*// Card 2: Thông tin cá nhân*/}
                    <Card className={style.profileCard}>
                        <CardHeader
                            header={
                                <Body1 className={style.headerBody1}>
                                    <div className={style.CardHeaderLogo}>
                                        <div>
                                            {<PersonCircle24Filled className={style.icon}/>}
                                        </div>
                                        <p className={style.title}>Tài khoản của tôi</p>
                                    </div>
                                </Body1>
                            }
                        />
                        <CardPreview className={style.profileCardPreview}>
                            <div>
                                <div className={style.personalInfo}>
                                    {/*//avatar*/}
                                    <Avatar size={64} name="Nguyễn Anh"/>
                                    {/*name*/}
                                    <div className={style.personalInfoName}>
                                        Nguyễn Văn Anh
                                    </div>
                                    {/*email*/}
                                    <p className={style.startTime}>
                                        anhvn@spsvn.com
                                    </p>
                                </div>
                                <div>
                                    <p className={style.title}>Nhân viên thực tập</p>
                                    <p className={style.startTime}>SPSVN - Phòng công nghệ</p>
                                </div>
                            </div>
                        </CardPreview>

                    </Card>
                </div>

                {/*2nd Row*/}
                <div className={style.secondRow}>
                    <Card className={style.cardWorks}>
                        <CardHeader
                            className={style.calendarCardHeader}
                            header={
                                <Body1 className={style.headerBody1}>
                                    <div className={style.CardHeaderLogo}>
                                        <div>
                                            {<TaskListSquareAdd24Regular className={style.icon}/>}
                                        </div>
                                        <p className={style.title}>Nhiệm vụ</p>
                                    </div>
                                    <div className={style.CardHeaderLogoBtn}>
                                        <Menu>
                                            <MenuTrigger disableButtonEnhancement>
                                                <MenuButton icon={<Filter20Regular/>}
                                                            className={style.btnNoneBorder}></MenuButton>
                                            </MenuTrigger>
                                            <MenuPopover>
                                                <MenuList>
                                                    <MenuItem icon={<Grid20Regular/>}>Tất cả</MenuItem>
                                                    <MenuItem icon={<ArrowSyncCheckmark20Regular/>}>Quy trình</MenuItem>
                                                    <MenuItem icon={<TaskListSquareLtr20Regular/>}>Công việc</MenuItem>
                                                    <MenuItem icon={<Desktop20Regular/>}>Dự án</MenuItem>
                                                    <MenuItem icon={<Calendar20Regular/>}>Lịch</MenuItem>
                                                    <MenuItem icon={<DocumentData20Regular/>}>Văn bản</MenuItem>
                                                </MenuList>

                                            </MenuPopover>
                                        </Menu>
                                    </div>
                                </Body1>
                            }
                        />
                        <CardPreview className={style.worksCardPreview}>
                            <div className={style.cardWorksChart}>
                                <DonutChart
                                    className={style.donutChart}
                                    culture={
                                        typeof window !== "undefined" ? window.navigator.language : "en-us"
                                    }
                                    data={dataChart}
                                    innerRadius={85}
                                    // href={"https://developer.microsoft.com/en-us/"}
                                    legendsOverflowText={"overflow Items"}
                                    hideLegend={false}
                                    height={100}
                                    valueInsideDonut={'15%'}
                                />
                            </div>
                            <div className={style.cardWorksList}>
                                {
                                    allData.tasks?.map((task: TaskItem) => {
                                        return (
                                            <div key={task.id} className={style.worksItem}>
                                                <div className={style.worksItemIcon}>
                                                    {
                                                        task.status === "Đang thực hiện" ? (
                                                            <CircleHalfFill16Filled className={style.doingIcon}/>
                                                        ) : task.status === "Hoàn thành" ? (
                                                            <CheckmarkCircle16Filled className={style.completedIcon}/>
                                                        ) : (
                                                            <DismissCircle16Filled className={style.dismissIcon}/>
                                                        )
                                                    }
                                                </div>
                                                <div className={style.worksItemContent}>
                                                    <div>
                                                        <div className={style.itemContentTitle}>
                                                            {task.title}
                                                        </div>
                                                        <div className={style.itemContentCategory}>
                                                            <span>

                                                            {
                                                                task.category === "Công việc" ? (
                                                                    <TaskListSquareLtr20Regular className={style.icon}/>
                                                                ) : task.category === "Quy trình" ? (
                                                                    <ArrowSyncCheckmark20Regular className={style.icon}/>
                                                                ) : task.category === "Dự án" ? (
                                                                    <Desktop20Regular className={style.icon}/>
                                                                ) : task.category === "Văn bản" ? (
                                                                    <DocumentData20Regular className={style.icon}/>
                                                                ) : task.category === "Văn bản" ? (
                                                                    <DocumentData20Regular className={style.icon}/>
                                                                ) : null
                                                            }
                                                            </span>
                                                            <span>{task.category}</span>
                                                        </div>
                                                    </div>
                                                    <div className={style.duration}>
                                                        {task.dueDate}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </CardPreview>
                        <CardFooter>
                            <Button className={style.cardFooterBtn} appearance="transparent"
                                    icon={<ArrowRight12Regular/>} iconPosition={"after"}>
                                Xem tất cả
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>


        </>
    );
};

export default MyDashBoard;