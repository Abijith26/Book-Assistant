import React from "react";
import BookCard from "./BookCard";
import { sampleBooks } from "../lib/constants";

function BookGrid() {
  return (
    <div>
      {sampleBooks.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}

export default BookGrid;
