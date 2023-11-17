import '../css/about_us.css'
import image1 from '../img/about_us_img-lazy-3.jpg'
import image2 from '../img/about_us_img-lazy-2.jpg'
import image3 from '../img/about_us_img-lazy-1.jpg'
import image4 from '../img/about_us_img-lazy-1.jpg'
import image5 from '../img/about_us_img-lazy-1.jpg'

export default function AboutUs() {
    return(
        <div className="about_us--container section" id="about_us">
            <div className="about_us--content">
                <img src={image1} data-src="https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="photo" className="lazy-img"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>      
            </div>        
            <div className="about_us--content reverse">
                <img src={image2} data-src="https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="photo" className="lazy-img"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>      
            </div>        
            <div className="about_us--content">
                <img src={image3} data-src="https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="photo" className="lazy-img"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>      
            </div>        
            <div className="about_us--content reverse">
                <img src={image4} data-src="src/img/hotel.jpg" alt="photo" className="lazy-img"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>      
            </div>        
            <div className="about_us--content">
                <img src={image5} data-src="src/img/hotel.jpg" alt="photo" className="lazy-img"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>      
            </div>        
        </div>
    )
}