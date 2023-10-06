import { StageTimeWrapper } from "meteor/empirica:core";
import React from "react";

class timer extends React.Component {

  //https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
  fmtMSS = s => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }

  render() {
    const { remainingSeconds, player, stage } = this.props;

    const classes = ["seconds"];
    if (remainingSeconds <= 5) {
      classes.push("lessThan5");
    } else if (remainingSeconds <= 10) {
      classes.push("lessThan10");
    }

    if (remainingSeconds === 120) {
      player.round.set("alert", true)
    } 
    
    if (remainingSeconds === 30 && stage.name === "collaborate") {
      player.round.set("alert", true)
      player.set("alertType", "30 secs")
      
    }


    return (
      <div style={{
        textAlign: "center"
        , display: "flex"
        , flexDirection: "column"
      }}>
        <span><strong>Timer</strong></span>
        <span className={classes.join(" ")}>{this.fmtMSS(remainingSeconds)}</span>
      </div>
    );
  }
}

export default (Timer = StageTimeWrapper(timer));