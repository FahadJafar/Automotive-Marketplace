import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import NewCars from "./NewCars";
import Contact from "./Contact";
import Login from "./Login";
import View from "./View";
import Sell from "./Sell";
function App() {
  

  return (
    <div className="App">
      <Router>
  <Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/new" element={<NewCars/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/sell" element={<Sell/>}/>
<Route path="/view/:id" element={<View/>}/>
<Route path="/Login" element={<Login/>}/>


</Routes>
    
  </Router>
    </div>
  );
}

export default App;
