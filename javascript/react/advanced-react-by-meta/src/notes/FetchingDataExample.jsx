import React, { useState, useEffect } from 'react';

const FetchingDataExample = () => {
    const [btcData, setBtcData] = useState({});

    const fetchBtcData = async () => {
        const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
        const jsonData = await res.json();
        setBtcData(jsonData.bpi.USD)
    }
    useEffect(() => {
        // setTimeout(fetchBtcData, 1000);
        fetchBtcData();
    }, [])

    return Object.keys(btcData).length > 0 ? (
        <>
            <h1>Current BTC/USD data</h1>
            <p>Code: {btcData.code}</p>
            <p>Symbol: {btcData.symbol}</p>
            <p>Rate: {btcData.rate}</p>
            <p>Description: {btcData.description}</p>
            <p>Rate Float: {btcData.rate_float}</p>
        </>
    ) : (
        <h1>Data is Pending...</h1>
    )
}

export default FetchingDataExample;