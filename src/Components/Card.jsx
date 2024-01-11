import React from "react"
import { MdDelete } from "react-icons/md"
import { PostList } from "../store/posts-list-store"
import { useContext } from "react"

function Card({ post }) {
  const { deletePost } = useContext(PostList)
  return (
    <div>
      <div className='card' style={{ width: "18rem" }}>
        <div className='card-body'>
          <h5 className='card-title'>{post.title}</h5>
          <span
            className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>

          <p className='card-text'>{post.body}</p>
          {post.tags.map((tag) => {
            return (
              <span key={tag} className='badge text-bg-primary'>
                {tag}
              </span>
            )
          })}
        </div>
        <div className='alert alert-success' role='alert'>
          Reacted by <b>{post.reaction} </b>people
        </div>
      </div>
    </div>
  )
}

export default Card
