import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  initialArray: number[] ;
};
const List1 = (props: List1Props) => {
  const {list, appendStart,appendEnd , popStart,popEnd,clear,reset}= useNumberList(props.initialArray);
  const [num,setNum]= useState(0);
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">List 1</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element"><ul>{list.map((e:number)=><li>{e}</li>)}</ul></div>
      

      
      <input data-testid="list1-input" 
      value={num}
      onChange={(e:any)=>setNum(e.target.value)}
      />
      <button data-testid="list1-btn-append-start"
      onClick={()=>appendStart(num)}
      >
      AppendStart
      </button>
      <button data-testid="list1-btn-pop-end"
      onClick={()=>popEnd()}
      >
        Pop End
      </button>
      <button data-testid="list1-btn-clear"
      onClick={()=>clear(props.initialArray)}
      >
        Clear
      </button>
      <button data-testid="list1-btn-reset"
      onClick={()=>reset(props.initialArray)}
      >
        Reset
      </button>
    </div>
  );
};

export default List1;
