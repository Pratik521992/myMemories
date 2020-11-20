import React from "react";
import "./cake.scss";

function Cake() {
  return (
    <div className="app">
      <div className="msg-container">
        <h1>
          <span>"</span>
          <span>"</span>
        </h1>
      </div>
      <div className="cake">
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div className="candle">
          <div className="flame"></div>
        </div>
      </div>
    </div>
  );
}

export default Cake;
