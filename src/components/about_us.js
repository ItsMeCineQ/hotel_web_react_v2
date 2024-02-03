import '../css/about_us.css'
import image1 from '../img/hotel.jpg'
import image2 from '../img/about_us_img-2.jpg'
import image3 from '../img/about_us_img-1.jpeg'
import image4 from '../img/about_us_img-4.jpg'
import image5 from '../img/about_us_img-5.jpg'

export default function AboutUs() {

    return(
        <div className="about_us--container section" id="about_us">
            <div className="about_us--content">
                <img src={image1} loading="lazy" alt="photo"/>
                <div className='about_us--content-text'>
                    <h1>Our hotels</h1>
                    <p>Welcome to "Hotel.ly" where luxury meets serenity in the heart of the city. Our hotels are a sanctuary of sophistication, designed to provide an unforgettable retreat for every guest. From the moment you step into our elegant lobby, our dedicated staff is committed to ensuring your stay is nothing short of exceptional.</p>
                </div>
            </div>        
            <div className="about_us--content reverse">
                <img src={image2} loading="lazy" alt="photo" />
                <div className='about_us--content-text'>
                    <h1>Our staff</h1>
                    <p>Our team of hospitality professionals embodies the spirit of warmth and attentiveness, eager to anticipate and fulfill your every need. From the concierge who orchestrates seamless experiences to the housekeeping staff ensuring impeccable cleanliness, each member of our team is dedicated to creating a welcoming atmosphere.</p>
                </div>
            </div>        
            <div className="about_us--content">
                <img src={image3} loading="lazy" alt="photo" />
                <div className='about_us--content-text'>
                    <h1>Our rooms</h1>
                    <p>Indulge in the comfort of our thoughtfully designed rooms and suites, where modern amenities seamlessly blend with tasteful décor. Whether you choose a cozy standard room or an expansive suite with breathtaking views, each space is meticulously crafted to provide a haven of relaxation. Plush bedding, state-of-the-art technology, and stylish furnishings ensure that your stay is both luxurious and comfortable.</p>
                </div>
            </div>        
            <div className="about_us--content reverse">
                <img src={image4} loading="lazy" alt="photo" />
                <div className='about_us--content-text'>
                    <h1>Lobby</h1>
                    <p>Hotel.ly invites you to immerse yourself in a world of refined hospitality, where every detail is tailored to exceed your expectations. Whether you're here for business or leisure, our hotel promises an unparalleled experience, where exceptional service, elegant accommodations, and a sense of tranquility converge to create memories that last a lifetime.</p>
                </div>
            </div>             
        </div>
    )
}