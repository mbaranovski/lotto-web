import React, { Component } from "react";
import Header from '../Header/Header';
import Divider from '../Divider/Divider';
import KenolandDivider from '../Kenoland/KenolandDivider';

class App extends Component {
  render() {
    return (
      <div className="main-layout">
        <div className="main-layout__container">
            <Header />
            <Divider blackText={"CHECK OUT"} greenText={"LATEST LOTTO RESULTS"} />
            <KenolandDivider/>
            <Divider blackText={"NEVER LOSE A TICKET"} />
        </div>
      </div>
    );
  }
}

export default App;
