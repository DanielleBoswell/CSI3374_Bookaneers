import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import SearchPage from "./SearchPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
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
