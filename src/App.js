import React from 'react'
import './App.css';
import { Route } from "wouter"
import Home from "./pages/Home"
import SearchFilms from './pages/SearchFilms';
import Error404 from './pages/404';

export default function App() {
  
  return <>
      <Route
          component={Home}
          path="/"
      />  

      <Route
        component={SearchFilms}
        path="/searchFilm/:keyword" 
      />

      <Route
        component={Error404}
        path="/404" 
      />
      
      {/* <Route
        component={Detail}
        path="/gif/:id"
      />   */}
  </>
}
