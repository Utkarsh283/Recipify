/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import RecipePage from './pages/RecipePage.jsx';
import SearchResults from './pages/Search.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/Recipify/' element={<Layout />} >
       < Route path='' element={<Home />} />
       < Route path='recipe' element={<RecipePage />} />
       < Route path='search' element={<SearchResults />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

