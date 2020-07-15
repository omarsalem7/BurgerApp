import React, { Component } from "react";
import Auxilirity from "../Auxilirity/Auxilirity";
import classes from "./Layout.module.css";
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';

class layout extends Component {
  state = {
    showDrawer: false,
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showDrawer: false });
  }
  sideDrawertoggleHandler = () => {
    this.setState((prevState) => {
      return { showDrawer: !(prevState.showDrawer) };
    });
  }

  render() {
    return (
      <Auxilirity>
        <Toolbar drawerToggleClicked={this.sideDrawertoggleHandler} />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showDrawer} />
        <main className={classes.content}>{this.props.children}</main>
      </Auxilirity>
    );
  }
}
export default layout;
