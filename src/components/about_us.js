import '../css/about_us.css'
import image1 from '../img/hotel.jpg'
import image2 from '../img/about_us_img-2.jpg'
import image3 from '../img/about_us_img-1.jpeg'
import image4 from '../img/about_us_img-1.jpeg'
import image5 from '../img/about_us_img-1.jpeg'

export default function AboutUs() {

    return(
        <div className="about_us--container section" id="about_us">
            <div className="about_us--content">
                <img src={image1} loading="lazy" alt="photo"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>      
            </div>        
            <div className="about_us--content reverse">
                <img src={image2} loading="lazy" alt="photo" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>      
            </div>        
            <div className="about_us--content">
                <img src={image3} loading="lazy" alt="photo" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>      
            </div>        
            <div className="about_us--content reverse">
                <img src={image4} loading="lazy" alt="photo" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>      
            </div>        
            <div className="about_us--content">
                <img src={image5} loading="lazy" alt="photo" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam repudiandae dicta debitis, totam minima assumenda deserunt recusandae necessitatibus voluptatem ullam ad accusantium dolores eos pariatur saepe. Cum libero facere eum, nemo recusandae voluptate ex ad nulla dicta non error ratione, nihil, nesciunt quibusdam architecto odit fugit ipsam omnis obcaecati.</p>      
            </div>        
        </div>
    )
}