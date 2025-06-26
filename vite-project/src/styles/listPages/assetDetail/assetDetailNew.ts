import { makeStyles, tokens } from "@fluentui/react-components";
const AssetDetailNewStyle = makeStyles(({
    detailPage: {
        width: "100vw",
        height: "100vh",
        display: "flex",
    },

    actionBar: {
        display: "flex",
        width: "100%",
        margin: "0",
        height: "60px",
    },

    barTitle: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },

    titleIcon: {
        width: "32px",
        height: "32px",
        display: "inline-block",
        color: tokens.colorNeutralForeground4,
    },
}))
export default AssetDetailNewStyle