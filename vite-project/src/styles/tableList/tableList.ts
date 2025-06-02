import {makeStyles} from "@fluentui/react-components";

const tableListStyle = makeStyles({
    tableList : {
        maxWidth: "200%",
        minWidth: "calc(100% - 60px)",
        height: "calc(100% - 130px)",
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "20px 0px 0px 0px",
        marginLeft: "20px"
    },

    table: {
        width: "100%",
        minWidth: "3000px",
        maxHeight:"95%"
    },

})

export default tableListStyle;