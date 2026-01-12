import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import { DEFAULT_ROUTE } from './components/Sidebar/constants'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        <div className="content-area">
          <Routes>
            {/* For now, all routes render the same Dashboard component */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<Dashboard />} />
            <Route path="/pre-built-algos" element={<Dashboard />} />
            <Route path="/my-algos" element={<Dashboard />} />
            <Route path="/my-account" element={<Dashboard />} />
            
            {/* Default route - redirect to dashboard */}
            <Route path="/" element={<Navigate to={DEFAULT_ROUTE} replace />} />
            
            {/* Catch all - redirect to dashboard */}
            <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App

