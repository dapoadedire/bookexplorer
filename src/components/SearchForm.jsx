const SearchForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e.target.elements.book.value);
    };

    return (
        <>  <div>
             <form onSubmit={handleSubmit}>
            <label htmlFor="book">
                Book Name:
                <input type="text" name="book" />
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>

         
        </>
      
        
       
    );
};

export default SearchForm;
