import axios from "axios";

const BaseURL = "https://basic-blog.teamrabbil.com/api";

export async function postCategories() {
  let res = await axios.get(BaseURL + "/post-categories");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function postLatest() {
  let res = await axios.get(BaseURL + "/post-newest");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function postList(params) {
  let res = await axios.get(
    `https://basic-blog.teamrabbil.com/api/post-list/${params}`
  );
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function postDetails(params) {
  let res = await axios.get(
    `https://basic-blog.teamrabbil.com/api/post-details/${params}`
  );
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
