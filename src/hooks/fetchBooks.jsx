async function fetchBooks({ queryKey }) {
  const book = queryKey[1];
  if (!book) return { items: [] };
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=30`
  );
  if (!response.ok) {
    throw new Error(`Search not found for ${book}`);
  }
  return response.json();
}

export default fetchBooks;
