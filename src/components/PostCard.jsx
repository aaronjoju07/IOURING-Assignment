import { useState } from "react";


const PostCard = ({ post, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-300 relative min-h-[300px] flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 leading-relaxed">
          {expanded ? post.body : `${post.body.substring(0, 100)}...`}
        </p>
      </div>
      <div>
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
          </button>
          <span>|</span>
          <button
            onClick={() => onDelete(post.id)}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;   