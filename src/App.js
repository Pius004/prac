import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Gen.css';
import Home from './Home.js';
import Nav from './Nav.js'

function App() {
  return (
    <div className="App">
         <BrowserRouter>
              <Routes>
                <Route path="/" element={<Nav />} / >

                  <Route path="home" element={<Home />} />


              </Routes>
            </BrowserRouter>

    </div>
  );
}

export default App;
