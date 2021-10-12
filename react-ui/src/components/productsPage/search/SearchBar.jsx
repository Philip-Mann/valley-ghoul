import './search-bar.css';


const SearchBar = ({ searchQuery, handleSearchQuery }) => {

    const handleSearchQueryChange = (e) => {
        handleSearchQuery(e.target.value);
    }

    return (
        <div className="search-products-container">
            <div className="search">
                <input
                    className="search"
                    onChange={handleSearchQueryChange}
                    placeholder="Search for products..."
                    value={searchQuery}
                />
            </div>
        </div>
    )
}

export default SearchBar;