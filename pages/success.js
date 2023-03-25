import React, {useEffect, useState} from "react";
import { useStateContext } from "../context/StateContext";
import Link from "next/link";
const Success  = () => {
    const {setTotalPrice, setTotalQuantity, setCartItems} = useStateContext();
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantity(0);
    },[]);
    return (
        <div className="success">
            <div className="items_">
            THANKS FOR PURCHASING ...
            <Link href="/" className="link">Go Back</Link>
            </div>
        </div>
    );
}

export default Success;