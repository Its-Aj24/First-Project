import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forget pass/ForgotPassword";


const App = ()=> {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/forget" element={<ForgotPassword />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
