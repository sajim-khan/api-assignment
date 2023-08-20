import React from 'react';

const Update = ({ upValue, downValue, upValueChanged, downValueChanged }) => {
  return (
    <div className="pb-5">
      <label className="ms-10 ">Increment</label>
      <input
        className="ms-5"
        type="number"
        value={upValue}
        onChange={upValueChanged}
      />
      <label className="m-10">Decrement</label>
      <input
        className="ms-5"
        type="number"
        value={downValue}
        onChange={downValueChanged}
      />
    </div>
  );
};

export default Update;