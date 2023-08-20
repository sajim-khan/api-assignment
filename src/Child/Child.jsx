import React from 'react';

const child = () => {


    return (
        <div>
      <h1>Input</h1>
      <input onChange={handleIncValue} type="number" />
      <input onChange={handleIncValue} type="number" />
    </div>
    );
};

export default child;


