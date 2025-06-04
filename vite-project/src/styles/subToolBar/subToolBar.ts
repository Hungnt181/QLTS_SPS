import {makeStyles, tokens} from "@fluentui/react-components";

const subToolBarStyle = makeStyles({
    subToolBar: {
        width: "calc(100% - 40px)",
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
    marginLeft: {
        marginLeft: "12px",
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
    },

    inPutSearch: {
        width : "250px"
    } ,
    SearchBox: {
        width: "100%",
    }

})

export default subToolBarStyle