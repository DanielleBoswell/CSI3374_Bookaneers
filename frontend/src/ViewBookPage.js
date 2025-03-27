import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ViewBookPage() {
  const { book_index } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`http://localhost:8000/view_book?query=${book_index}`);
        if (!res.ok) throw new Error('Failed to fetch book');
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setBook(null); // Ensure it stays null on error
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [book_index]); // ✅ Only re-fetch if `book_index` changes

  const BookDetails = ({ data }) => {
    if (!data) return null; // Handle case where no data is passed
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">{data.book_name}</h1>
        <p className="text-gray-700 text-lg mt-2"><b>Author:</b> {data.author}</p>
        <p className="text-gray-600 mt-2"><b>Genre:</b> {data.genre}</p>
        <p className="text-gray-600 mt-2"><b>Publishing Year:</b> {data.publishing_year}</p>
        <p className="text-gray-600 mt-2"><b>Publisher:</b> {data.publisher}</p>
        <p className="text-gray-600 mt-2"><b>Average Rating of the Book:</b> {data.book_average_rating}</p>
        <p className="text-gray-600 mt-2"><b>Ratings Count of the Book:</b> {data.book_ratings_count}</p>
        <p className="text-gray-600 mt-2"><b>Gross Sales:</b> {data.gross_sales}</p>
        <p className="text-gray-600 mt-2"><b>Sale Price:</b> {data.sale_price}</p>
      </div>
    );
  };

  // ✅ Handle loading and missing book cases properly
  if (loading) return <p className="p-4">Loading book details...</p>;
  if (!book) return <p className="p-4 text-red-500">Book not found.</p>;

  return (
    <div>
      <BookDetails data={book} />
      <div className="mt-6">
        <Link to="/search" className="text-blue-500 mr-4">Back to Search</Link>
      </div>
    </div>
  );
}

export default ViewBookPage;