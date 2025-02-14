import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostForm from '../components/PostForm';
import { fetchPosts, createPost, updatePost, deletePost } from '../api/api';
import Cookies from 'js-cookie';
import PostCardSkeleton from '../components/PostCardSkeleton';
import Alert from '../components/Alert';

const PostList = React.lazy(() => import('../components/PostList'));

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const user = Cookies.get('user') ? Cookies.get('user').split('@')[0] : 'Guest';
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
      showAlert('success', 'Post deleted successfully');
    } else {
      console.error(result.message);
      showAlert('danger', 'Error deleting post');
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
      showAlert('success', selectedPost ? 'Post updated successfully' : 'Post added successfully');
    } else {
      console.error(result.message);
      showAlert('danger', 'Error saving post');
    }
  };

  const handleLogout = () => {
    Cookies.remove('user');
    navigation('/login', { replace: true });
  };  

  const closePostForm = () => {
    setShowPostForm(false);
    setSelectedPost(null);
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: '', message: '' });
    }, 5000); // Hide alert after 5 seconds
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pt-20">
      {/* Header */}
      <Header username={user} onLogout={handleLogout} />
      {/* Alert */}
      <div className='max-w-full'>
        {alert.show && (
          <Alert type={alert.type} message={alert.message} onClose={() => setAlert({ show: false, type: '', message: '' })} />
        )}
      </div>
      {/* Main */}
      <main className="flex-1 p-6">
        <div className="h-fit overflow-hidden">
          <Suspense fallback={<div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Array.from({ length: 12 }).map((_, index) => (
              <PostCardSkeleton key={index} />
            ))}
          </div>}>
            <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
          </Suspense>
        </div>
      </main>
      {/* Add Button */}
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
