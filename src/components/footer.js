import '../css/footer.css'

export default function Footer() {

    const scrollToNav = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return(
        <footer>
            <h2 className="footer--logo" onClick={scrollToNav}>Hotel.ly</h2>
            <p>All rights reserved ©️2023</p>
        </footer>
    )
}