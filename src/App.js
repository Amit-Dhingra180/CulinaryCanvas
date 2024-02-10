import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path='/' exact Component={Home}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;