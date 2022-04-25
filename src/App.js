import React from 'react'
import './App.css';
import { Route } from "wouter"
import Home from "./pages/Home"
import SearchAll from './pages/SearchAll'
import SearchType from './pages/SearchType'
import Error404 from './pages/404'

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
        component={SearchAll}
        path="/search/:keyword" 
      />

      <Route
        component={SearchType}
        path="/search/:type/:keyword" 
      />
      
      {/* <Route
        component={Detail}
        path="/gif/:id"
      />   */}

      <Route
        component={Error404}
        path="/404" 
      />
  </>
}
