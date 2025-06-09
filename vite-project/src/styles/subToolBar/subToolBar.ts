import {makeStyles, tokens} from "@fluentui/react-components";

const subToolBarStyle = makeStyles({
    subToolBar: {
        boxSizing:'border-box',
        width: "100%",
        height: "48px",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    },

    //
    subToolBarStart : {
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "50%",
    },
    //
    subToolBarEnd: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "50%",
        justifyContent: "end"
    },

    subToolBarEndBtnNoBorder: {
        border: "none",
        marginLeft: "10px",
    }

})

export default subToolBarStyle