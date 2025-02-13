import React, { useState, useEffect } from 'react';

const Header = ({ username, onLogout }) => (
    <header className="flex items-center justify-between bg-gray-100 bg-opacity-80 text-black p-4 fixed top-0 w-full z-10 backdrop-blur-md">
        <div className="font-semibold text-3xl text-indigo-500">Logo</div>
        <div className="flex items-center gap-4">
            <span>{username}</span>
            <button
                onClick={onLogout}
                className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white"
            >
                Logout
            </button>
        </div>
    </header>
);

const Footer = () => (
    <footer className="fixed bottom-0 w-full bg-gray-100 bg-opacity-80 text-black p-4 text-center backdrop-blur-md">
        <div>
            <a href="#" className="text-black font-semibold">Contact Us</a> | &copy; 2025 All Rights Reserved.
        </div>
    </footer>
);

const PostList = ({ posts, onEdit, onDelete }) => (
  <div className="overflow-y-auto max-h-[calc(100vh-120px)] p-4">
    {posts.map(post => (
      <div key={post.id} className="bg-white p-6 mb-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
        <p className="text-gray-700 mt-2">{post.body}</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => onEdit(post.id)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(post.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
);

const AddPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body, userId });
    setTitle('');
    setBody('');
    setUserId(1);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold text-gray-900">Add New Post</h2>
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
          className="w-full p-2 mt-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mt-4">
        <label htmlFor="userId" className="block text-gray-700">User ID</label>
        <input
          type="number"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-6 py-2 rounded mt-4"
      >
        Add Post
      </button>
    </form>
  );
};

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('John Doe');

  useEffect(() => {
    // Fetch posts from API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleEdit = (id) => {
    // Add logic to edit the post, maybe open a modal or navigate to an edit page.
    alert(`Edit post with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleAddPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
  };

  const handleLogout = () => {
    // Handle logout logic (e.g., clear session, redirect to login page)
    alert('Logged out');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pt-20">
      <Header username={username} onLogout={handleLogout} />
      
      <main className="flex-1 p-6">
        <AddPostForm onSubmit={handleAddPost} />
        <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
