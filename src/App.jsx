import HomePage from './components/HomePage.jsx';
import FilmsPage from './components/FilmsPage.jsx';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
