import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";




function App() {

  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes> 
          <Route path='/' exact Component={Home}/>
          <Route path='/menu' exact Component={Menu}/>
          <Route path='/cart' exact Component={Cart}/>
          <Route path='/checkout' exact Component={Checkout}/>
          <Route path='/about' exact Component={About}/>
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;