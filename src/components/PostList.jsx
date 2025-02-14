import React, { useState } from 'react';

const PostCard = ({ post, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-300 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 leading-relaxed">{expanded ? post.body : `${post.body.substring(0, 100)}...`}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-indigo-600 hover:text-indigo-800 mt-2"
      >
        {expanded ? 'Show Less' : 'Read More'}
      </button>
      <div className="absolute top-1 right-4 space-x-2">
        <button
          onClick={() => onEdit(post)}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Edit
        </button><span>|</span>
        <button
          onClick={() => onDelete(post.id)}
          className="text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

// Post List Component with Pagination
const PostList = ({ posts, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Calculate the current posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
<div className="flex flex-col min-h-screen">
  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
    {currentPosts.map(post => (
      <PostCard key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </div>
  
  {/* Ensure Pagination is always above the Footer */}
  <div className="mt-6 mb-12 flex justify-center">
    <Pagination
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
      currentPage={currentPage}
    />
  </div>
</div>

  );
};

// Pagination Component
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 z-20 leading-tight ${currentPage === number ? 'text-indigo-600' : 'text-gray-500'} bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PostList;
