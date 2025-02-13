
const Header = ({ username, onLogout }) => (
  <header className="flex items-center justify-between bg-gray-100 bg-opacity-80 text-black p-4 fixed top-0 w-full z-10 backdrop-blur-md">
    <div className="font-semibold text-3xl text-indigo-500">Logo</div>
    <div className="flex items-center gap-4">
      <span>{username}</span>
      <button
        onClick={onLogout}
        className="border border-indigo-500 text-indigo-500 px-2 py-1 rounded hover:bg-indigo-500 hover:text-white"
      >
        Logout
      </button>
    </div>
  </header>
);
export default Header;