import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';


function ViewBookPage() {
    const { book_index } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`http://localhost:8000/view_book?query=${book_index}`); // Adjust API endpoint
        const data = await res.json();
        setBook(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [book_index, setBook]);


  const BookDetails = (data) => {
    return(
        <div className="p-4">
            <h1 className="text-2xl font-bold">{book["book_name"]}</h1>
            <p className="text-gray-700 text-lg mt-2">Author: {book["author"]}</p>
            <p className="text-gray-600 mt-2">Genre: {book["genre"]}</p>
            <p className="text-gray-600 mt-2">Published: {book["publishing_year"]}</p>
            </div>);
  }

  if (loading) return <p className="p-4">Loading book details...</p>;
  if (!book) return <p className="p-4 text-red-500">Book not found.</p>;
  else return (
    <div>
      {<BookDetails data={book}/>}
      <div className="mt-6">
        <Link to="/search" className="text-blue-500 mr-4">Back to Search</Link>
      </div>
      </div>
  );}

export default ViewBookPage