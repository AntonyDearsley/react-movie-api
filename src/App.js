import React from 'react'
import './App.css';
import { Route } from "wouter"
import Home from "./pages/Home"
import SearchFilms from './pages/SearchFilms';
import Error404 from './pages/404';
import SearchSeries from './pages/SearchSeries';

export default function App() {
  
  /*
        Refactorizar los hooks para pasar el type por parametros

        Ruta a 404 si no existe

        Crear searchAll para input principal

        Hooks de type game

        Arreglar getAll poster not found
  */
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
        component={SearchSeries}
        path="/searchSerie/:keyword" 
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
