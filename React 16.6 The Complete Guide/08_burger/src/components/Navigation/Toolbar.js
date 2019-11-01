import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems";
import DrawerToogle from "../Navigation/SideDrawer";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToogle clicked={props.drawerToogleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
