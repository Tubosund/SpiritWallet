import React, { useState, useEffect } from 'react';
import { bibleBooks } from '../data/bibleBooks';

const bookContentMap = (bookContent) => {
  if (!Array.isArray(bookContent) || bookContent.length === 0) {
    return '';
  }

  const formattedVerses = bookContent.map((verse, index) => {
    return `<span>${index + 1} ${verse.text}</span>`;
  });

  return formattedVerses.join('');
};

const BibleBooks = ({ genesis, exodus, leviticus, numbers, deuteronomy, joshua, judges, ruth, firstSamuel, secondSamuel, firstKings, secondKings, firstChronicles, secondChronicles, ezra, nehemiah, esther, job, psalms, proverbs, ecclesiastes, songOfSolomon, isaiah, jeremiah, lamentations, ezekiel, daniel, hosea, joel, amos, obadiah, jonah, micah, nahum, habakkuk, zephaniah, haggai, zechariah, malachi, matthew, mark, luke, john, acts, romans, firstCorinthians, secondCorinthians, galatians, ephesians, philippians, colossians, firstThessalonians, secondThessalonians, firstTimothy, secondTimothy, titus, philemon, hebrews, james, firstPeter, secondPeter, firstJohn, secondJohn, thirdJohn, jude, revelation }) => {
  const [oldTestamentBooks, setOldTestamentBooks] = useState([]);
  const [newTestamentBooks, setNewTestamentBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookContent, setBookContent] = useState([]);

  useEffect(() => {
    const oldTestamentBookList = [];
    const newTestamentBookList = [];

    Object.keys(bibleBooks).forEach(bookKey => {
      const book = {
        id: bookKey,
        name: bookKey.charAt(0).toUpperCase() + bookKey.slice(1),
      };

      if (bookKey.includes('Genesis') || bookKey.includes('Malachi')) {
        oldTestamentBookList.push(book);
      } else {
        newTestamentBookList.push(book);
      }
    });

    setOldTestamentBooks(oldTestamentBookList);
    setNewTestamentBooks(newTestamentBookList);
  }, []);

  const handleBookSelection = (bookId) => {
    setSelectedBook(bookId);
    switch (bookId) {
      case 'genesis':
        setBookContent(genesis);
        break;
      case 'exodus':
        setBookContent(exodus);
        break;
      case 'leviticus':
        setBookContent(leviticus);
        break;
      case 'numbers':
        setBookContent(numbers);
        break;
      case 'deuteronomy':
        setBookContent(deuteronomy);
        break;
      case 'joshua':
        setBookContent(joshua);
        break;
      case 'judges':
        setBookContent(judges);
        break;
      case 'ruth':
        setBookContent(ruth);
        break;
      case 'firstSamuel':
        setBookContent(firstSamuel);
        break;
      case 'secondSamuel':
        setBookContent(secondSamuel);
        break;
      case 'firstKings':
        setBookContent(firstKings);
        break;
      case 'secondKings':
        setBookContent(secondKings);
        break;
      case 'firstChronicles':
        setBookContent(firstChronicles);
        break;
      case 'secondChronicles':
        setBookContent(secondChronicles);
        break;
      case 'ezra':
        setBookContent(ezra);
        break;
      case 'nehemiah':
        setBookContent(nehemiah);
        break;
      case 'esther':
        setBookContent(esther);
        break;
      case 'job':
        setBookContent(job);
        break;
      case 'psalms':
        setBookContent(psalms);
        break;
      case 'proverbs':
        setBookContent(proverbs);
        break;
      case 'ecclesiastes':
        setBookContent(ecclesiastes);
        break;
      case 'songOfSolomon':
        setBookContent(songOfSolomon);
        break;
      case 'isaiah':
        setBookContent(isaiah);
        break;
      case 'jeremiah':
        setBookContent(jeremiah);
        break;
      case 'lamentations':
        setBookContent(lamentations);
        break;
      case 'ezekiel':
        setBookContent(ezekiel);
        break;
      case 'daniel':
        setBookContent(daniel);
        break;
      case 'hosea':
        setBookContent(hosea);
        break;
      case 'joel':
        setBookContent(joel);
        break;
      case 'amos':
        setBookContent(amos);
        break;
      case 'obadiah':
        setBookContent(obadiah);
        break;
      case 'jonah':
        setBookContent(jonah);
        break;
      case 'micah':
        setBookContent(micah);
        break;
      case 'nahum':
        setBookContent(nahum);
        break;
      case 'habakkuk':
        setBookContent(habakkuk);
        break;
      case 'zephaniah':
        setBookContent(zephaniah);
        break;
      case 'haggai':
        setBookContent(haggai);
        break;
      case 'zechariah':
        setBookContent(zechariah);
        break;
      case 'malachi':
        setBookContent(malachi);
        break;
      case 'matthew':
        setBookContent(matthew);
        break;
      case 'mark':
        setBookContent(mark);
        break;
      case 'luke':
        setBookContent(luke);
        break;
      case 'john':
        setBookContent(john);
        break;
      case 'acts':
        setBookContent(acts);
        break;
      case 'romans':
        setBookContent(romans);
        break;
      case 'firstCorinthians':
        setBookContent(firstCorinthians);
        break;
      case 'secondCorinthians':
        setBookContent(secondCorinthians);
        break;
      case 'galatians':
        setBookContent(galatians);
        break;
      case 'ephesians':
        setBookContent(ephesians);
        break;
      case 'philippians':
        setBookContent(philippians);
        break;
      case 'colossians':
        setBookContent(colossians);
        break;
      case 'firstThessalonians':
        setBookContent(firstThessalonians);
        break;
      case 'secondThessalonians':
        setBookContent(secondThessalonians);
        break;
      case 'firstTimothy':
        setBookContent(firstTimothy);
        break;
      case 'secondTimothy':
        setBookContent(secondTimothy);
        break;
      case 'titus':
        setBookContent(titus);
        break;
      case 'philemon':
        setBookContent(philemon);
        break;
      case 'hebrews':
        setBookContent(hebrews);
        break;
      case 'james':
        setBookContent(james);
        break;
      case 'firstPeter':
        setBookContent(firstPeter);
        break;
      case 'secondPeter':
        setBookContent(secondPeter);
        break;
      case 'firstJohn':
        setBookContent(firstJohn);
        break;
      case 'secondJohn':
        setBookContent(secondJohn);
        break;
      case 'thirdJohn':
        setBookContent(thirdJohn);
        break;
      case 'jude':
        setBookContent(jude);
        break;
      case 'revelation':
        setBookContent(revelation);
        break;
      default:
        setBookContent([]);
    }
  };

function viewBibleBooks() {
    for (const [bookName, bookData] of Object.entries(bibleBooks)) {
      console.log(`Book: ${bookName}`);
      for (const [chapterNumber, chapterData] of Object.entries(bookData)) {
        console.log(`  Chapter ${chapterNumber}`);
        for (const [verseNumber, verseText] of Object.entries(chapterData)) {
          console.log(`    Verse ${verseNumber}: ${verseText}`);
        }
      }
    }
  }
  
  viewBibleBooks();
  return (
    <div>
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
                Bible
              </li>
            </ul>
          </div>
        </section>
      </div>
      <h2 className="biblebooks" >Books</h2>
      <div>
      <select onChange={(e) => handleBookSelection(e.target.value)} value={selectedBook || ''}>
  <option value="">Select a book</option>
  {Object.keys(bibleBooks).map((book) => (
    <option key={book} value={book}>
      {book.charAt(0).toUpperCase() + book.slice(1)}
    </option>
  ))}
</select>
      </div>
      {selectedBook && (
        <div>
          <h2>
            {oldTestamentBooks
              .concat(newTestamentBooks)
              .find(book => book.id === selectedBook).name}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: bookContent }} />
        </div>
      )}
    </div>
  );
};

export default BibleBooks;