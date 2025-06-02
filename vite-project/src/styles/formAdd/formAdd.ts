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
    }

}))
export default AddNewAssetStyle;