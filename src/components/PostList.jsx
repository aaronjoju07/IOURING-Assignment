import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import PostCard from './PostCard';
import { useSearchParams } from 'react-router-dom';

const PostList = ({ posts, onEdit, onDelete }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);
  const postsPerPage = 12;

  // Ensure currentPage is within valid range
  useEffect(() => {
    const totalPages = Math.ceil(posts.length / postsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages > 0 ? totalPages : 1);
    }
  }, [posts.length, currentPage]);

  // Update URL when currentPage changes
  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage, setSearchParams]);

  // Calculate current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentPosts.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">No posts available.</p>
      ) : (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPosts.map(post => (
            <PostCard key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} />
          ))}
          {/* Add blank cards to maintain height consistency */}
          {currentPosts.length < postsPerPage && [...Array(postsPerPage - currentPosts.length)].map((_, i) => (
            <div key={`empty-${i}`} className=""></div>
          ))}
        </div>
      )}
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