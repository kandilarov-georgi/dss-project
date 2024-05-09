function ListSection({
                       booksData,
                       onSetBooksList,
                       currentBookData,
                       onSetCurrentData,
                     }) {
  const deleteBookHandler = function (deleteIndex) {
    onSetBooksList((previousState) =>
      previousState.filter((_, index) => index != deleteIndex)
    );
  };

  return (
    <ul className="content-list">
      {booksData.length > 0 ? (
        booksData.map((book, index) => (
          <li
            key={book.isbn}
            onClick={() => {
              onSetCurrentData({index, ...book});
            }}
          >
            <div>
              <p
                className="id"
              >
                Id: <span>{index + 1}</span>
              </p>
              <p className="field1">{book.title}</p>
              <p className="field2">{book.author}</p>
              <p
                className="field3"
              >
                ISBN: {book.isbn}
              </p>
              <p
                className="field4"
              >
                Price: ${book.price}
              </p>
              <p
                className="field5"
              >
                {book.publicationDate.toDateString()}
              </p>
              <button
                className="deleteButton"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteBookHandler(index);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      ) : (
        <div>
          <p>Empty!</p>
        </div>
      )}
    </ul>
  );
}

export default ListSection;
