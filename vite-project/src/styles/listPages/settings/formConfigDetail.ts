import {makeStyles, tokens} from "@fluentui/react-components";

var mainColor =  tokens.colorCompoundBrandForeground1
const formConfigDetailStyle = makeStyles(({
    formConfigDetailStyle: {
        width: "calc(100vw - 68px)",
        height: "calc(100vh - 49px)",
    },
    // ToolBar
    toolBar: {
        height: "48px",
        width: "calc(100% - 40px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid #e0e0e0",
    },
    // ToolBar Start
    toolBarStart: {
        height: "100%",
    },
    toolBarStartBtn: {
        height: "100%",
        border: "none",
    },
    toolBarH4: {
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "24px",
    },
    // ToolBar End
    toolBarEnd: {
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    toolBarEndBtn: {
        marginRight: "10px",
    },
    //// Content
    content: {
        width: "100%",
        height: "calc(100% - 48px)",
        overflowY: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    // Content Card
    contentCard: {
        width: "60%",
        height: "400px",
        padding: "20px",
        maxWidth:"800px",
        minWidth:"600px",
        maxHeight:"800px",
        minHeight:"400px",
        overflowY: "auto",
    },
    // // contentCardHeader: {
    contentCardHeader: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    contentCardHeaderWidth: {
        width: "100%",
        marginBottom: "8px",
    },
    // contentCardBody
    contentCardBody: {
        width: "100%",
        paddingBottom: "12px",
    },
    rowContentCardBody: {
        width: "100%",
        display: "flex !important",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    divInput :{
        width: "calc(50% - 20px)",
        margin: "0 auto",
    },
    divDropdown :{
        width: "100%",
        margin: "0",
    },
    // Content Card Footer
    contentCardFooter: {
        width: "100%",
        height: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contentCardFooterLine: {
        width: "45%",
        height: "10%",
        borderBottom: `2px solid ${mainColor}`,
    },
    contentCardFooterBtn: {
        color : mainColor,
        backgroundColor: "none",
    },



}))
export default formConfigDetailStyle