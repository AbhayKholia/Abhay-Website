import React from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css"

const Navigation = () => {
  return (
    <nav className='bottom-nav'>
      <ul>
        <li>
          <Link to="/">
       <img src="https://cdn-icons-png.flaticon.com/256/25/25694.png" alt="" />
            </Link>
        </li>
        <li>
          <Link to="/about">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/About_icon_%28The_Noun_Project%29.svg/2048px-About_icon_%28The_Noun_Project%29.svg.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/shop">
            <img src="https://cdn-icons-png.flaticon.com/512/74/74827.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/category">
            <img src="data:image/png;base64,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" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
