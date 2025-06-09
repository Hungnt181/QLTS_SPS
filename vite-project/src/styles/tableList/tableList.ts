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

})

export default tableListStyle;