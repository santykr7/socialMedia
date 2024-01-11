import React, { createContext, useReducer } from "react"

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
})

const postListReducer = (currPostlist, action) => {
  let newPostList = currPostlist

  if (action.type === "DELETE_POST") {
    newPostList = currPostlist.filter(
      (post) => post.id !== action.payload.postId
    )
    console.log(newPostList)
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostlist]
  }
  return newPostList
}
//Use of reducer to maintain state
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostlist] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  )

  const addPost = (userId, postTitle, postContent, postReactions, postTags) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postContent,
        reaction: postReactions,
        userId: userId,
        tags: postTags,
      },
    })
    console.log(
      `${userId}, ${postTitle}, ${postContent}, ${postReactions}, ${postTags}`
    )
  }
  const deletePost = (postId) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: { postId },
    })
  }

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  )
}

//Default value for useReducer second args
const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "going to mumbai",
    body: "I'm in mumbai searching for job as full stack developer",
    reaction: 1,
    userId: "user-7",
    tags: ["job", "learning"],
  },
  {
    id: 2,
    title: "going to mumbai",
    body: "I'm in mumbai searching for job as full stack developer",
    reaction: 2,
    userId: "user-9",
    tags: ["job", "learning"],
  },
]

export default PostListProvider
