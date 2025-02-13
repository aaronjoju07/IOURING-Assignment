import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostForm from '../components/PostForm';
import { fetchPosts } from '../api/api';


// Home Page with Floating Action Button (FAB) and Modal for Add/Edit
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('John Doe');
  const [showPostForm, setShowPostForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigation = useNavigate();

  useEffect(() => {

    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    
    getPosts();
  }, []);

  const handleEdit = (post) => {
    setSelectedPost(post);
    setShowPostForm(true);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleLogout = () => {
    // Handle logout logic (e.g., clear session, redirect to login page)
    alert('Logged out');
    navigation('/login');
  };

  const closePostForm = () => {
    setShowPostForm(false);
    setSelectedPost(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pt-20">
      <Header username={username} onLogout={handleLogout} />
      
      <main className="flex-1 p-6">
        <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      </main>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => setShowPostForm(true)}
        className="fixed bottom-8 right-8 bg-indigo-500 text-white rounded-4xl p-3 shadow-lg hover:bg-indigo-600 z-10"
      >
        <span className="text-3xl">+</span>
      </button>

      {/* Post Add/Edit Form (Modal) */}
      {showPostForm && (
        <PostForm post={selectedPost} onSubmit={handleAddPost} onClose={closePostForm} />
      )}

      <Footer />
    </div>
  );
};

export default Home;
