import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import AddToping from "./pages/AddToping";
import Transaction from "./pages/Transaction";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail" element={<Detail />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/addtoping" element={<AddToping />} />
        <Route exact path="/transaction" element={<Transaction />} />
      </Routes>
    </Router>
  );
}

export default App;
