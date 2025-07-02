import { makeStyles, tokens } from "@fluentui/react-components";
const AssetDetailNewStyle = makeStyles(({
    detailPage: {
        width: "calc(100vw - 68px)",
        height: "calc(100vh - 48px)",
        display: "flex",
        overflow: "hidden",
    },

    mainContent: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
        transition: "width 0.3s ease",
    },

    actionBar: {
        display: "flex",
        width: "100%",
        padding: "10px 8px 10px 24px",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        boxSizing: "border-box"
    },

    left: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    barTitle: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "nowrap",
        overflow: "hidden",
    },

    button: {
        border: "none",
        color: tokens.colorNeutralForeground4,
        flexShrink: 0,
    },

    title: {
        fontSize: "24px",
        lineHeight: "32px",
        margin: "0px",
        overflow: "hidden",
        flexWrap: "nowrap",
        textOverflow: "ellipsis",
        flexShrink: 1,
        fontWeight: "600",
        fontStyle: "normal",
    },

    actionBtn: {
        gap: "12px",
    },

    btn: {
        border: "none",
        fontSize: "14px",
        lineHeight: "16px",
        margin: "0",
    },

    iconBtn: {
        display: "flex",
        justifyItems: "flex-end",
        gap: "10px",
        alignItems: "center",
    },

    detail: {
        padding: "24px 12px",
        overflow: "auto",
        scrollbarWidth: "thin",
    },

    info: {
        padding: "0 12px",
        marginBottom: "24px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        border: "1px solid #eee"
    },

    table: {
        width: "100%",
        tableLayout: "fixed",
        padding: "12px",
    },

    titleDetail: {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "28px",
        padding: "12px 12px"
    },

    row: {
        width: "100%",
        verticalAlign: "top",
        padding: "12px"
    },

    text: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
        height: "38px",
        boxSizing: "border-box",
    },

    icon: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },

    right: {
        display: "flex",
        flexDirection: "column",
    },

    historyBox: {
        width: "36%",
        height: "100%",
        backgroundColor: "#fff",
        borderLeft: "1px solid #ddd",
        overflow: "hidden",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
    },

    historyTitle: {
        height: "32px",
        fontWeight: 600,
        lineHeight: "24px",
        display: "flex",
        alignItems: "center",
        fontSize: "16px",
        gap: "8px",
    },

    historyHeader: {
        borderBottom: "1px solid #eee",
        padding: "3.5px"
    },

    historyTable: {
        width: "100%",
        padding: "24px 12px",
        backgroundColor: "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflowX: "hidden",
        overflowY: "auto",
        gap: "10px",
    },

    history: {
        display: "flex",
        alignItems: "flex-start",
        padding: "10px 0px",
        position: "relative",
        width: "400px"
    },

    time: {
        width: "auto",
        fontSize: "12px",
        lineHeight: "20px",
        color: "#616161",
        textAlign: "left",
        position: "relative",
        marginRight: '20px'
    },
    timeContainer: {
        display: "flex",
        borderLeft: "2px dashed #b3b3b3",
        marginLeft: "11px",
        paddingRight: "10px",
        position: "relative",
        flex: "1 1 0%",
    },

    timeLine: {
        display: "block",
        borderTop: "1.5px dashed rgb(35, 123, 75)",
        marginBottom: "22px",
        width: "100%",
        borderRadius: "0px 4px 4px 0px",
    },

    iconWrapper: {
        height: "24px",
        width: "24px",
        top: "-10px",
        left: "-28px",
        borderRadius: "11px",
        backgroundColor: "#5B5FC7",
        color: "#fff",
        position: "absolute",
        zIndex: 1,
    },

    statusText: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        whiteSpace: "nowrap",
        backgroundColor: "#5B5FC7",
        color: "#fff",
        fontSize: "11px",
        padding: "2px 8px",
        borderRadius: "5px",
        zIndex: 1,
        lineHeight: "14px",
        fontWeight: 600,
        top: "-25px",
        left: "12px",
        width: "65px",
        border: "var(--colorPaletteLavenderBackground2)",
    },

    activities: {
        marginLeft: "18px",
        position: "relative",
        padding: "16px 12px 12px 12px",
        borderRadius: "0 4px 4px 0",
        backgroundColor: "#fff",
        display: "block",
    },

    historyInfo: {
        padding: "10px 0 2px"
    },

    persona: {
        alignSelf: "start",
        gridRowStart: "span 5"
    },

    chucVu: {
        fontSize: "12px"
    },

    historyText: {
        display: "inline-grid",
        gridAutoRows: "max-content",
        gridAutoFlow: "column",
        justifyContent: "start",
        gridTemplateColumns: "max-content [middle] auto"
    },

}))
export default AssetDetailNewStyle