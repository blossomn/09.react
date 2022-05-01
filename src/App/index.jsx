import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Join from '../pages/Join';
import Login from '../pages/Login';
import Main from '../pages/Main';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
