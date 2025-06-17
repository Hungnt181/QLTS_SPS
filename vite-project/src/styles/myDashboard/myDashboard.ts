import {makeStyles, tokens} from "@fluentui/react-components";

const myDashboardStyles = makeStyles({
    // dashboard tool bar
    dashboardToolBar: {
        width: "calc(100vw - 68px)",
        height: "56px",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    },
    ToolBarLogo: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0 20px',
    },
    ToolBarLogoIcon: {
        width: '32px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: tokens.colorNeutralForeground2BrandHover,
        borderRadius: '4px',
    },
    iconColor: {
        color: tokens.colorBrandBackgroundInverted,
    },
    logoText: {
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '24px',
        color: tokens.colorNeutralForeground1
    },

    // dashboard content
    dashboardContent: {
        width: "calc(100vw - 108px)",
        height: "calc(100vh - 145px)",
        display: 'flex',
        flexDirection: 'column',
        maxHeight: "100vh",
        gap: '20px',
        overflowY: 'auto',
        padding: '20px',
    },
    // 1st Row
    fisrtRow: {
        width: '100%',
        // minHeight: '320px',
        // maxHeight: '400px',
        height: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
    },
    ///// calendar card
    calendarCard: {
        width: '75%',
        height: '100%',
        padding: '16px',
    },
    // calendar card header
    calendarCardHeader: {
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerBody1: {
        height: '32px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
    },
    CardHeaderLogo: {
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    CardHeaderLogoBtn: {
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        gap: '12px',
    },
    // Calendar Card Preview
    calendarCardPreview: {
        maxHeight: 'calc(100% - 32px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollbarGutter: 'stable',
        paddingRight: '18px',
        '&::-webkit-scrollbar': {
            width: '6px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#c1c1c1',
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#a8a8a8',
        },
    },
    cardPreviewItem: {
        margin: "0px 12px",
        width: 'calc(100% - 32px)',
        display: 'flex !important',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px 0',
        borderBottom: `1px solid ${tokens.colorNeutralStroke2}`
    },

    previewItemContent: {
        display: 'flex',
        gap: '12px',
    },
    contentTime: {
        minWidth: '72px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    startTime: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        color: tokens.colorNeutralForeground1,
        margin: '0',
    },
    duration: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '16px',
        color: tokens.colorNeutralForeground3,
        margin: '0',
    },

    line: {
        width: '4px',
        margin: '0 12px',
        borderRadius: '4px',
        backgroundColor: tokens.colorNeutralForeground2BrandHover,
    },

// basic info
    basicInfo: {
        width: 'calc(100% - 350px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    basicInfoTitle: {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
        color: tokens.colorNeutralForeground1,
        margin: '0',
    },
    location: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '16px',
        color: tokens.colorNeutralForeground3,
        margin: '0',
    },
    otherCount: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '16px',
        color: tokens.colorNeutralForeground3,
        margin: '0',
    },
    userProfile: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    },
// itemBtn
    itemBtn1: {
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
    },
    itemBtn: {
        width: '200px',
        display: 'flex',
        gap: '8px',
        height: '32px',
        alignSelf: 'stretch'
    },

    // Calendar Card Footer
    cardFooterBtn: {
        padding: '0',
        color: tokens.colorNeutralForeground3,
    },


    /// myProfile Card
    profileCard: {
        width: '25%',
        height: '100%',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
    },
    // profile card header
    //profile card preview
    profileCardPreview: {
        width: 'calc(100% - 32px)',
        height: 'calc(100% - 80px)',
        padding: '8px',
        borderRadius: '4px',
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },

    personalInfo: {
        width: '100%',
        height: 'calc(75% - 24px)',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '4px',
        alignItems: 'center',
        paddingTop: '24px',
        // justifyContent: 'center',
        gap: '12px',
        backgroundColor: tokens.colorBrandBackground2,
        marginBottom: `8px`,
    },
    personalInfoName: {
        width: '60%',
        minWidth: '120px',
        maxWidth: '150px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        backgroundColor: tokens.colorBrandBackground,
        color: 'white',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
    },
    personDepartment: {
        height: 'calc(25% - 12px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        justifyContent:'end'
    },

    //// 2nd Row
    secondRow: {
        width: '100%',
        height: '80%',
    },

    // Card works
    cardWorks: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
    },

    worksCardPreview: {
        width: '100%',
        height: 'calc(100% - 90px) !important',
        display: 'flex',
        margin: '0 auto !important',
        gap: '20px',
    },
// Card works chart
    cardWorksChart: {
        height: '95% !important',
        width: '25% !important',
    },
    donutChart: {
        height: '100%',
        width: '80%',
        maxWidth: '230px !important',
        alignItems: 'center',
        margin: '0 auto !important',
    },
// Card works list
    cardWorksList: {
        maxHeight: 'calc(100% - 32px) !important',
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollbarGutter: 'stable',
        paddingRight: '18px',
        '&::-webkit-scrollbar': {
            width: '6px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#c1c1c1',
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#a8a8a8',
        },
    },
    worksItem: {
        display: 'flex',
        width: 'calc(100% - 16px) !important',
        height: '56px',
        alignItems: 'center',
        // justifyContent: 'space-between',
        gap: '8px',
        padding: '16px 8px',
        borderRadius: '8px',
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        marginBottom: '8px',
    },
    worksItemIcon: {
        width: '20px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    worksItemContent: {
        width: 'calc(100% - 20px)',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemContentTitle: {
        fontSize: '16px',
        lineHeight: '20px',
        color: tokens.colorNeutralForeground1,
        margin: '0',
    },
    itemContentCategory: {
        fontSize: '14px',
        lineHeight: '20px',
        color: tokens.colorNeutralForeground3,
        marginTop: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },

    dueDate: {
        fontSize: '14px',
        lineHeight: '16px',
        display: 'flex',
        alignSelf: 'start'
    },
    isOverdue: {
        color: tokens.colorStatusDangerForeground1,
    },

    // Icon header Card
    icon: {
        color: tokens.colorNeutralForeground2BrandHover,
    },
    doingIcon: {
        color: tokens.colorBrandBackground,
    },
    completedIcon: {
        color: tokens.colorStatusSuccessBackground3,
    },
    dismissIcon: {
        color: tokens.colorStatusDangerForeground1,
    },
    title: {
        fontSize: '16px',
        fontWeight: 600,
        color: tokens.colorNeutralForeground1,
        margin: 0
    },
    btnNoneBorder: {
        border: 'none',
    }


})

export default myDashboardStyles;