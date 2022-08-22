import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";
import useClock from "./hooks/useClock";
import useNumberList from "./hooks/useNumberList";

function App() {
  const {hours,minutes,seconds}:any = useClock();
  const initialArray:number[]=[1,2,3];
  const initialArray2:number[]=[4,5]
  return (
    <div className="App">
      <Clock hours={hours} minutes={minutes} seconds={seconds}/>
      <List1 initialArray={initialArray}/>
      <List2 initialArray={initialArray2}/>
    </div>
  );
}

export default App;
