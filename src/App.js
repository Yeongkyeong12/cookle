import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyRecipe from "./pages/MyRecipe";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/myrecipe">MyRecipe</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myrecipe" element={<MyRecipe />} />
        {/* <Route path="/myrecipe/:username" element={<MyRecipe />} /> */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <div>footer</div>
    </Router>
  );
}

export default App;
