import React, { useState } from 'react'

const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    const res = await fetch(`http://localhost:8000/search?query=${query}`)
    const data = await res.json()
    setResults(data)
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Search Books</h1>
      <input
        type="text"
        placeholder="Enter book title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
      <ul className="mt-4">
        {results.map((book, idx) => (
          <li key={idx}>{book["Book Name"]} — {book["Author"]}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchPage
