import React from 'react';

export default function Pagination({ prevPage, nextPage, currentPage, totalPages }) {
    const hasNext = currentPage < totalPages - 1;
    const hasPrev = currentPage > 0;

    return (
        <div className="text-center m-2">
            <button 
                className="btn btn-success" 
                disabled={!hasPrev}
                onClick={() => prevPage()}
            >&lt;</button>
            &nbsp;
            <button 
                className="btn btn-success" 
                disabled={!hasNext}
                onClick={() => nextPage()}
            >&gt;</button>
        </div>
    );
}
