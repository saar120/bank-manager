import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./pages/Main.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/transfer" />
          <Route path="/allusers" />
          <Route path="/update" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
