import React from 'react';
import Link from 'next/link';
// import './Sidebar.css'; 

function Sidebar() {
  return (
    <React.Fragment>
      <div className='sidebar'>
        <div>
          <Link href={"/"}>
            <h4 className='menu-item'>Home</h4>
          </Link>
          <div className='customizable-option'>
            <input type="checkbox" id="customizable" name="customizable" />
            <label htmlFor="customizable">Customizable</label>
          </div>
          <div>
          <ul className='submenu'>

            <div className='customizable-option'>
              <input type="checkbox" id="customizable" name="customizable" />
              <label htmlFor="customizable">Men</label>
            </div> <div className='customizable-option'>
              <input type="checkbox" id="customizable" name="customizable" />
              <label htmlFor="customizable">Women</label>
            </div> <div className='customizable-option'>
              <input type="checkbox" id="customizable" name="customizable" />
              <label htmlFor="customizable">Baby & Kids</label>
            </div>
            </ul>
          </div>

        </div>
        <div>
          <ul className='submenu'>
            <p className='submenu-title'>Occasion</p>
            <select className='submenu-item'> <option value="">All</option>   </select>
          </ul>
        </div>
        <div>
          <ul className='submenu'>
            <p className='submenu-title'>Work</p>
            <select className='submenu-item'> <option value="">All</option>   </select>

          </ul>
        </div>
        <div>
          <ul className='submenu'>
            <p className='submenu-title'>Fabric</p>
            <select className='submenu-item'> <option value="">All</option>   </select>

          </ul>
        </div>
        <div>
          <ul className='submenu'>
            <p className='submenu-title'>Segment</p>
            <select className='submenu-item'> <option value="">All</option>   </select>

          </ul>
        </div>
        <div>
          <ul className='submenu'>
            <p className='submenu-title'>Suitable For</p>
            <select className='submenu-item'> <option value="">All</option>   </select>

          </ul>
        </div>
        <div>
          <ul className='submenu'>
            <p className='submenu-title'>Raw Material</p>
            <select className='submenu-item'> <option value="">All</option>   </select>

          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
