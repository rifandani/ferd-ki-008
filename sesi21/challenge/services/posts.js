const BASE_URL = "http://192.168.100.21:5500/posts";
// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const resp = await fetch(BASE_URL);
  const posts = await resp.json();

  return posts;
};

export const postPost = async (newPost) => {
  const resp = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newPost),
  });
  await resp.json();
};

export const putPostById = async (postId, updatedPost) => {
  const resp = await fetch(`${BASE_URL}/${postId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(updatedPost),
  });
  await resp.json();
};

export const deletePostById = async (postId) => {
  const resp = await fetch(`${BASE_URL}/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  await resp.json();
};
