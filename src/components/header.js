import '../css/header.css'

const Header = function () {
    return (
        <header className="header" id="home">
            <div className="nav--menu">
                <h1 className="header--logo">Hotel.ly</h1>
                <div className="header--menu">
                    <ul className="nav--links">
                        <li><a className="nav--link" href="#home">Home</a></li>
                        <li><a className="nav--link" href="#book">Book</a></li>
                        <li><a className="nav--link" href="#offers">Offers</a></li>
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