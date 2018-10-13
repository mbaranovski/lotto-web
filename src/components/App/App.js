import React, { Component } from "react";
import Header from '../Header/Header';
import Divider from '../Divider/Divider';
import KenolandDivider from '../Kenoland/KenolandDivider';
import DrawBoxContainer from '../DrawBox/DrawBoxContainer';
import {LOWER_DRAWS_SETTINGS, UPPER_DRAWS_SETTINGS} from '../../settings';

class App extends Component {
  render() {
    return (
      <div className="columns main-layout">
        <div className="columns main-layout__container">
            <Header />
            <Divider blackText={"CHECK OUT"} greenText={"LATEST LOTTO RESULTS"} />
            <DrawBoxContainer settings={UPPER_DRAWS_SETTINGS} />
            <KenolandDivider/>
            <Divider blackText={'NEVER LOSE A TICKET'}/>
            <DrawBoxContainer settings={LOWER_DRAWS_SETTINGS} />

        </div>
      </div>
    );
  }
}

export default App;
