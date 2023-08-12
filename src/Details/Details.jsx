import React from "react";
import { Link } from "react-router-dom";

const Details = ({ singleData }) => {
  const {
    image,
    name,
    type,
    language,
    status,
  } = singleData.show || {};

  return (
    <>
      <div className="max-w-xs rounded-md shadow-md m-10 bg-gray-900 text-gray-100">
        <img
          src={
            (image?.medium && image?.medium) ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
          }
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracki">Name: {name}</h2>
            <h2 className="text-3xl font-semibold tracki">Type: {type}</h2>
            <h2 className="text-3xl font-semibold tracki">
              Language: {language}
            </h2>
            <h2 className="text-3xl font-semibold tracki">Status: {status}</h2>
          </div>
          <Link to={`details/${singleData.show.externals.thetvdb}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-violet-400 text-gray-900"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Details;
