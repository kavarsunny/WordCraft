import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

const PostList = () => {
  const { user } = useAuthContext()
  useEffect(() => {
    if (user) {
      getPosts()
    }
  }, [user])

  const [posts, setPosts] = useState(null)

  async function getPosts() {
    await axios
      .get(`http://localhost:8080/api/posts/`, {
        headers: {
          'Authorization': `Bearer ${user}`
        }
      })
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-8 my-6">
      {posts &&
        posts.map((post, index) => {
          return (
            <div
              className="card card-compact bg-gray-200 shadow-xl my-4"
              key={index}
            >
              <figure className="pt-4"> {/* Added padding-top to the image */}
                <img
                  alt="Post"
                  src={post.img}
                  className="max-h-36 object-cover rounded-[15%]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mx-auto font-bold">{post.title}</h2> {/* Only title is bold */}
                <p className="max-h-32 overflow-hidden text-justify mx-4 my-4 rounded-xl">
                  {post.body}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/posts/${post._id}`}>
                    <button className="btn btn-primary">Read Article</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default PostList
