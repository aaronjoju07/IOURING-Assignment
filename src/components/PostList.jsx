import React, { useState } from 'react';
import Pagination from './Pagination';
import PostCard from './PostCard';


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


export default PostList;
