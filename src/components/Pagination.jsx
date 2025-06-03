import { useState } from "react";

export default function Pagination({ data, setStart, setEnd }) {
    const [perPage, setPerPage] = useState(8);
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil((data?.length || 0) / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, data?.length || 0);

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        setPage(newPage);
        const newStart = (newPage - 1) * perPage;
        setStart(newStart);
        setEnd(newStart + perPage);
    };

    const handlePerPageChange = (event) => {
        const newPerPage = Number(event.target.value);
        setPerPage(newPerPage);
        setPage(1);
        setStart(0);
        setEnd(newPerPage);
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            const newPage = page + 1;
            setPage(newPage);
            const newStart = (newPage - 1) * perPage;
            setStart(newStart);
            setEnd(newStart + perPage);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            const newPage = page - 1;
            setPage(newPage);
            const newStart = (newPage - 1) * perPage;
            setStart(newStart);
            setEnd(newStart + perPage);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0 ${page === i
                            ? "bg-indigo-600 text-white"
                            : "text-gray-900 hover:bg-gray-50"
                        }`}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between w-full">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
                        <span className="font-medium">{endIndex}</span> of{" "}
                        <span className="font-medium">{data?.length}</span> results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <button
                            onClick={handlePreviousPage}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                            disabled={page === 1}
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {renderPageNumbers()}

                        <button
                            onClick={handleNextPage}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                            disabled={page === totalPages}
                        >
                            <span className="sr-only">Next</span>
                            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
