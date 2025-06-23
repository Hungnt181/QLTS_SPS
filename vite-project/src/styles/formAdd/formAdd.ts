import {makeStyles, tokens} from "@fluentui/react-components";

var mainColor = tokens.colorCompoundBrandForeground1
const AddNewAssetStyle = makeStyles(({
    addnewAsset: {
        // height: "600px",
    },
    formAdd: {
        minHeight: "600px",
        height: "80vh"
    },
    editWdith: {
        maxWidth: "60vw",
        minWidth: "600px",
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
    },

    formSectionTitle: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "600",
        margin: "0 ",
        display: "block"
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
    textArea : {
        height: "200px"
    }
}))
export {FormAddMasterDataStyle}

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
        display: "block"
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
export  {FormAddNewInventoryDate}

const FormAddNewInvenBoard = makeStyles (({
    
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

    textArea : {
        height: "200px"
    }
}))
export {FormAddNewInvenBoard}