import '../css/header.css'
import { useEffect } from 'react'
import icon_menu from '../img/icon_menu.png'

const Header = function () {

  const openMenu = () => {
    const menu = document.querySelector('.nav--links');

    menu.classList.toggle('nav--links-active');
  }

    useEffect(() => {
      const handleNavLinkClick = (e) => {
        e.preventDefault();
        if (e.target.classList.contains('nav--link')) {
          const id = e.target.getAttribute('href');
          const targetElement = document.querySelector(id);
      
          if (targetElement) {
            const offset = targetElement.offsetTop - document.querySelector('.header').offsetHeight;
            window.scrollTo({
              top: offset,
              behavior: 'smooth',
            });
          }
        }
      };

        const header = document.querySelector('.header');

        document.addEventListener('scroll', () => {
          const scrollPosition = window.scrollY;
    
          const threshold = 50;
    
          if (scrollPosition > threshold) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        });
    
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
                  <img src={icon_menu} onClick={openMenu} className='nav--menu-burger'></img>
                    <ul className="nav--links">
                        <li><a className="nav--link" href="#home">Home</a></li>
                        <li><a className="nav--link" href="#about_us">About us</a></li>
                        <li><a className="nav--link" href="#spa">Relax</a></li>
                        <li><a className="nav--link" href="#restaurant">Restaurant</a></li>
                        <li><a className="nav--link" href="#reviews">Reviews</a></li>
                        <li><a className="nav--link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;