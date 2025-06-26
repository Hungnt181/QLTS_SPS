import { makeStyles } from "@fluentui/react-components";

const inventoryListStyle = makeStyles({
    inventoryPage: {
        width: "calc(100vw - 403px)",
        height: "calc(100vh - 50px)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        whiteSpace: "nowrap",
        flexDirection: "column",
        boxSizing: "border-box"
    },

    tableList : {
        width: "100%",
        height: "100%",
        overflowX: "auto",
        overflowY: "auto",
        boxSizing: "border-box",
        padding: "20px 0px 0px 0px",
        marginLeft: "20px"
    },

    smallTable: {
        width: "100vw",
        minWidth: "2100px",
        wordBreak: "break-word",
        boxSizing: "border-box",
        
    },

    hoverNameItem: {
        "&:hover" : {
            cursor: "pointer",
        },
    },
 
})
export default inventoryListStyle