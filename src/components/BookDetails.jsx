import { useParams } from "react-router-dom";
import fetchBookDetails from "../hooks/fetchBookDetails";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/react.svg";
import Header from "./Header";
import ctl from "@netlify/classnames-template-literals";


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
      <div>
        <Header />
        <Link to="/">
          <button className="back">Back</button>
        </Link>
        <div className={detailsStyle}>
          <img
            src={
              results.data.volumeInfo.imageLinks
                ? results.data.volumeInfo.imageLinks.thumbnail
                : notFoundImage
            }
            alt={results.data.volumeInfo.title}
          />
          <h1>{results.data.volumeInfo.title}</h1>
          <p>{results.data.volumeInfo.authors}</p>
          <p>{results.data.volumeInfo.description}</p>
          <p>{results.data.volumeInfo.categories}</p>
          <p>{results.data.volumeInfo.publisher}</p>

          <p>{results.data.volumeInfo.language}</p>
          <p>{results.data.volumeInfo.publishedDate}</p>
          <p>
            <a
              href={results.data.volumeInfo.previewLink}
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          </p>
        </div>
      </div>
    );
  }
};

const detailsStyle = ctl(`
    bg-green-900
    text-white
    flex-col
    `);


    
export default BookDetails;


