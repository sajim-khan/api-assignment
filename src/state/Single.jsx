import React from 'react';

const Single = ({ single }) => {
    const { name, email, age, location } = single;
    const personNumber = index + 1;
    return (
      <div className="mb-10">
        <h1>{name}</h1>
        <h1 className="ms-5">{email}</h1>
        <h1>{age}</h1>
        <h1>{location}</h1>
      </div>
    );
};

export default Single;