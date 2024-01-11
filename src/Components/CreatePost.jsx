import React, { useContext } from "react"
import { useRef } from "react"
import PostListProvider, { PostList } from "../store/posts-list-store"

function CreatePost() {
  const { addPost } = useContext(PostList)
  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postContentElement = useRef()
  const postReactionsElement = useRef()
  const postTagsElement = useRef()

  const handlePostSubmit = (e) => {
    e.preventDefault()
    const userId = userIdElement.current.value
    const postTitle = postTitleElement.current.value
    const postContent = postContentElement.current.value
    const postReactions = postReactionsElement.current.value
    const postTags = postTagsElement.current.value.split(" ")

    addPost(userId, postTitle, postContent, postReactions, postTags)
  }

  return (
    <div>
      <form className='create-post' onSubmit={handlePostSubmit}>
        <div className='mb-3'>
          <label htmlFor='userID' className='form-label'>
            Enter User ID
          </label>
          <input
            type='text'
            ref={userIdElement}
            className='form-control'
            id='userID'
            placeholder='Input USER ID'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Post Title
          </label>
          <input
            type='text'
            ref={postTitleElement}
            className='form-control'
            id='title'
            placeholder='Input title'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='body' className='form-label'>
            Post content
          </label>
          <textarea
            rows={3}
            type='text'
            ref={postContentElement}
            className='form-control'
            id='body'
            placeholder='Input Content'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='reactions' className='form-label'>
            Number of reactions
          </label>
          <input
            type='text'
            className='form-control'
            ref={postReactionsElement}
            id='reactions'
            placeholder='How many people reacted'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='tags' className='form-label'>
            Enter multiple tags
          </label>
          <input
            type='text'
            ref={postTagsElement}
            className='form-control'
            id='tags'
            placeholder='Enter multiple tags using space'
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Post
        </button>
      </form>
    </div>
  )
}

export default CreatePost
