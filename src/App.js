import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Country from './components/Country';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="/country/:details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
