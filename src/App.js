import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Country from './components/Country';
import CurrentItem from './components/CurrentItem';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="/country/:current" element={<CurrentItem />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
