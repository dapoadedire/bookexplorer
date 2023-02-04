import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBooks from "../hooks/fetchBooks";
import SearchResults from "./SearchResults";

import SearchForm from "./SearchForm";

const Home = () => {
  //   const [book, setBook] = useState(null);
  const [book, setBook] = useState(null);

  const results = useQuery(["search", book], fetchBooks);

  return (
    <>
      <main>
        <div className="form-container">
          <SearchForm onSubmit={setBook} />
        </div>

        <div className="result-container">
          <SearchResults results={results} />
        </div>
      </main>
    </>
  );
};

export default Home;
