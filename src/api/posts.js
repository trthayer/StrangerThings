import React from "react";
const cohort = "2211-FTB-ET-WEB-FT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohort}/`;

export const getAllPosts = async () => {
    try{
        const response = await fetch(`${APIURL}/posts`);
        const results = await response.json();
        const posts = results.data.posts;
        return posts;
        
    } catch (error){
        console.error(error);
        console.log("Whoops, no more stuff!");
    }
}

export const createNewPost = async (post, token) => {
    try {
      const response = await fetch(`${APIRUL}/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
//   export const updateEntirePost = async (postId, post, token) => {
//     try {
//       const response = await fetch(`${APIRUL}/posts/${postId}`, {
//         method: 'PUT',
//         body: JSON.stringify(post),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
  export const deletePost = async (postId) => {
    try {
      const response = await fetch(`${APIRUL}/posts/${postId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return { id: postId };
    } catch (error) {
      throw error;
    }
  };