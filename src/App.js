import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Country from './components/Country';
import CurrentItem from './components/CurrentItem';
import NoMatch from './components/NoMatch';
import Forecast from './components/Forecast';
import Search from './components/Search';
import History from './components/History';
import Future from './components/Future';
import Astronomy from './components/Astronomy';
import TimeZone from './components/TimeZone';
import Sports from './components/Sports';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="/country/:current" element={<CurrentItem />} />
        <Route path="/country/forecast" element={<Forecast />} />
        <Route path="/country/search" element={<Search />} />
        <Route path="/country/history" element={<History />} />
        <Route path="/country/future" element={<Future />} />
        <Route path="/country/astronomy" element={<Astronomy />} />
        <Route path="/country/timezone" element={<TimeZone />} />
        <Route path="/country/sports" element={<Sports />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
