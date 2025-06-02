import {makeStyles, tokens} from "@fluentui/react-components";

const toolBarStyle = makeStyles({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "calc(100% - 40px)",
        height: "58px",
        padding: " 0 20px",
        borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    },
    //
    toolbarStart: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    },

    toolbarStartImage: {
        marginRight: "12px",
    },
    toolBarStartTitle: {
        fontSize: "18px",
        fontWeight: 700,
        alignItems: "center",
        lineHeight: "24px",
        paddingRight: "12px"
    },
    tabList: {
        height: "58px",

    },
    tabListItem: {
        width: "100%",
        height: "100%",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        alignItems: "center",
        "& .fui-Tab" : {
            height: "100%",
            padding : "0 12px"
        }
    },


})

export default toolBarStyle