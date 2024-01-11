import React from "react"
import Card from "./Card"
import { useContext } from "react"
import { PostList as PostListData } from "../store/posts-list-store"

function PostList() {
  const { postList } = useContext(PostListData)
  return (
    <div>
      {postList.map((item) => {
        return <Card key={item.id} post={item} />
      })}
    </div>
  )
}

export default PostList
