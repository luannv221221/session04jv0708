import React, { useEffect, useState } from 'react'

function DemoUseEffect() {
    const [first, setfirst] = useState(1);
    const [check, setcheck] = useState(true);
    // TH1 
    useEffect(() => {
        console.log("TH1 Element đã nạp vào DOM hoặc compoent re-render");
    });

    // TH2 
    useEffect(() => {
        console.log("TH2 component được mount");
    }, []);

    // TH3 
    useEffect(() => {
        console.log("TH3");
    }, [check]);

    return (
        <>
            <h1>Sate First {first}</h1>
            <div>DemoUseEffect </div>
            <button onClick={() => setfirst(first + 1)}>Re-redndẻ</button>
            <button onClick={() => setcheck(!check)}>Change Check </button>
        </>
    )
}

export default DemoUseEffect