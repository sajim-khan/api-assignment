import React, { useState } from 'react';

const State = () => {

const [name, setName] = useState('Sajim')

setTimeout(() => {
  setName();
}, 1000)
    return (
        <div className='m-10 p-5 bg-blue-600 text-white text-3xl' >
            <h1>Hello { name ? name : 'Guest'}</h1>
        </div>
    );
};

export default State;