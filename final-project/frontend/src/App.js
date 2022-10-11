import './styles/App.css';
import MovieList from './components/Home';
import  MovieForm  from './components/MovieForm';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Navigation } from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navigation />
      <div className='container p-4'>
        <Routes>
            <Route exact path="/" element={<MovieList />}></Route>
            <Route exact path="/movieForm" element={<MovieForm />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
