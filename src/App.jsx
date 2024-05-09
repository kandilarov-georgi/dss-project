import {useState} from "react";

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ListSection from "./components/ListSection.jsx";
import DetailsSection from "./components/DetailsSection.jsx";

const booksData = [
  {
    title: "book 1",
    author: "author 1",
    isbn: "isbn 1",
    price: "12",
    publicationDate: new Date(),
  },
  {
    title: "book 2",
    author: "author 2",
    isbn: "isbn 2",
    price: "13",
    publicationDate: new Date(),
  }
];

function App() {
  const [booksList, setBooksList] = useState(booksData);
  const [currentBookData, setCurrentBookData] = useState(undefined);

  const addBookHandler = function (bookData) {
    setBooksList((previousState) => [...previousState, bookData]);
  };

  const updateBookHandler = function (updatedBookData) {
    const {index} = currentBookData;

    setBooksList((previousState) => {
      const updatedBooksList = [...previousState];
      updatedBooksList[index] = {...updatedBookData};
      return updatedBooksList;
    });

    setCurrentBookData(undefined);
  };

  return (
    <div>
      <Navbar/>
      <main>
        <ListSection
          booksData={booksList}
          onSetBooksList={setBooksList}
          currentBookData={currentBookData}
          onSetCurrentData={setCurrentBookData}
        />
        <DetailsSection
          booksData={booksList}
          onAddBook={addBookHandler}
          onUpdateBook={updateBookHandler}
          currentBookData={currentBookData}
        />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
