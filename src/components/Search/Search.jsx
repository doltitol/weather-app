import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <form id="search-form">
            <input
                type="search"
                id="search"
                aria-label="search"
                placeholder="Search City..."
            />
            <button type="submit" className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    )
}

export default Search