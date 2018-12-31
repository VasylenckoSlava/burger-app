import React from "react";
import Aux from "../../hoc/Aux";

const Layout = props => (
  <Aux>
    <div>
      Toolbar, SideDrawer, Backdrop
      <main>{props.children}</main>
    </div>
  </Aux>
);

export default Layout;
