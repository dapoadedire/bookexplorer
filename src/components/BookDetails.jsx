import { useParams } from "react-router-dom";
import fetchBookDetails from "../hooks/fetchBookDetails";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/react.svg";
import parse from "html-react-parser";

const BookDetails = () => {
  const { id } = useParams();
  const results = useQuery(["book", id], fetchBookDetails);

  if (results.isLoading) {
    return <div>Loading...</div>;
  }

  if (results.isError) {
    return <div>Book with id {id} not found.</div>;
  }

  if (results.data) {
    return (
      <div className="details-container">
        <div className="back">
          <Link to="/">
            <button className="back">Back</button>
          </Link>
        </div>

        <div className="book-description">
          <div className="book-image">
            <img
              src={
                results.data.volumeInfo.imageLinks
                  ? results.data.volumeInfo.imageLinks.thumbnail
                  : notFoundImage
              }
              alt={results.data.volumeInfo.title}
            />
          </div>

          <div className="other-details">
            <h1 className="title">{results.data.volumeInfo.title}</h1>
            <p className="author">{results.data.volumeInfo.authors}</p>
            <p className="description">
              {parse(results.data.volumeInfo.description)}
            </p>
            <p className="category">{results.data.volumeInfo.categories}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default BookDetails;
