import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Country from './components/Country';
import DetailsItem from './components/DetailsItem';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="/country/:details" element={<DetailsItem />} />
      </Routes>
    </div>
  );
}

export default App;
