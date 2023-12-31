import { useState } from 'react'
import './App.css'
import { ethers } from "ethers";
import { abi, contractAddress } from "./constants.js"

import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chaininfo from './pages/chain-info.jsx'
import ErrorPage from './pages/errorpage.jsx'
import FakeBayc from './pages/fakeBayc.jsx'
import FakeBaycTokenUri from './pages/fakeBaycTokenUri.jsx'
import FakeNefturians from './pages/fakeNefturians.jsx'
import FakeNefturiansUser from './pages/fakeNefturiansUser.jsx'
import FakeMeebits from './pages/fakeMeebits.jsx'


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<>
          <div>
            <Link to="/chain-info">Chain info</Link>
          </div>
        </>} />
        <Route exact path="/chain-info" element={<Chaininfo />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/fakeBayc" element={<FakeBayc />} />
        <Route path="/fakeBayc/:tokenId" element={<FakeBaycTokenUri />} />
        <Route path="/fakeNefturians" element={<FakeNefturians />} />
        <Route path="/fakeNefturians/:userAddress" element={<FakeNefturiansUser />} />
        <Route path="/fakeMeebits" element={<FakeMeebits />} />
      </Routes>
    </Router>
  )
}

export default App
