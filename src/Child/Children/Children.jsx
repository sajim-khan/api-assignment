import React, { useState } from "react";

const Children = ({ incrementCount, decrementCount }) => {
  return (
    <div>
      <button
        onClick={incrementCount}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded ms-10 mr-5"
      >
        Increment
      </button>
      <button
        onClick={decrementCount}
        className="bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default Children;
