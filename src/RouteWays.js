import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function RouteWays() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}
