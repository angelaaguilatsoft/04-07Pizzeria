import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/NavBar.jsx";
import Header from './component/Header.jsx';
import Footer from "./component/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Register from "./views/Register.jsx";
import Login from "./views/Login.jsx";
import Cart from "./views/Cart.jsx";
import P001 from "./views/Pizza/P001.jsx";
import NotFound from "./views/NotFound.jsx";
import Profile from "./views/Profile.jsx";


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path="/Register" element={<Register></Register>} />

        <Route path="/Profile" element={<Profile></Profile>} />

        <Route path="/Login" element={<Login></Login>} />

        <Route path="/Cart" element={<Cart></Cart>} />

        <Route path="/Pizza/P001" element={<P001></P001>} />

        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;