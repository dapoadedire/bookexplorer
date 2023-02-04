import { useState } from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/react.svg";

let count;

if (window.innerWidth < 768) {
  count = 5;
} else if (window.innerWidth < 1024) {
  count = 8;
} else {
  count = 10;
}

const SearchResults = ({ results }) => {
  const [displayCount, setDisplayCount] = useState(count);

  const handleShowMore = () => {
    setDisplayCount(displayCount + count);
  };

  return results.isLoading ? (
    <div className="loading-spinner">
      <div className="loading-spinner__circle">
        <div className="loading-spinner__circle--inner"></div>
      </div>
    </div>
  ) : results.isError ? (
    <div>{results.error.message}</div>
  ) : (
    <>
      <div className="books">
        {results.data.items.slice(0, displayCount).map((item) => {
          return (
            <div key={item.id} className="book">
              <img
                src={
                  item.volumeInfo.imageLinks
                    ? item.volumeInfo.imageLinks.thumbnail
                    : notFoundImage
                }
                alt={item.volumeInfo.title}
              />
              <Link to={`/book/${item.id}`} key={item.id} className="title">
                <p>{item.volumeInfo.title}</p>
              </Link>
              <p className="author">{item.volumeInfo.authors}</p>
            </div>
          );
        })}
      </div>
      {displayCount < results.data.items.length && (
        <button onClick={handleShowMore} className="show-more">
          Show More
        </button>
      )}
    </>
  );
};

export default SearchResults;
