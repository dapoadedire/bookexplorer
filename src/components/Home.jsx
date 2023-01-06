import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBooks from "../hooks/fetchBooks";
import SearchResults from "./SearchResults";

import SearchForm from "./SearchForm";
import Header from "./Header";

const Home = () => {
//   const [book, setBook] = useState(null);
    const [book, setBook] = useState(null);

  const results = useQuery(["search", book], fetchBooks);

  return (
    <main>
      <Header />

      <SearchForm onSubmit={setBook} />
      <SearchResults results={results} />
    </main>
  );
};

export default Home;
