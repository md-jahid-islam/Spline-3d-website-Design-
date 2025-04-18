import React from 'react';
const FooterComponets = () => {
  return (
    <>
    <div className=' mt-40'>
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-logo">GarmentsCo</h2>
          <p className="footer-description">
            Stylish, modern, and comfortable clothing for everyone. Explore our collection today.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Stay updated with our latest offers</p>
          <form>
            <input type="email" placeholder="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GarmentsCo. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
    </>
  );
 };

 export default FooterComponets;
