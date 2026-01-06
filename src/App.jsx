import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        <div className="content-area">
          <Body />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App

