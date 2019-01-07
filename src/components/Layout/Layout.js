import React from "react";
<<<<<<< HEAD
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

const Layout = props => (
  <Aux>
=======
import classes from "./Layout.css";
import Auxiliary from "../hoc/Auxiliary/Auxiliary";

const Layout = props => (
  <Auxiliary>
>>>>>>> Added configuration for windows
    <div>
      Toolbar, SideDrawer, Backdrop
      <main className={classes.Content}>{props.children}</main>
    </div>
<<<<<<< HEAD
  </Aux>
=======
  </Auxiliary>
>>>>>>> Added configuration for windows
);

export default Layout;
