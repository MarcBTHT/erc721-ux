import { useState } from 'react'
import './App.css'
import { ethers } from "ethers";
import { abi, contractAddress } from "./constants.js"

import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chaininfo from './pages/chain-info.jsx'
import ErrorPage from './pages/errorpage.jsx'
import FakeBayc from './pages/fakeBayc.jsx'

function App() {
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" })
        setConnectionStatus('Connected'); // Update button text
        const accounts = await ethereum.request({ method: "eth_accounts" })
        console.log(accounts)
      } catch (error) {
        console.log(error)
      }
    } else {
      setConnectionStatus('Please install MetaMask'); // Update button text
    }
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<>
          <div>
            <button onClick={connect}>{connectionStatus}</button>
          </div>
          <div>
            <Link to="/chain-info">Next Page</Link>
          </div>
        </>} />
        <Route exact path="/chain-info" element={<Chaininfo />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/fakeBayc" element={<FakeBayc />} />
      </Routes>
    </Router>
  )
}

export default App
