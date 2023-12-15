import '../css/header.css'
import { useEffect } from 'react'

const Header = function () {

    useEffect(() => {
        const handleNavLinkClick = (e) => {
          e.preventDefault();
          if (e.target.classList.contains('nav--link')) {
            const id = e.target.getAttribute('href');
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
          }
        };
    
        const navLinks = document.querySelectorAll('.nav--link');
        navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));
    
        return () => {
          navLinks.forEach(link => link.removeEventListener('click', handleNavLinkClick));
        };
      }, []);

    return (
        <header className="header" id="home">
            <div className="nav--menu">
                <h1 className="header--logo">Hotel.ly</h1>
                <div className="header--menu">
                    <ul className="nav--links">
                        <li><a className="nav--link" href="#home">Home</a></li>
                        <li><a className="nav--link" href="#book">Book</a></li>
                        <li><a className="nav--link" href="#about_us">About us</a></li>
                        <li><a className="nav--link" href="#reviews">Reviews</a></li>
                        <li><a className="nav--link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;