import { h } from 'preact';
import './pagination.css';
import { useState, useEffect } from "preact/hooks";

const Pagination = ({ currentPage, totalPages, onPageChange, dark }: PaginationProps) => {
    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    const handlePrevious = () => {
        if(page > 1) {
            const newPage = page - 1;
            setPage(newPage);
            onPageChange(newPage);
        }
    };

    const handleNext = () => {
        if(page < totalPages) {
            const newPage = page + 1;
            setPage(newPage);
            onPageChange(newPage);
        }
    };

    return (
        <div className={`acePaginationContainer ${dark ? 'aceDark' : ''}`}>
            <button
                className={`acePaginationButton ${page === 1 ? 'aceDisabled' : ''}`}
                onClick={handlePrevious}
                disabled={page === 1}
            >
                <i className="aceIconChevronLeft"></i>
            </button>
            <span className="acePaginationInfo">
                {page} / {totalPages}
            </span>
            <button
                className={`acePaginationButton ${page === totalPages ? 'aceDisabled' : ''}`}
                onClick={handleNext}
                disabled={page === totalPages}
            >
                <i className="aceIconChevronRight"></i>
            </button>
        </div>
    );
}

export default Pagination;
