import React from 'react';
// import './BodyHeader.css'; // Importing the separate CSS file

function BodyHeader() {
    return (
        <div className='body-header-container'>
            <div className='left-body-header-area'>
                <p>Total Counts</p>
                <button>HIDE ITEMS or SHOW ITEMS</button>
            </div>
            <div className='right-body-header-area'>
                {/* <label htmlFor="products">RECOMMENDED: </label> */}
                <select name="sort" id="sort">
                    <option value="date">Newest First</option>
                    <option value="star">Popular</option>
                    <option value="sort">Price: High to Low</option>
                    <option value="sort">Price: Low to High</option>
                </select>
            </div>
        </div>
    );
}

export default BodyHeader;
