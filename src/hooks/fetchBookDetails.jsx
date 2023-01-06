const fetchBookDetails = async ({ queryKey }) => {
  const id = queryKey[1];
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return response.json();
};

export default fetchBookDetails;
