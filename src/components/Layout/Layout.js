import React from "react";
import classes from "./Layout.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const Layout = props => (
  <Auxiliary>
    <div>
      Toolbar, SideDrawer, Backdrop
      <main className={classes.Content}>{props.children}</main>
    </div>
  </Auxiliary>
);

export default Layout;
