// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import WishList from "./pages/WishList";
// import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyJumbotron from "./components/MyJumbotron";
import NavbarHeader from "./components/NavbarHeader";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavbarHeader />
      {/* <MyJumbotron /> */}
      <Home />
    </div>
    // <Router>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/login">Login</Link>
    //     <Link to="/wishlist">WishList</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/wishlist" element={<WishList />} />
    //     {/* <Route path="/wishlist:username" element={<WishList />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
