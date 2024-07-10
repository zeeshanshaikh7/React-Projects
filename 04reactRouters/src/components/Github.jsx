import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState({})
  // useEffect(()=>{
  //     fetch('https://api.github.com/users/zeeshanshaikh7')
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  // },[])
  return (
    <>
      <div className="bg-gray-500 text-3xl text-white p-4 flex flex-col items-center">
        <div>Name: {data.name}</div>
        <div className="p-4"> Github Followers: {data.followers} </div>
        <img src={data.avatar_url} alt="" width={300} className="rounded-xl" />
        <a
          href={data.html_url}
          target="_blank"
          className="text-xl mt-5 px-4 py-2 bg-sky-400 rounded-lg shadow-lg hover:bg-sky-600"
        >
          Github
        </a>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/zeeshanshaikh7");
  return response.json();
};
