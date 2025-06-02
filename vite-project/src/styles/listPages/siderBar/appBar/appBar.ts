import {makeStyles, tokens} from "@fluentui/react-components";

var mainColor = tokens.colorCompoundBrandForeground1
const appBarStyle = makeStyles({
    // AppBar styles
    appBar: {
        width: "68px",
        height: "calc(100vh - 48px)",
        backgroundColor: tokens.colorNeutralBackground2Hover,
        boxShadow: "inset -4px 0 4px -4px rgba(0, 0, 0, 0.2)",
        "::after": {
            content: '""',
            display: "block",
            width: "2px",
            height: "1px",
            backgroundColor: "black",
        },
    },
    appBarItem: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "68px",
        height: "56px",
        cursor: "pointer",
        "&:hover": {
            borderRadius: "4px",
            color: mainColor,
            // "& $appBarItemTitle": {
            //     color: `${mainColor} !important`,
            // },
        },
    },
    // appBarItemIcon
    appBarItemIcon: {
        // color: tokens.colorNeutralStrokeAccessible,
    },
    // appBarItemTitle
    appBarItemTitle: {
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: "14px",
        // color: tokens.colorNeutralStrokeAccessible,
    },

    // active Item
    appBarItemActiveParent: {
        color: mainColor,
        "::after": {
            content: '""',
            display: "block",
            width: "3px",
            height: "48px",
            backgroundColor: mainColor,
            position: "absolute",
            top: "0",
            left: "1px",
            borderRadius: "2px",
            alignItems: "center"
        }
    },
    appBarItemActive: {
        color: mainColor,
    },

})

export default appBarStyle