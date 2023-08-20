import React, { useState } from 'react';

const State = () => {

const [name, setName] = useState('g')

setTimeout(() => {
  setName();
}, 3000)
    return (
      <div className="m-10 p-5 bg-blue-600 text-white text-3xl">
        {/* <h1>Hello { name ? name : 'Guest'}</h1> */}
        {/* {name && <h1>Hello {name} </h1>}
        {!name && <h1>Hello Guest </h1>} */}
        {/* //ternary operator */}
        {name ? <h1>Hello {name} </h1> : <h1>Hello Guest </h1>}
      </div>
    );
};

export default State;
