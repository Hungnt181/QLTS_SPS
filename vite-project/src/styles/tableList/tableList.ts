import { makeStyles } from "@fluentui/react-components";

const tableListStyle = makeStyles({
    tableList: {
        width: '100%',
        height: 'calc(100% - 108px)',
    },
    table: {
    },

    tableRow: {

    },

    tableHeaderCell: {
        width: "200px"
    },

    tableScrollContainer: {
        overflowX: "auto",
        overflowY: "auto",
        minHeight: '33.5rem',
        minWidth: 'calc(100vh - 0px)',
        maxWidth: 'calc(100vh - 0px)',
    },
    smallTable: {
        width: "100%",
        minWidth: "1113px",
        maxHeight:"95%",
    },
    toolTip: {
        maxWidth: "300px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    hoverNameItem: {
        "&:hover" : {
            cursor: "pointer",
        }
    }

})

export default tableListStyle;