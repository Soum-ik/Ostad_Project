import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { postDetails } from "../api/apiResuest";
import LodingAnimation from "../components/loadingAnimation";
import BlogDetils from "../components/blogDatils"


function DetailsPage() {
  const { postID } = useParams();
  const [list, setList] = useState(null);

console.log(list, "datisl pages ");

  useEffect(() => {
    (async () => {
      let res = await postDetails(postID);
      setList(res);
      console.log(res);
    })();
  }, [postID]);

  return (
    <Layout>
      {list === null ? (
        <LodingAnimation />
      ) : (
        <BlogDetils list={list}/>
      )}{" "}
    </Layout>
  );
}

export default DetailsPage;
