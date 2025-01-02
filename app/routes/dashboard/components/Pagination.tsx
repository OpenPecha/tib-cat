import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = ({ currentPage, totalPages, handlePageChange }) => (
  <div className="flex items-center justify-center gap-2 mt-6">
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={`p-2 rounded-lg ${
        currentPage === 1 ? "text-gray-400" : "text-gray-700"
      }`}
    >
      <ChevronLeft size={20} />
    </button>

    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index + 1}
        onClick={() => handlePageChange(index + 1)}
        className={`w-10 h-10 rounded-lg text-sm ${
          currentPage === index + 1
            ? "bg-success-500 text-white"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        {index + 1}
      </button>
    ))}

    <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`p-2 rounded-lg ${
        currentPage === totalPages ? "text-gray-400" : "text-gray-700"
      }`}
    >
      <ChevronRight size={20} />
    </button>
  </div>
);