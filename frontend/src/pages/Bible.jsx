import React, { useState } from "react";
import Bible from "../data/Bible.json";

const App = () => {
  const [chapterNum, setChapterNum] = useState(0);
  const [bookNum, setBookNum] = useState(0);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchInput, setSearchInput] = useState(null);
  const [searchOutput, setSearchOutput] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const libro = Bible[bookNum];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setSearchOutput(Bible.filter((libre) => libre.book.includes(e.target.value)));

    if (e.target.value !== "") {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const handleBookSelection = (book) => {
    const selectedBookIndex = Bible.findIndex((b) => b.book === book);
    setBookNum(selectedBookIndex);
    setChapterNum(0);
    setShowSearchResults(false);
    setSelectedBook(book);
  };

  return (
    <>
      <div className="inner-banner">
        <section className="w3l-breadcrumb">
          <div className="container">
            <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">
              Bible
            </h4>
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="/home">Home</a>
              </li>
              <li className="active">
                <span className="fa fa-chevron-right mx-2" aria-hidden="true" />{" "}
                Books of the Bible
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Header Component 
      <header className="header">
        <input
          className="search display-none"
          type="text"
          placeholder="search"
          onChange={handleChange}
        />
        {showSearchResults && (
          <div>
            <h3>Search Results for {searchInput}</h3>
            {searchOutput.map((result) => (
              <p key={result.book} onClick={() => handleBookSelection(result.book)}>
                {result.book}
              </p>
            ))}
          </div>
        )}
      </header>
      

      {/* BooksNav Component */}
      <div className="dropdown">
        <h3>Old &amp; New Testaments</h3>
        <select
          value={bookNum}
          onChange={(e) => {
            setBookNum(e.target.value);
            setShowSearchResults(false);
            setSelectedBook(Bible[e.target.value].book);
          }}
        >
          {Bible.map((book, index) => (
            <option key={index} value={index}>
              {book.book}
            </option>
          ))}
        </select>
      </div>

      {/* Book Name */}
      <h2 className="book-name">{selectedBook || libro.book}</h2>

      {/* ChaptersNav Component */}
      <div className="dropdown">
        <h3>Chapter</h3>
        <select
          value={chapterNum}
          onChange={(e) => {
            setChapterNum(e.target.value);
            setShowSearchResults(false);
          }}
        >
          {libro.chapters.map((chapter, index) => (
            <option key={index} value={index}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Main Component */}
      <>
        {!showSearchResults && (
          <main className="main">
            {libro.chapters[chapterNum].verses.map((verse) => (
              <p key={Math.floor(Math.random() * 10000000)}>
                <span className="bolder">{verse.verse}</span>. {verse.text}
              </p>
            ))}
          </main>
        )}
      </>

      {/* Footer Component */}
      <footer className="footer">
        <li
          onClick={() => {
            if (chapterNum !== 0) {
              setChapterNum(chapterNum - 1);
            } else {
              if (bookNum === 0) {
                setBookNum(65);
                setChapterNum(21);
              } else {
                setBookNum(bookNum - 1);
                setChapterNum(Bible[bookNum - 1].chapters.length - 1);
              }
            }
          }}
        >
          --
        </li>

        <h3>
          <span
            className="choose-chapter"
            onClick={() => {
              setShowSearchResults(false);
            }}
          >
            {chapterNum + 1}
          </span>
        </h3>

        <li
          onClick={() => {
            if (chapterNum + 1 !== libro.chapters.length) {
              setChapterNum(chapterNum + 1);
            } else {
              if (bookNum !== 65) {
                setBookNum(bookNum + 1);
                setChapterNum(0);
              } else {
                setBookNum(0);
                setChapterNum(0);
              }
            }
          }}
        >
        </li>
      </footer>
    </>
  );
};

export default App;