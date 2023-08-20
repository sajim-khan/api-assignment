import React from "react";

const Update = ({ incValue, decValue, handleIncValue, handleDecValue }) => {
  return (
    <div className="m-5">
      <label className="mr-3 ms-5">Increment</label>
      <input type="number" value={incValue} onChange={handleIncValue} />
      <label className="mx-3">Decrement</label>
      <input type="number" value={decValue} onChange={handleDecValue} />
    </div>
  );
};

export default Update;
