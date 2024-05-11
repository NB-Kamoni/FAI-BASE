import React from "react";
import './Header.css'; 

function Header() {
  return (
    <div id="market-header">
      
      <p>Karibu Soko!</p>
      <div className="image-container">
      <img
        src="https://i.pinimg.com/564x/2f/31/d2/2f31d26ec75009b37090f40e9de1f0ba.jpg"
        alt="cartimage"
      />
  
          <img
          src="https://i.pinimg.com/564x/85/a4/ab/85a4ab292b83651edd8eeb90062998cd.jpg"
          alt="cartimage"
        />
        </div>
        <div>
          <p>Unaweza kuuza au kununua bithaa kwa njia rahisi</p>
        </div>
    </div>
  );
}

export default Header;