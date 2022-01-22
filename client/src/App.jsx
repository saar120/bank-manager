import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchUserPage from "./pages/SearchUser.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchUserPage />} />
          <Route path="/transfer" />
          <Route path="/allusers" />
          <Route path="/update" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
