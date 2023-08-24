import React, { useEffect, useState } from 'react';
import Single from './Single';
import ClockPage from './ClockPage';

const State = () => {

const [state, setState] = useState({name : ''})
// const [name, setName] = useState('')


useEffect(() => {
  setTimeout(() => {
    setState({ name: "Sajim" });
    console.log("name changed");
  }, 3000);
  console.log("setTimeOut");
 }, [])





// const person = [
//   {
//     name: "John Doe",
//     age: 30,
//     email: "john.doe@example.com",
//     location: "New York, USA",
//   },
//   {
//     name: "Jane Smith",
//     age: 25,
//     email: "jane.smith@example.com",
//     location: "Los Angeles, USA",
//   },
//   {
//     name: "Michael Johnson",
//     age: 28,
//     email: "michael.johnson@example.com",
//     location: "Chicago, USA",
//   },
//   {
//     name: "Emily Brown",
//     age: 22,
//     email: "emily.brown@example.com",
//     location: "Houston, USA",
//   },
//   {
//     name: "Daniel Wilson",
//     age: 32,
//     email: "daniel.wilson@example.com",
//     location: "Miami, USA",
//   },
//   {
//     name: "Olivia Martinez",
//     age: 29,
//     email: "olivia.martinez@example.com",
//     location: "San Francisco, USA",
//   },
//   {
//     name: "William Taylor",
//     age: 31,
//     email: "william.taylor@example.com",
//     location: "Seattle, USA",
//   },
//   {
//     name: "Sophia Anderson",
//     age: 27,
//     email: "sophia.anderson@example.com",
//     location: "Boston, USA",
//   },
//   {
//     name: "Liam Garcia",
//     age: 24,
//     email: "liam.garcia@example.com",
//     location: "Dallas, USA",
//   },
//   {
//     name: "Ava Martinez",
//     age: 26,
//     email: "ava.martinez@example.com",
//     location: "Phoenix, USA",
//   },
// ];
  // const person = [];
    return (
      <div className="m-10 p-5 text-black">
        {/* <h1>Hello { name ? name : 'Guest'}</h1> */}
        {/* {name && <h1>Hello {name} </h1>}
        {!name && <h1>Hello Guest </h1>} */}
        {/* //ternary operator */}
        {state.name ? <h1 className='text-2xl font-bold'>Hello {state.name} </h1> : <h1>Hello Guest </h1>}
        <ClockPage></ClockPage>
      </div>
    );
};

export default State;


{/* {person.length > 0 ? (
            <ul>
              {/* <li>{ person[0].name}</li> */}
              {/* {person.map((single) => (
                // <li>{single.name}</li>
                <Single single={single}></Single>
              ))} */}
          //   </ul>
          // ) : <p>There is no data</p> } */}
          