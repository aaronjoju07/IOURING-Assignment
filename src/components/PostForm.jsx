import React, { useState } from 'react';

// Add/Edit Post Form (Popup Modal)
const PostForm = ({ post, onSubmit, onClose }) => {
    const [title, setTitle] = useState(post ? post.title : '');
    const [body, setBody] = useState(post ? post.body : '');
    const [userId, setUserId] = useState(post ? post.userId : 1);
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ id: post?.id || Math.random(), title, body, userId });
      onClose();
    };
  
  return (
      <div className="fixed inset-0 bg-gray-100 bg-opacity-90 flex justify-center items-center z-20">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{post ? 'Edit Post' : 'Add New Post'}</h2>
              <div className="mt-4">
                  <label htmlFor="title" className="block text-gray-700">Title</label>
                  <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full p-2 mt-2 border border-gray-300 rounded"
                      required
                  />
              </div>
              <div className="mt-4">
                  <label htmlFor="body" className="block text-gray-700">Body</label>
                  <textarea
                      id="body"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="w-full h-auto p-2 mt-2 border border-gray-300 rounded"
                      required
                  />
              </div>
              <div className="mt-4">
                  {/* <label htmlFor="userId" className="block text-gray-700">User ID</label> */}
                  <input
                      type="number"
                      hidden
                      id="userId"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      className="w-full p-2 mt-2 border border-gray-300 rounded"
                      required
                  />
              </div>
              <div className="mt-4 flex justify-between">
                  <button
                      type="button"
                      onClick={onClose}
                      className="order border-black text-black px-2 py-1 rounded  hover:bg-black hover:text-white"
                  >
                      Close
                  </button>
                  <button
                      type="submit"
                      className="border border-indigo-500 text-indigo-500 px-2 py-1 rounded hover:bg-indigo-500 hover:text-white"
                  >
                      {post ? 'Save Changes' : 'Add Post'}
                  </button>
              </div>
          </form>
      </div>
  );
  };
  export default PostForm;