const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.elements.book.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="book">Search for a book:</label>
      <input type="text" name="book" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
