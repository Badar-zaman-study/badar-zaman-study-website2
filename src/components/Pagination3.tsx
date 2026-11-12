
"use client";

import { AnyAaaaRecord } from "dns";

export default function Pagination3({
  currentPage,
  totalPages,
  paginationPages,
  handlePageChange,
}:any) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 pt-10">

      {/* Previous */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="
          h-9 min-w-9 rounded-md border
          border-[#dfe6f0] bg-white px-3
          text-sm text-[#526078]
          transition-all duration-300
          hover:bg-[#f5f8fc]
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        Previous
      </button>

      {/* Page Numbers */}
      {paginationPages.map((page:any) => (
        <button
          key={page}
          type="button"
          onClick={() => handlePageChange(page)}
          disabled={currentPage === page}
          aria-current={
            currentPage === page ? "page" : undefined
          }
          className={`
            h-9 min-w-9 rounded-md border px-3
            text-sm font-medium
            transition-all duration-300
            ${
              currentPage === page
                ? "border-[#1554c7] bg-[#1554c7] text-white"
                : "border-[#dfe6f0] bg-white text-[#526078] hover:bg-[#f5f8fc]"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="
          h-9 min-w-9 rounded-md border
          border-[#dfe6f0] bg-white px-3
          text-sm text-[#526078]
          transition-all duration-300
          hover:bg-[#f5f8fc]
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        Next
      </button>

    </div>
  );
}
