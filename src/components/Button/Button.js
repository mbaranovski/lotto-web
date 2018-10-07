import React from "react";

const Button = ({children, large}) => (
  <div className={`button ${large ? "button--large" : "button--small"}`}>
    <div className="button__content">{children}</div>
  </div>
);

export default Button;
