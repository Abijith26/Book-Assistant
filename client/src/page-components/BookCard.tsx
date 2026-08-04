import Link from "next/link";
import React from "react";

function BookCard({ book }: { book: any }) {
  return (
    <div>
      <Link href={`/books/${book.slug}`}>{book.title}</Link>
      <p>by {book.author}</p>
    </div>
  );
}

export default BookCard;
