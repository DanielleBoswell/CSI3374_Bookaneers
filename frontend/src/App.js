import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SearchPage from './SearchPage';
import ViewBookPage from "./ViewBookPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/view/:book_index" element={<ViewBookPage />} />
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <p>Welcome to the Bookaneers!</p>
                <a href="/search" className="App-link">Go to Search</a>
              </header>
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App;
