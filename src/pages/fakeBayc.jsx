import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "../constants.js"
//import './chain-info.css'
import { Link, useNavigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function FakeBayc() {
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
        <>
            <div>
                <button onClick={connect}>{connectionStatus}</button>
            </div>

            <div>
                <Link to="/">Go back home</Link>
            </div>
        </>
    )
}

export default FakeBayc