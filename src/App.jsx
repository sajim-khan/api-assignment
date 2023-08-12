import React, { useEffect, useState } from "react";
import Details from "./Details/Details";
//import Details from "./Details/Details";

const App = () => {
  const [movieData, setmovieData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setmovieData(data);
      })
      .catch((error) => console.log(`404 page not found ${error}`));
  }, []);
  //console.log({ movieData });
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {movieData?.map((singleData, index) => (
          <Details key={index} singleData={singleData}></Details>
        ))}
      </div>
    </>
  );
};
export default App;

// <Details key={singleData.id} data={singleData}> </Details>
