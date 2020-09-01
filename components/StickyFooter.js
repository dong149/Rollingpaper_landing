import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: (props) => props.position ?? "fixed",
    margin: "0 auto",
    width: "calc(100vw - 32px)",
    maxWidth: "396px",
    bottom: "16px",
    textAlign: (props) => props.align ?? "left",
    boxSizing: "border-box",
    zIndex: 50,
  },
});
const StickyFooter = (props) => {
  const classes = useStyles(props);
  return <div className={classes.root}>{props.children}</div>;
};

export default StickyFooter;
