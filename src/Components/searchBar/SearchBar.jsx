import "./SearchBar.css";

function SearchBar() {
  return (
    <div>
      <form className="form">
        <input type="search" placeholder="search... " className="searchInput" />
        {/* <button type="submit" className="btn">
          search
        </button> */}
      </form>
    </div>
  );
}

export default SearchBar;
