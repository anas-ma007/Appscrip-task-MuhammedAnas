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

    if (!data || data.length === 0) {
        const shimmerItems = Array.from({ length: 10 }, (_, index) => index);
        return (
            <React.Fragment>
                <div className="shimmer-container">
                    {shimmerItems.map((item) => (
                        <ShimmerHome key={item} />
                    ))}
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className="product-card-map-container">
                    {data?.map((product) => (
                        <Link key={product.id} href="">  < ProductCards info={product} /> </Link>))}
                </div>
            </React.Fragment>
        )
    }
}

export default FetchData