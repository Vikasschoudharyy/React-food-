import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cartpage from './components/Cartpage';
import Navbar from './components/Navbar';
import Productcard from './components/Productcard';


function App() {
  return (
    
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Productcard />} />
        <Route path="/cart" element={<Cartpage/>} />
        <Route path="*" element={"Page Not Found"} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
