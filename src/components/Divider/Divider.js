import React from "react";
import divider from "../../assets/images/divider.jpg";

const Divider = ({ blackText, greenText }) => (
  <div className="divider">
    <div className="divider__text">
      {blackText ? (
        greenText ? (
          <div className="divider__text divider__text--align">
            <div>
              {blackText}
              &nbsp;
            </div>
            <div className="divider__text divider__text--green">
              {" "}
              {greenText}
            </div>
          </div>
        ) : (
          <div className="divider__text--align">{blackText}</div>
        )
      ) : greenText ? (
        <div className="divider__text divider__text--green divider__text--align">
          {greenText}
        </div>
      ) : null}
    </div>
    <div>
      <img
        data-testid="divider-image"
        className="divider__image"
        src={divider}
        alt=""
      />
    </div>
  </div>
);

export default Divider;
