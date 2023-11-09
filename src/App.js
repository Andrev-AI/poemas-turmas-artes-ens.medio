import './App.css';
import Home from "./components/pages/home"
import Poemas from "./components/pages/poemas"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/poemas' element={<Poemas />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
