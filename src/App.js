import React, { Component } from "react";
import Layout from "./hoc/layout/Layout";
import BurgerBuiler from './container/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         <BurgerBuiler/>
        </Layout>
      </div>
    );
  }
}
export default App;
