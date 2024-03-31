import React from 'react'
import ShimmerHome from './shimmerCard';
import Link from 'next/link';
import ProductCards from './productCard';
const { PRODUCTS_API } = require("@/app/utils/constants");



async function fetchDataServerSide() {
    const res = await fetch(PRODUCTS_API)
    if (!res.ok) {
        throw new Error("Failed to load")
    }
    return res.json()
}


 async function FetchData() {
    const data = await fetchDataServerSide()
    console.log(data);
    // console.log(data.length , "data length");
    if (!data || data.length === 0) {
        const shimmerItems = Array.from({ length: 10 }, (_, index) => index);
        return (
            <div className="shimmer-container">
                {shimmerItems.map((index) => (
                    <ShimmerHome key={index} />
                ))}
            </div>
        )
    } else   {
        return (
            <div className='prodcut-cards-class'>
                {data?.map((product) => (
                    < ProductCards info={product} key={product.id} />))}
            </div>
        )
    }
}

export default FetchData