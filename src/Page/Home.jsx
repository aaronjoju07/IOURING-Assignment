import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostForm from '../components/PostForm';
import { fetchPosts, createPost, updatePost, deletePost } from '../api/api';
import Cookies from 'js-cookie'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('John Doe');
  const [showPostForm, setShowPostForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigation = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      if (result.success) {
        setPosts(result.data);
      } else {
        console.error(result.message);
      }
    };
    getPosts();
  }, []);

  const handleEdit = (post) => {
    setSelectedPost(post);
    setShowPostForm(true);
  };

  const handleDelete = async (id) => {
    const result = await deletePost(id);
    if (result.success) {
      setPosts(posts.filter(post => post.id !== id));
    } else {
      console.error(result.message);
    }
  };

  const handleAddPost = async (newPost) => {
    let result;
    if (selectedPost) {
      result = await updatePost(selectedPost.id, newPost);
    } else {
      result = await createPost(newPost);
    }

    if (result.success) {
      setPosts(selectedPost ? posts.map(post => (post.id === selectedPost.id ? result.data : post)) : [...posts, result.data]);
      closePostForm();
    } else {
      console.error(result.message);
    }
  };

  const handleLogout = () => {
    // Handle logout logic (e.g., clear session, redirect to login page)
    alert('Logged out');
    Cookies.remove('user')
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
