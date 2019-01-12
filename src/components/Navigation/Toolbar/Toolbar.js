import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Tollbar.css";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar} height="80%">
      <div>MENU</div>
      <Logo />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
