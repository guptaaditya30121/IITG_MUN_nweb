import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Secretariat from './components/Secretariat/Secretariat'
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/secretariat" element={<Secretariat/>}/>
        <Route exact path="/about-us" element={<AboutUs/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
