import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice"; // استيراد الأكشن من Redux

const bookUrl = "https://react-4d791-default-rtdb.firebaseio.com/books";

function Shop() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); // لإرسال الأحداث إلى Redux

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${bookUrl}.json`);

        if (response.data) {
          const booksArray = Object.entries(response.data)
            .map(([id, book]) => ({ id, ...book }))
            .filter((book) => !book.deleted);

          setBooks(booksArray.slice(0, 5));
        } else {
          setBooks([]);
        }
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("⚠️ فشل تحميل البيانات!");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>📚 Shop</h1>

      {loading ? (
        <h2>⏳</h2>
      ) : error ? (
        <h2 style={{ color: "red" }}>{error}</h2>
      ) : books.length === 0 ? (
        <h2>🚫 لا توجد كتب متاحة.</h2>
      ) : (
        <div style={styles.grid}>
          {books.map((book) => (
            <div key={book.id} style={styles.card}>
              <h3 style={styles.title}>{book.title}</h3>
              <p style={styles.author}>✍️ {book.author}</p>
              <button
                style={styles.cartButton}
                onClick={() => dispatch(addToCart(book))}
              >
                🛒 Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  header: {
    fontSize: "28px",
    color: "#333",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    cursor: "pointer",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  author: {
    fontSize: "14px",
    color: "#777",
  },
  cartButton: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#2ecc71",
    color: "#fff",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};

export default Shop;
