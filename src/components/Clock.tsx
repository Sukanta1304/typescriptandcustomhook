import React from "react";

type Props = {
  hours: string;
  minutes:string;
  seconds:string
};

const Clock = (props: Props) => {
  //console.log(props)
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        24 Hours Live Custom Component Clock
      </h4>
      <span data-testid="clock-hours">
        {props.hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {props.minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {props.seconds}
        </span>
    </div>
  );
};

export default Clock;
