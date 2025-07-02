import {makeStyles, tokens} from "@fluentui/react-components";

var mainColor = tokens.colorCompoundBrandForeground1
const AddNewAssetStyle = makeStyles(({
    addnewAsset: {
        // height: "600px",
    },
    formAdd: {
        minHeight: "600px",
        height: "80vh",
        padding: '0 6px 0'
    },
    editWdith: {
        maxWidth: "60rem",
        padding: '0px !important'
    },
    Formbutton: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: '20px !important',
        gridColumn: 'span 2'
    },
    closeBtn: {
        border: "none",
        padding: "0",
        display: "flex",
        justifyContent: "start",
        "&:hover": {
            backgroundColor: "transparent",
            color: mainColor,
        }
    },

    // form
    formTitle: {},
    formSection: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        padding: "0 20px",
        "& button": {
            minHeight: "20px !important",
            paddingLeft: "0px"
        }
    },

    dropdown: {
        display: "grid",
        width: "100%",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        gap: "2px",
    },

    formContent: {
        width: "calc(100% - 6px)",
        margin: '0',
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            width: "6px",
        },
        "&::-webkit-scrollbar-track": {
            background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "3px",
            "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.4)",
            }
        },
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(0, 0, 0, 0.2) transparent",
    },

    formSectionTitle: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "600",
        margin: "0 ",
        display: "block",
    },
    formDiv: {
        width: "100%",
        marginTop: "12px",
    },
    formLabel: {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: "400",
        color: tokens.colorNeutralForeground3,
        marginBottom: "8px",
    },
    formInput: {
        width: "100%",
        marginTop: "8px",
    },
    formAccordionItem: {
        marginTop: "12px",
    },
    //------
    formDivTow: {
        display: "grid",
        gap: "8px",
        gridTemplateColumns: "repeat(2, 1fr)",
    },

    selectDate: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",

    },

    formItem: {
        flex: 1,
        minWidth: "0",
    },

}))
export default AddNewAssetStyle;

// Css form master Data
const FormAddMasterDataStyle = makeStyles(({
    formAddSettingMaster: {
        minHeight: "600px",
        height: "60vh"
    },
    formAddSettingWitdh: {
        width: "600px"
    },
    textArea: {
        height: "200px"
    },
    //
    newField: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "8px",
        marginTop: "8px"
    },
    formSection: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        padding: "0",
        "& button": {
            minHeight: "20px !important",
            paddingLeft: "0px"
        }
    },
    fileInput: {
        width: "100%",
    },
    contentCardFooter: {
        width: "100%",
        height: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "8px"
    },
    contentCardFooterLine: {
        width: "45%",
        height: "10%",
        borderBottom: `2px solid ${mainColor}`,
    },
    contentCardFooterBtn: {
        color: mainColor,
        backgroundColor: "none",
    },
    Formbutton: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gridColumn: 'span 2'
    },
      formSectionTitle: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "600",
        margin: "0 ",
        display: "block",
        padding: "0px",
    },
}))
export {FormAddMasterDataStyle};

const FormRevoke = makeStyles(({
    itemInfo: {
        width: "100%",
        height: '36px',
        borderBottom: `1px solid ${tokens.colorNeutralBackground3Pressed}`,
        borderTop: `1px solid ${tokens.colorNeutralBackground3Pressed}`,
        display: "flex",
        alignItems: "center",
        marginBottom: "8px",
    },
    itemInfoIcon: {
        width: '50%',
        display: "flex",
        alignItems: "center",
        gap: "8px",
    }
}))
export {FormRevoke};

const FormAddNewInventoryDate = makeStyles(({
    addnewInvenDate: {
        // height: "600px",
    },
    formAdd: {
        minHeight: "600px",
        height: "80vh",
    },
    editWdith: {
        maxWidth: "60vw",
        minWidth: "600px",
    },
    Formbutton: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },
    closeBtn: {
        border: "none",
        padding: "0",
        display: "flex",
        justifyContent: "start",
        "&:hover": {
            backgroundColor: "transparent",
            color: mainColor,
        }
    },

    content: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        overflowX: "hidden",
    },

    // form
    formTitle: {},
    formSection: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        padding: "0",
        "& button": {
            minHeight: "20px !important",
            paddingLeft: "0px"
        }
    },

    dropdown: {
        display: "grid",
        width: "100%",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        gap: "2px",
    },

    formContent: {
        margin: "0",
        overflow: "hidden",
        height: "auto",
    },

    formSectionTitle: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "600",
        margin: "0 ",
        display: "block",
    },
    formDiv: {
        width: "100%",
        marginTop: "12px",
    },

    datePicker: {
        width: "100%",
        marginTop: "12px",
        display: "flex",
        flexDirection: "column",
    },

    formLabel: {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: "400",
        color: tokens.colorNeutralForeground3,
        marginBottom: "8px",
    },
    formInput: {
        width: "100%",
        marginTop: "8px",
    },
    formAccordionItem: {
        marginTop: "12px",
    },
    //------
    formDivTow: {
        display: "grid",
        gap: "8px",
        gridTemplateColumns: "repeat(2, 1fr)",
    },

    selectDate: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
    },

    formItem: {
        flex: 1,
        minWidth: "0",
    },

    list: {
        marginTop: "12px",
        height: "auto",

    },
}))
export {FormAddNewInventoryDate}

const FormAddNewInvenBoard = makeStyles(({

    formAdd: {
        minHeight: "500px",
        height: "80vh"
    },
    editWdith: {
        maxWidth: "40vw",
        minWidth: "400px",
    },

    formSectionTitle: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "600",
        margin: "0 ",
        display: "block"
    },

    formContent: {
        margin: "0",
    },

    formDiv: {
        width: "100%",
        marginTop: "12px"
    },

    formLabel: {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: "400",
        color: tokens.colorNeutralForeground3,
        marginBottom: "8px",
    },

    formInput: {
        width: "100%",
        marginTop: "8px",
    },

    Formbutton: {
        width: "200%",
        display: "flex",
        justifyContent: "space-between",
    },

    closeBtn: {
        border: "none",
        padding: "0",
        display: "flex",
        justifyContent: "start",
        "&:hover": {
            backgroundColor: "transparent",
            color: mainColor,
        }
    },

    textArea: {
        height: "200px"
    }
}))
export {FormAddNewInvenBoard}