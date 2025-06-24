import { makeStyles, tokens } from "@fluentui/react-components";

const InventoryDetailStyle = makeStyles(({
    detailPage: {
        width: "calc(100vw - 131px)",
        height: "calc(100vh - 118px)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "12px 24px",
        overflow: "hidden",
    },

    toolbar: {
        display: "flex",
        alignItems: "center",
        padding: "12px 0px",
        gap: "12px",
    },

    rotate: {
        transform: "rotate(90deg)",
     
    },

    toolbarBtn: {
        display: "flex",
        width: "32px",
        height: "32px",
        alignItems: "center",
        alignContent: "center",
        border: "1px solid #adadad",
        padding: "0px",
    },

    toolbarIcon: {
        boxSizing: "border-box",
        color: "#adadad",
        lineHeight: "24px",
    },

    toolbarTitle: {
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "22px",
    },

    detail: {
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        gap: "24px",
        overflow: "auto",
        scrollbarWidth: "thin",
    },

    general: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px"
    },

    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0",
    },

    title: {
        fontSize: "16px",
        fontWeight: 600,
        width: "440px",
    },

    generalInfo: {
        display: "flex",
    },

    text: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "18px",
        color: tokens.colorNeutralForeground3,
        width: "150px",
    },

    info: {
        fontSize: "14px",
        lineHeight: "18px",
        fontWeight: "400",
        color: tokens.colorNeutralForeground3,
    },

    persona: {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        gap: "8px",
    },

    headerCell: {
        // backgroundcolor: tokens.colorNeutralForeground2,
        backgroundColor: "#E4E3E3",
    },

    sum: {
        fontWeight: 600,
    },

    saveBtn: {
        width: "calc(100vw - 131px)",
        position: "fixed",
        bottom: "0",
        zIndex: 1,
        display: "flex",
        justifyContent: "flex-end",
        padding: "12px 0",
        backgroundColor: tokens.colorNeutralForegroundOnBrand,
    },
}))
export default InventoryDetailStyle