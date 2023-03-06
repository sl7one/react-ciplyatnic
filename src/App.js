import './css/index.css';
import './css/reset.css';
import './css/basic.scss';
import { Home } from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Orders } from './pages/Orders';
import { Purchases } from './pages/Purchases';
import { Salles } from './pages/Salles';
import { Statistic } from './pages/Statistic';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="sales" element={<Salles />} />
        <Route path="statistic" element={<Statistic />} />
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Route>
    </Routes>
  );
}

export default App;
