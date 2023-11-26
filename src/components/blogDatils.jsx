import React from "react";

function BlogDetails({ list }) {
  // Check if list and postDetails exist
//   if (!list || !list.postDetails) {
//     // Handle the case where postDetails is undefined
//     return <div>Error: postDetails not found</div>;
//   }

  const { postDetails } = list;

  console.log(postDetails, "blog details page");

  return (
    <div className="container mx-auto my-16 p-9">
      <div className="grid px-9 grid-cols-1 mt-2">
        <div className="card glass">
          <figure>
            {/* Check if img property exists before rendering */}
            {postDetails.img && <img src={postDetails.img} alt="" />}
          </figure>
          <div className="card-body">
            {/* Check if title property exists before rendering */}
            {postDetails.title && <h2 className="card-title">{postDetails.title}</h2>}
            {/* Check if content property exists before rendering */}
            {postDetails.content && <p>{postDetails.content}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
