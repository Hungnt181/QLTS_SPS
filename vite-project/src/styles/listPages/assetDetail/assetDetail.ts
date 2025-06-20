import { makeStyles, tokens } from "@fluentui/react-components";

var mainColor = tokens.colorNeutralBackground1
const assetDetailStyle = makeStyles(({
    detailPage: {
        display: "flex",
        alignItems:'start',
        // width: "100%",

        // zIndex: 1,
        // left: "0px",
        // height: "100%",
        // overflowY: "auto",
        // overflowX: "hidden",
        // backgroundColor: "#fff",
        // justifyContent: "center",
        width: "100vw",
        height: "100vh",
    },

    leftElements: {
        width: "70%",
        height: "100%",
        display: "flex",
        backgroundColor: "#fff",
        flexDirection: "column",
    },

    actionBar: { 
        display: "flex",
        margin: "0",
        justifyContent: "space-between",
        padding: "0px 8px 0 5px",
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
        alignContent: "center",
        padding: "2px",
        gap: "6px",
        alignItems: "center",
        margin: "2px 42px 2px 2px",
    },

    actionBarTitle: {
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: "600",
        fontStyle: "normal",
    },

    buttonIcon: {
        display: "flex",
        width: "auto",
        height: "auto",
        fill: "#424242",
        border: "none",
        backgroundColor: "#fff",
        marginTop: "2px",
        cursor: "pointer",
        boxSizing: "border-box"
    },

    titleIcon: {
        width: "32px",
        height: "32px",
        display: "inline-block",
        color: tokens.colorNeutralForeground4
    },

    actionButton: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginTop: "3px"
    },

    icon: {
        margin: "4px 4px 0 8px",
        fontSize: "16px",
    },

    buttonTitle: {
        lineHeight: "20px",
        fontSize: "14px",
        color: "#424242",
        fontWeight: "400",
        marginTop: "5.5px"
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px",
        gap: "8px",
        border: "none",
        backgroundColor: "#fff",
    },

    iconButton: {
        marginTop: "4px"
    },

    rightActionButton: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginLeft: "auto",
        marginTop: "2.5px",
    },

    contentContainer: {
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
        flexShrink: 0,
        padding: "24px 12px",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarColor: "rgba(0, 0, 0, 0.2)",
        scrollbarWidth: "thin",
        paddingBottom: "130px",
    },

    contentIcon: {
        marginRight: "4px",
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
        padding: "0 12px",
        marginBottom: "4px",
        display: "flex",
        alignItems: "center",
        fontStyle: "normal",
    },

    contentContainerTitle: {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "28px"

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
        margin: "0",
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
        width: "30%",
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
        alignContent: "center",
        padding: "12px 12px 8px 12px",
        alignItems: "center",
        borderLeft: "1px solid #C7C7C7",
    },

    historyTitle: {
        height: "32px",
        fontWeight: 600,
        lineHeight: "24px",
        display: "flex",
        alignItems: "center",
        fontSize: "16px",
        gap: "8px"
    },

    historyTable: {
        width: "100%",
        padding: "24px",
        backgroundColor: "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
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

    info: {
        padding: "10px 0 2px"
    },

    persona: {
        alignSelf: "start",
        gridRowStart: "span 5"
    },

    name: {

    },

    chucVu: {
        fontSize: "12px"
    },

    text: {
        display: "inline-grid",
        gridAutoRows: "max-content",
        gridAutoFlow: "column",
        justifyContent: "start",
        gridTemplateColumns: "max-content [middle] auto"
    },
}))
export default assetDetailStyle