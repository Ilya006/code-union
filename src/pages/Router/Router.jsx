import React from 'react'
import { Route, Routes, Navigate, Router } from 'react-router-dom'
import { Home } from 'pages/home'

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="hello" />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
)
