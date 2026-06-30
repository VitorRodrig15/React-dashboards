import React, { useEffect, useState } from "react";
import { OrdersData } from "../../Data/Data";
import "./BooksPage.css";

const createBookCover = (title, author) => {
  const safeTitle = String(title || "Livro")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const safeAuthor = String(author || "Autor desconhecido")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const colors = ["#4338ca", "#0f766e", "#b45309", "#be185d"];
  const color = colors[(title?.length || 0 + (author?.length || 0)) % colors.length];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="230" viewBox="0 0 150 230">
      <rect width="150" height="230" rx="16" fill="${color}" />
      <rect x="18" y="18" width="114" height="194" rx="12" fill="#f8fafc" opacity="0.95" />
      <rect x="30" y="32" width="90" height="14" rx="7" fill="#cbd5e1" />
      <rect x="30" y="54" width="72" height="10" rx="5" fill="#e2e8f0" />
      <text x="75" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="#0f172a">${safeTitle}</text>
      <text x="75" y="150" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#475569">${safeAuthor}</text>
      <text x="75" y="188" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#64748b">Capa da coleção</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const placeholderUrl = createBookCover("Livro", "Disponível");

const BooksPage = () => {
  const [covers, setCovers] = useState({});
  const uniqueBooks = React.useMemo(() => {
    const books = [];
    const bookTitles = new Set();

    OrdersData.forEach((order) => {
      const parts = order.product.split(" de ");
      const bookTitle = parts[0];
      const author = parts[1] || "Autor desconhecido";

      if (!bookTitles.has(bookTitle)) {
        bookTitles.add(bookTitle);
        books.push({
          title: bookTitle,
          author,
          link: order.link,
        });
      }
    });

    return books;
  }, []);

  useEffect(() => {
    const loadCovers = async () => {
      const nextCovers = {};

      for (const book of uniqueBooks) {
        try {
          const query = `${book.title} ${book.author}`.trim();
          const openLibraryUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=5`;
          const googleBooksUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=1`;

          const normalizeUrl = (url) =>
            url?.replace(/^http:\/\//i, "https://") || null;

          const openLibraryResponse = await fetch(openLibraryUrl);
          if (openLibraryResponse.ok) {
            const openLibraryData = await openLibraryResponse.json();
            const coverId = openLibraryData.docs?.find((doc) => doc.cover_i)?.cover_i;
            if (coverId) {
              nextCovers[book.title] = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
              continue;
            }
          }

          const googleBooksResponse = await fetch(googleBooksUrl);
          if (googleBooksResponse.ok) {
            const googleBooksData = await googleBooksResponse.json();
            const thumbnail = googleBooksData.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
            if (thumbnail) {
              nextCovers[book.title] = normalizeUrl(thumbnail);
              continue;
            }
          }

          nextCovers[book.title] = createBookCover(book.title, book.author);
        } catch {
          nextCovers[book.title] = createBookCover(book.title, book.author);
        }
      }

      setCovers(nextCovers);
    };

    loadCovers();
  }, [uniqueBooks]);

  const handleBookClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="BooksPage">
      <h1>Biblioteca de Livros</h1>
      <p className="subtitle">Confira nossa coleção de livros disponíveis</p>
      <div className="booksGrid">
        {uniqueBooks.map((book, index) => (
          <div key={index} className="bookCard">
            <div className="bookImageContainer">
              <img
                src={covers[book.title] || createBookCover(book.title, book.author)}
                alt={book.title}
                className="bookImage"
                onError={(e) => {
                  e.target.src = createBookCover(book.title, book.author);
                }}
              />
            </div>
            <div className="bookInfo">
              <h3 className="bookTitle">{book.title}</h3>
              <p className="bookAuthor">{book.author}</p>
              <button
                className="bookButton"
                onClick={() => handleBookClick(book.link)}
              >
                Ver no OpenLibrary
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
