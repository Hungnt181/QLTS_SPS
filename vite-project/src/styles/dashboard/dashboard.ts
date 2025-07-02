import { makeStyles, tokens } from "@fluentui/react-components";

var mainColor = tokens.colorNeutralBackground1
const dashboardStyle = makeStyles(({
    dashboardPage: {
        width: "calc(100vw - 403px)",
        height: "calc(100vh - 50px)",
        position: "relative",
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
    },

    toolBar: {
        display: "fixed",
    },

    contentContainer: {
        width: "100%",
        flex: "1 1 auto",
        gap: "24px",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarColor: "rgba(0, 0, 0, 0.2)",
        scrollbarWidth: "thin",
    },

    general: {
        display: "flex",
        gap: "24px",
        padding: "12px 24px"
    },

    generalContent: {
        maxHeight: "173px",
        width: "auto",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: "12px 0px",
        gap: "12px",
        flex: "1 0 0",
        alignItems: "flex-start",
        borderRadius: "8px",
        background: "var(--iOS-Neutral-Background-1-Rest, #FFF)",
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.12)",
    },

    generalContentTitle: {
        width: "100%",
        display: "flex",
        padding: "0px 8px",
        alignItems: "center",
        gap: "8px",
        boxSizing: "border-box",
    },
    genIcon: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "16px",
        height: "16px",
    },

    generalTitle: {
        flex: "1",
        whiteSpace: "wrap",
        overflow: "hidden",
        lineHeight: "18px",
        fontSize: "14px",
        fontWeight: "400",
        textOverflow: "ellipsis",
        margin: "0"
    },

    generalContentPrice: {
        width: "100%",
        height: "90px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
    },

    price: {
        fontSize: "12px",
        fontWeight: "600",
        textAlign: "center",
        lineHeight: "16px",
    },

    totalAsset: {
        display: "flex",
        padding: "0px 8px",
        alignItems: "flex-start"
    },

    total: {
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "14px",
    },

    chart: {
        flex: "1 1 100%",
        padding: "12px 24px",
        gap: "10px",
        minWidth: 0,
        "@media (min-width: 768px)": {
            flex: "1 1 48%",
        },
    },

    responsiveChart: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        justifyContent: "space-between",
        [`& > div`]: {
            flex: "1 1 100%",
        },
        [`@media (min-width: 1440px)`]: {
            flexWrap: "nowrap", // không xuống dòng
            justifyContent: "space-between",

            [`& > div`]: {
                flex: "1 1 50%", // mỗi chart chiếm ~nửa chiều rộng
            },
        },
    },

    chartTitle: {
        gap: "8px",
        padding: "4px 4px 0px 4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },

    title: {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "28px",
        margin: "0px",
    },

    p: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
    },
}))
export default dashboardStyle