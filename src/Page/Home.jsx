import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostForm from '../components/PostForm';
import { fetchPosts, createPost, updatePost, deletePost } from '../api/api';
import Cookies from 'js-cookie';
import PostCardSkeleton from '../components/PostCardSkeleton';

const PostList = React.lazy(() => import('../components/PostList'));

const Home = () => {
  const [posts, setPosts] = useState([]);
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
    alert('Logged out');
    Cookies.remove('user');
    navigation('/login');
  };

  const closePostForm = () => {
    setShowPostForm(false);
    setSelectedPost(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pt-20">
      <Header username={user} onLogout={handleLogout} />

      <main className="flex-1 p-6">

        <div className="h-full overflow-y-auto">
          <Suspense fallback={<div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Array.from({ length: 16 }).map((_, index) => (
              <PostCardSkeleton key={index} />
            ))}
          </div>}>
            <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
          </Suspense>
        </div>
      </main>


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
