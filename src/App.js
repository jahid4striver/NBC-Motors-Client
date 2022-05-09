import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Bikes from './components/Home/Bikes/Bikes';
import Home from './components/Home/Home/Home';
import AddItem from './components/Pages/AddItem/AddItem';
import AddSales from './components/Pages/AddSales/AddSales';
import AllSales from './components/Pages/AllSales/AllSales';
import Blogs from './components/Pages/Blogs/Blogs';
import Login from './components/Pages/Login/Login';
import ManageInventories from './components/Pages/ManageInventories/ManageInventories';
import NotFound from './components/Pages/NotFound/NotFound';
import Register from './components/Pages/Register/Register';
import Requirements from './components/Pages/Requirements/Requirements';
import UpdateProducts from './components/Pages/UpdateProducts/UpdateProducts';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import ProtectedRoute from './components/Shared/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/bikes' element={<Bikes />}></Route>
        <Route path='/bikes/:id' element={
          <ProtectedRoute>
            <UpdateProducts />
          </ProtectedRoute>
        }></Route>
        <Route path='/manageinventory' element={
          <ProtectedRoute>
            <ManageInventories />
          </ProtectedRoute>}></Route>
        <Route path='/additem' element={
          <ProtectedRoute>
            <AddItem />
          </ProtectedRoute>}></Route>
        <Route path='/addsales' element={
          <ProtectedRoute>
            <AddSales />
          </ProtectedRoute>}></Route>
        <Route path='/allsales' element={<AllSales />}></Route>
        <Route path='/requirements' element={<Requirements />}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
