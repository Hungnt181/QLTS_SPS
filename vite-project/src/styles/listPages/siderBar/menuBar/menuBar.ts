import { makeStyles, tokens } from "@fluentui/react-components";

var mainColor = tokens.colorBrandBackgroundHover;
const menuBarStyle = makeStyles({
  menuBar: {
    width: "320px",
    height: "100%",
    backgroundColor: tokens.colorNeutralCardBackgroundPressed,
    boxShadow: "inset -4px 0 4px -4px rgba(0, 0, 0, 0.2)",
  },
  // Menubar  Header
  menuBarHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "calc(100% - 36px)",
    height: "26px",
    padding: "16px 16px 16px 20px",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  menuBarHeaderTitle: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "24px",
    color: tokens.colorNeutralForeground1,
  },
  menuBarHeaderIcon: {
    display: "flex",
    gap: "8px",
    "& > div": {
      width: "24px",
      height: "24px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px",
      cursor: "pointer",
      "&:hover": {
        color: mainColor,
      },
    },
  },

  // MenuBar Item
  menuBarContent: {
    width: "calc(100% - 20px)",
    height: "calc(100% - 68px)",
    padding: " 10px 10px 0 10px",
  },
  menuBarItem: {
    backgroundColor: tokens.colorNeutralCardBackgroundPressed,
    "&::after": {
      content: "none",
    },
  },
  menuBarItemActive: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: "4px",
    "& span": {
      color: mainColor,
    },
  },
  navCategory: {
    backgroundColor: tokens.colorNeutralCardBackgroundPressed,
  },
});

export default menuBarStyle;
