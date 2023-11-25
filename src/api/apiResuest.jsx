import axios from "axios";

const baseUrl = "https://basic-blog.teamrabbil.com/api/post-categories";

export async function postCatagory() {
  const response = await axios(baseUrl);
  if (response.status === 200) {
    return response.data;
  } else {
    console.log("Error:", response.status);
    return [];
  }
}

const postLsit = "https://basic-blog.teamrabbil.com/api/post-newest";
export async function postList() {
  const response = await axios(postLsit);
  if (response.status === 200) {
    return response.data;
  } else {
    console.log("Error:", response.status);
    return [];
  }
}
