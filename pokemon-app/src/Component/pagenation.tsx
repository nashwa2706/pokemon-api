import React from "react";

interface PaginationProps {
	currentPage: number;
	totalPage: number;
	handleBackPage?: () => void;
	handleNextPage?: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPage,
	handleBackPage,
	handleNextPage,
}) => {
	return (
		<div className="flex justify-between items-center mt-6 w-full px-4">
			<button
				onClick={handleBackPage}
				disabled={currentPage <= 1}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300"
			>
				Prev
			</button>
			<span className="text-lg font-semibold">
				Page {currentPage} of {totalPage}
			</span>
			<button
				onClick={handleNextPage}
				disabled={currentPage >= totalPage}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300"
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
