import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        <div className="content-area">
        </div>
      </div>
    </div>
  )
}

export default App

