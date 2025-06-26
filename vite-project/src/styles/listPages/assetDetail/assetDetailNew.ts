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
        width: "75%",
        overflow: "hidden",
    },

    actionBar: {
        display: "flex",
        width: "100%",
        padding: "10px 8px 10px 24px",
        alignItems: "center",
        borderBottom: "1px solid",
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

    right: {
        display: "flex",

    },
}))
export default AssetDetailNewStyle