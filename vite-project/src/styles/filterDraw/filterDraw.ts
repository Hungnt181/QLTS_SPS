import {makeStyles, tokens} from "@fluentui/react-components";

const filterDrawStyle = makeStyles({
    filterDraw: {
        backgroundColor: "aqua",
        display: "flex",
    },

    //Drawer Body
    drawerBody: {
        marginBottom: '24px'
    },
    drawerBodyItem: {
        display: "flex",
        flexDirection: "column",
        gap: '8px',
        marginTop: '12px',
    },
    itemLabel: {

    },
    itemInput: {
        width: "100%",
    },

    itemSlider: {
        width: "100%",
        padding: '0px'
    },




    //Drawer Footer
     drawerFooter: {
        display: "flex",
        justifyContent: "space-between",
     }
})

export default filterDrawStyle