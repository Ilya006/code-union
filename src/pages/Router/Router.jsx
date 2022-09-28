import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from 'pages/home'

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
)
