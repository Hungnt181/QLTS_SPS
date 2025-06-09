import { makeStyles, tokens } from "@fluentui/react-components";

var mainColor = tokens.colorNeutralBackground1
const assetDetailStyle = makeStyles(({
    detailPage: {
        display: "flex",
        alignItems:'start',
        width: "100%",
        position: "absolute",
        zIndex: 1,
        left: "0px",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "#fff",
        justifyContent: "center",
    },

    leftElements: {
        width: "75%",
        height: "100%",
        display: "flex",
        backgroundColor: "#fff",
        flexDirection: "column",
    },

    actionBar: { 
        display: "flex",
        justifyContent: "space-between",
        padding: "2px 8px 2px 24px",
        borderBottom: "1px solid #C7C7C7",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fff",
        boxSizing: "border-box",
    },

    leftActionBar: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        padding: "2px",
        alignItems: "center",
        margin: "2px",
    },

    title: {
        display: "flex",
        padding: "2px",
        gap: "8px",
        alignItems: "center",
        margin: "2px 42px 2px 2px",
    },

    buttonIcon: {
        fill: "#424242",
        width: "24px",
        height: "24px",
        border: "none",
        backgroundColor: "#fff",
        cursor: "pointer",
    },

    actionButton: {
        display: "flex",
        alignItems: "center",
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px",
        gap: "10px",
        border: "none",
        backgroundColor: "#fff",
    },

    rightActionButton: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginLeft: "auto",
    },

    contentContainer: {
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
        padding: "24px 12px",
        overflowY: "auto",
        overflowX: "hidden",
    },

    general: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        alignSelf: "stretch",
        borderRadius: "8px",
        background: "NeutralBackground1.Rest",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: "24px",
        padding: "8px 0px"
    },

    h2: {
        height: "32px",
        lineHeight: "28px",
        padding: "0 12px",
        marginBottom: "4px",
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        fontStyle: "normal",
    },

    detail: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "12px",
        flexShrink: 0,
        alignSelf: "stretch",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
    },

    itemBlock: {
        width: "100%",
        minHeight: "20px",
        height: "auto",
        display: "flex",
        alignItems: "center",
        alignSelf: "stretch",
        borderTop: "1px solid #E9E9E9",
        borderBottom: "1px solid #E9E9E9",
        padding: "8px",
        boxSizing: "border-box",
    },

    spanContainer: {
        display: "flex",
        alignItems: "center",
        width: "35%"
    },

    span: {
        fontSize: "14px",
    },

    valueText: {
        fontSize: "14px",
    },

    user: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        alignSelf: "stretch",
        padding: "8px",
        gap: "4px",
        borderRadius: "8px",
        background: "NeutralBackground1.Rest",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        boxSizing: "border-box",
    },

    rightElements: {
        width: "25%",
        height: "100%",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        overflowX: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
    },

    historyHeader: {
        width: "100%",
        display: "flex",
        padding: "10px 12px",
        alignItems: "center",
        borderLeft: "1px solid #C7C7C7",
    },

    historyTitle: {
        height: "32px",
        fontWeight: 600,
        lineHeight: "22px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
    },

    historyTable: {
        padding: "24px 12px",
        backgroundColor: "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderTop: "1px solid #C7C7C7",
        borderLeft: "1px solid #C7C7C7",
        flexGrow: 1,
        overflowY: "auto",
        gap: "10px",
    },

    history: {
        display: "flex",
        alignItems: "flex-start",
        padding: "10px 0px",
        position: "relative",
    },

    time: {
        width: "60%",
        fontSize: "12px",
        lineHeight: "20px",
        color: "#616161",
        textAlign: "left",
        position: "relative",
        marginRight: '20px' 
    },

    timeContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    },

    timeLine: {
        width: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
    },

    statusBox: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
    },

    iconWrapper: {
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        transform: "translate(-50%)",
        backgroundColor: "#5B5FC7",
        color: "#fff",
        border: "1px solid #c7c7c7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 3,
    },

    statusText: {
        width: "auto",
        whiteSpace: "nowrap",
        backgroundColor: "#5B5FC7",
        color: "#fff",
        fontSize: "12px",
        padding: "2px 8px",
        borderRadius: "5px",
        zIndex: 1,
        lineHeight: "16px",
        fontWeight: 600,
    },

    verticalLine: {
        position: "absolute",
        top: "24px",
        left: "50%",
        height: "100%",
        width: "1px",
        backgroundColor: "#4F46E5",
        transform: "translateX(-50%)",
        zIndex: 1,
    },

    activities: {
        flex: 1,
        backgroundColor: "#fff",
        padding: "16px",
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        borderTop: "1px dashed #979797",
        flexDirection: "column",
    },

    info: {
        flex: 1,
    },
}))
export default assetDetailStyle