import React, { useState,  useEffect } from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { postList } from "../api/apiResuest";
import BlogList from "../components/blogList";
import LodingAnimation from "../components/loadingAnimation";


const Catagori = () => {
  const [list, setList] = useState(null);
  let { categoryID } = useParams();

  console.log("Catagory page ", list);

  useEffect(() => {
    (async () => {
      let res = await postList(categoryID);
      setList(res);
      console.log(res);
    })();
  }, [categoryID]);

  return (
    <Layout>
      {list === null ? (
        <LodingAnimation />
      ) : (
        <BlogList state={list} lists={list} />
      )}
    </Layout>
  );
};

export default Catagori;
