import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "../constants1.js"
//import './chain-info.css'
import { Link, useNavigate, useParams, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function FakeNefturians() {
    const [connectionStatus, setConnectionStatus] = useState('Disconnected');
    const [tokenPrice, setTokenPrice] = useState(null);
    const [ethAmount, setEthAmount] = useState('');

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

    useEffect(() => {
        const fetchTokenPrice = async () => {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const contract = new ethers.Contract(contractAddress, abi, provider);
                try {
                    const price = await contract.tokenPrice();
                    setTokenPrice(price.toString());
                } catch (error) {
                    console.error("Error fetching token price:", error);
                }
            }
        };

        fetchTokenPrice();
    }, []);

    async function buyToken(ethAmount) {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer);
            try {
                const transaction = await contract.buyAToken({ value: ethers.utils.parseEther(ethAmount) });
                await provider.waitForTransaction(transaction.hash);
                console.log(`${ethAmount} ETH. Transaction hash: ${transaction.hash}`);
            } catch (error) {
                console.error("Error buying token:", error);
            }
        }
    };

    return (
        <>
            <div>
                <button onClick={connect}>{connectionStatus}</button>
            </div>
            <div>
                <p>Token Price: {tokenPrice ? ethers.utils.formatEther(tokenPrice) + ' ETH' : 'Loading...'}</p>
                <input type="text" placeholder="Amount in ETH" value={ethAmount} onChange={(e) => setEthAmount(e.target.value)} />
                <button onClick={() => buyToken(ethAmount)}>Buy Token</button>
            </div>

            <div>
                <Link to="/">Go back home</Link>
            </div>
        </>
    )
}

export default FakeNefturians