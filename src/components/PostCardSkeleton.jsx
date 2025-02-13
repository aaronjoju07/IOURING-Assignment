const PostCardSkeleton = () => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-300 relative animate-pulse">
            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-300 mb-3 w-full"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-300 mb-4 w-3/4"></div>
            <div className="absolute top-1 right-4 space-x-2">
                <button className="h-6 bg-gray-200 rounded-full dark:bg-gray-300 w-16"></button>
                <span className="text-gray-400">|</span>
                <button className="h-6 bg-gray-200 rounded-full dark:bg-gray-300 w-16"></button>
            </div>
        </div>
    );
};

export default PostCardSkeleton;