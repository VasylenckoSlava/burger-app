import React from "react";
import classes from "./Layout.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = props => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
