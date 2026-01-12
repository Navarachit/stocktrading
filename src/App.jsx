import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading/Loading'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { DEFAULT_ROUTE } from './components/Sidebar/constants'
import './App.css'

// Lazy load page components for code splitting
// This allows the app to split code into separate chunks, loaded on demand
const Dashboard = lazy(() => import('./pages/Dashboard'))

function App() {
  return (
    <div className="app">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        <div className="content-area">
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
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
            </Suspense>
          </ErrorBoundary>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App

