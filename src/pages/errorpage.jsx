import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div>
            <h2>Error: You are not connected to the Sepolia network.</h2>
            <Link to="/">Go back home</Link>
        </div>
    );
}

export default ErrorPage;
