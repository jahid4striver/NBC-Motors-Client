import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Bikes from './components/Home/Bikes/Bikes';
import Home from './components/Home/Home/Home';
import UpdateProducts from './components/Pages/UpdateProducts/UpdateProducts';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/bikes' element={<Bikes/>}></Route>
        <Route path='/bikes/:id' element={<UpdateProducts/>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
