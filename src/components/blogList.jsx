import React from "react";
import { Link } from "react-router-dom";
import LodingAnimation from "../components/loadingAnimation";

export default function BlogList({ lists, state }) {
  console.log(state);
  return (
    <div>
      <div className=" container mx-auto my-18 p-9">
        <div className=" grid grid-cols-1 mt-20 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {lists.map((list, index) => {
            return (
              <Link to={""} key={index.toString()} className=" card glass">
                <figure>
                  <img src={list.img} alt="" />
                </figure>
                <div className=" card-body">
                  <h2 className=" card-title">{list.title}</h2>
                  <p className=" card-compact">{list.short}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
