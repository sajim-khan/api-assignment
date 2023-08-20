import React from "react";

const Children = ({ increment, decrement }) => {

  return (
    <div className="ms-10">
      <button
        onClick={increment}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-5"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default Children;
