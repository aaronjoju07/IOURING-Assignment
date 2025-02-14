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
export default Pagination;