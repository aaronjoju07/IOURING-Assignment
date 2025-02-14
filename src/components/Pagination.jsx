const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4 flex justify-center">
      <ul className="inline-flex items-center space-x-2">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 border border-gray-300 rounded-md ${
              currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            &laquo; Prev
          </button>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 rounded-md border border-gray-300 ${
                currentPage === number ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 border border-gray-300 rounded-md ${
              currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            Next &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;