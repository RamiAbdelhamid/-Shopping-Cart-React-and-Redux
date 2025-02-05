import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // جلب البيانات من السلة
  const dispatch = useDispatch();

  return (
    <div>
      <h1>🛒</h1>
      {cartItems.length === 0 ? (
        <h2>Empty🚫 </h2>
      ) : (
        <ul>
          {cartItems.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>✍️ {book.author}</p>
              <button
                onClick={() => dispatch(removeFromCart(book.id))} // إزالة الكتاب من السلة
              >
                🗑️ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
