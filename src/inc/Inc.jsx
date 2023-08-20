import React, { useState } from 'react';
import Children from '../Child/Children/Children';
import Update from '../update/Update';

const Inc = () => {
const [count, setCount] = useState(0)
const [incValue, setIncValue] = useState(30);
const [decValue, setDecValue] = useState(10);

function incrementCount() {
    setCount(count + incValue);
}
function decrementCount() {
    setCount(count - decValue);
}

function handleIncValue(e) {
  setIncValue(parseInt(e.target.value));
}

function handleDecValue(e) {
  setDecValue(parseInt(e.target.value));
}

    return (
      <div className="bg-cyan-500">
        <h1 className="m-10 font-bold">Counter: {count}</h1>
        <Update
          incValue={incValue}
          decValue={decValue}
          handleIncValue={handleIncValue}
          handleDecValue={handleDecValue}
        />
        <Children
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        ></Children>
      </div>
    );
};

export default Inc;

