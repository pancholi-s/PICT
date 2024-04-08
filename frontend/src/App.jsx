import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import BuyBooks from './pages/BuyBooks';
import Admin from './pages/Admin';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/login' element={<Login />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/buy/:id' element={<BuyBooks />} />
      <Route path='/books/admin/:id' element={<Admin />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App;