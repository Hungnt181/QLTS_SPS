import {makeStyles, tokens} from "@fluentui/react-components";
var mainColor = tokens.colorBrandStroke1
const headerStyle = makeStyles({
    header: {
        width: "100%",
        height: "48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
    },
    // div headerStart
    headerStart: {
        width: "30%",
        minWidth: "400px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    headerStartIcon: {
        width: "68px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    // --- div headerStartMennu
    headerStartMenu: {
        width: "320px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

    },
    headerStartName: {
        width: "48px",
        fontSize: "16px",
        fontWeight: "semibold",
        listStyle: "20px",
        alignItems: "center",
        color: mainColor,
    },

    //div headerCenter
    headerCenter: {
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    customField: {
        width: "80%",
        maxWidth: "720px",
    },

    //div headerEnd
    headerEnd: {
        width: "30%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    headerEndIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1px 12px",
    },

})
export {headerStyle}
export default headerStyle