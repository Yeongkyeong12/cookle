// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import WishList from "./pages/WishList";
// import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./components/NavbarHeader";
// import Home from "./pages/Home";
import Pages from "./pages/Pages";

function App() {
  return (
    <div>
      <NavbarHeader />
      {/*<Home /> */}
      <Pages />
    </div>
  );
}

export default App;
