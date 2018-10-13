import React from "react";

const Button = ({children, large, center}) => (
  <div className={`button ${large ? "button--large" : "button--small"} ${center ? 'button--center' : ''}`}>
    <div className="button__content">{children}</div>
  </div>
);

export default Button;
