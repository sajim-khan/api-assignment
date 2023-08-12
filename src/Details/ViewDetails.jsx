import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const singleDetails = useLoaderData();
  console.log(singleDetails);
  const { name, image, status, type, language, summary } = singleDetails || {};

  return (
    <div className="max-w-xs rounded-md shadow-md m-10 bg-gray-900 text-gray-100">
      <img
        src={
          image
            ? image?.medium
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
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
      </div>
    </div>
  );
};

export default ViewDetails;
