import './styles/reset.css';
import './styles/common.css';
import './styles/layout.css';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Main from './components/Main';
import Cart from './components/Cart';
import Customer from './components/Customer';
import Event from './components/Event';
import Intro from './components/Intro';
import Join from './components/Join';
import Login from './components/Login';
import Order from './components/Order';
import Info from './components/Info';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <div className='body'>
    <BrowserRouter>
      <Header />

      {/* sub콤포넌트 */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/event' element={<Event />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
        <Route path='/order' element={<Order />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
