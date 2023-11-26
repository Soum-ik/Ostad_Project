import { postLatest } from "../api/apiResuest";
import { useState, useEffect } from "react";
import BlogList from "../components/blogList";
import Layout from "../layout/Layout";
import LodingAnimation from "../components/loadingAnimation";
const Home = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postLatest();
      setList(res);
      console.log(res);
    })();
  }, []);

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
export default Home;
