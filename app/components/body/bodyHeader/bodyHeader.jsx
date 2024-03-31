
import { menuState } from '@/app/state/atoms/menuOpenState';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

function BodyHeader() {

    const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuState)
    return (
        <div className='body-header-container'>
            <div className='left-body-header-area'>
                <p>Total Counts</p>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} > {isMenuOpen ? "Hide Filter" : "Show Filter"}</button>
            </div>
            <div className='right-body-header-area'>
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
