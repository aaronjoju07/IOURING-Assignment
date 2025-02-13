import clsx from 'clsx';

const Alert = ({ type, message, onClose }) => {
  // Explicitly define classes
  const textClass = 'text-black';
  const borderClass = type === 'success' ? 'border-green-300' : 'border-red-300';
  const bgClass = type === 'success' ? 'bg-green-50' : 'bg-red-50';
  const darkTextClass = 'text-black';
  const darkBgClass = type === 'success' ? 'dark:bg-green-100' : 'dark:bg-red-100';
  const darkBorderClass = type === 'success' ? 'dark:border-green-800' : 'dark:border-red-800';

  const buttonTextClass = 'text-black';
  const buttonBgClass = type === 'success' ? 'bg-green-50' : 'bg-red-50';
  const buttonHoverClass = type === 'success' ? 'hover:bg-green-200' : 'hover:bg-red-200';
  const darkButtonTextClass = 'text-black';
  const darkButtonBgClass = type === 'success' ? 'dark:bg-green-400' : 'dark:bg-red-400';
  const darkButtonHoverClass = type === 'success' ? 'dark:hover:bg-green-300' : 'dark:hover:bg-red-300';

  return (
    <div
      className={clsx(
        'flex items-start p-4 mb-2 border-t-4 justify-center fixed right-4 z-50 opacity-80', 
        textClass,
        borderClass,
        bgClass,
        darkTextClass,
        darkBgClass,
        darkBorderClass
      )}
      role="alert"
    >
      <div className="ms-3 text-sm font-medium">{message}   </div>
      <button
        type="button"
        className={clsx(
          'ms-auto -mx-1.5 -my-1.5 p-1 rounded-lg focus:ring-2 inline-flex items-center justify-center h-8 w-8',
          buttonBgClass,
          buttonTextClass,
          buttonHoverClass,
          darkButtonBgClass,
          darkButtonTextClass,
          darkButtonHoverClass
        )}
        onClick={onClose}
        aria-label="Close"
      >
        <span className="sr-only">Dismiss</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Alert;
