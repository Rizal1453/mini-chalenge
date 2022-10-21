import logo from './logo.svg';
import './App.css';
import Utama from "./components/utama";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" exact component={Utama} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
