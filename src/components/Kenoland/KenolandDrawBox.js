import React, { Component } from "react";
import kenolandLogo from "../../assets/images/draws/kenoland-divider.png";
import Button from "../Button/Button";
import * as PropTypes from "prop-types";

class KenolandDrawBox extends Component {
  state = {
    nextDrawTS: new Date().getTime() + 4 * 60 * 1000,
    timeLeft: 0
  };

  componentDidMount() {
    this.counter = setInterval(
      () =>
        this.setState(state => ({
          timeLeft: state.nextDrawTS - new Date().getTime()
        })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  render() {
    const { background, title, subTitle } = this.props;
    const { timeLeft } = this.state;
    return (
      <div className="draw-box__item kenoland-draw">
        <div
          className="columns flex  kenoland-draw__top"
          style={{ background }}
        >
          <div className="kenoland-draw__name">
            <div className="kenoland-draw__title kenoland-draw__title--big">
              {title}
            </div>
            <div className="kenoland-draw__sub-title">{subTitle}</div>
          </div>
        </div>

        <div className="columns flex kenoland-draw__bottom">
          <div>
            Next available draw:{" "}
            {timeLeft > 0
              ? `0${new Date(timeLeft).getMinutes()}:${new Date(
                  timeLeft
                ).getSeconds()}`
              : "0:00"}
          </div>
          <div className="flex kenoland-draw__bottom__prize">
            <div>
              <img
                className="kenoland-draw__bottom__draw-logo"
                src={kenolandLogo}
                alt=""
              />
            </div>
            <div>
              $<span className="kenoland-draw__bottom__prize--number">10</span>{" "}
              million
            </div>
          </div>
          <Button center large>
            <div className="kenoland-draw__bottom__bet-price">
              1 Quicky $1.00
            </div>
            <div>BET NOW</div>
          </Button>
        </div>
      </div>
    );
  }
}

KenolandDrawBox.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

export default KenolandDrawBox;
