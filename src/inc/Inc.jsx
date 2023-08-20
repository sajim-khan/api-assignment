import React, { useState } from "react";
import Children from "../Child/Children/Children";
import Update from "../update/Update";

const Inc = () => {
  const [count, setCount] = useState(0);
  const [upValue, setUpValue] = useState(10)
  const [downValue, setDownValue] = useState(5)

  function increment() {
    setCount(count + upValue);
  }
  function decrement() {
    setCount(count - downValue);
  }
  
  function upValueChanged(e) {
    setUpValue(parseInt(e.target.value))
  }
  function downValueChanged(e) {
    setDownValue(parseInt(e.target.value));
  }
  
  const a = count ?? 10;
  console.log('value of a' ,a);
  
  count && console.log('this is logical and', count);

  return (
    <div className="bg-cyan-500">
      <h1 className="m-10 pt-10 font-bold">Counter: {count}</h1>
      <Update
        upValue={upValue}
        downValue={downValue}
        upValueChanged={upValueChanged}
        downValueChanged={downValueChanged}
      ></Update>
      <Children increment={increment} decrement={decrement} />
    </div>
  );
};

export default Inc;
