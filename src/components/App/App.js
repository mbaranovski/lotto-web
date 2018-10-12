import React, { Component } from "react";
import Header from '../Header/Header';
import Divider from '../Divider/Divider';
import KenolandDivider from '../Kenoland/KenolandDivider';
import DrawBoxContainer from '../DrawBox/DrawBoxContainer';

class App extends Component {
  render() {
    return (
      <div className="columns main-layout">
        <div className="columns main-layout__container">
            <Header />
            <Divider blackText={"CHECK OUT"} greenText={"LATEST LOTTO RESULTS"} />
            <DrawBoxContainer />
            <KenolandDivider/>
            <Divider blackText={"NEVER LOSE A TICKET"} />
        </div>
      </div>
    );
  }
}

export default App;
