import React from "react";
import "./accordian.scss";

function Accordian() {
  return (
    <div className="accordian-body">
      <div className="accordian-container">
        <div className="accordian-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg" />
          <div className="accordian-card__head">Plotting Cat</div>
        </div>
        <div className="accordian-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg" />
          <div className="accordian-card__head">Angry Cat</div>
        </div>
        <div className="accordian-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG" />
          <div className="accordian-card__head">Curious Cat</div>
        </div>
        <div className="accordian-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg" />
          <div className="accordian-card__head">Prowling Cat</div>
        </div>
        <div className="accordian-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg" />
          <div className="accordian-card__head">Sleepy Cat</div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
