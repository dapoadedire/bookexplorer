import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/react.svg";

const SearchResults = ({ results }) => {
  return results.isLoading ? (
    <div>Loading...</div>
  ) : results.isError ? (
    <div>{results.error.message}</div>
  ) : (
    <div className="books">
      {results.data.items.map((item, i) => {
        return (
          <Link to={`/book/${item.id}`} key={item.id}>
            <div key={item.id} className="book border-2-red-500">
              <p>{i + 1}</p>

              <img
                src={
                  item.volumeInfo.imageLinks
                    ? item.volumeInfo.imageLinks.thumbnail
                    : notFoundImage
                }
                alt={item.volumeInfo.title}
              />

              <h3>{item.volumeInfo.title}</h3>
              <p>{item.volumeInfo.authors}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
