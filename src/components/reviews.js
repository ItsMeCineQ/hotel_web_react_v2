import '../css/reviews.css'
import icon_quote from '../img/icon_quote.png'
import icon_arrow from '../img/icon_arrow_black.png'
import { useState, useEffect, useRef } from 'react'
import { hotels } from './hotels.js';

export default function Reviews() {

    const hotelObjects = Object.values(hotels);

    const [isExpanded, setExpanded] = useState(false);
    const sectionReviewsRef = useRef(null);

     const toggleReviews = () => {
        setExpanded(!isExpanded);
    };

    useEffect(() => {
        if (!isExpanded) {
          sectionReviewsRef.current.scrollTo({top: 0, behavior: 'smooth'});
        }
      }, [isExpanded]);
    
    return(
        <div ref={sectionReviewsRef} className={`reviews--container section ${isExpanded ? 'reviews--expand' : 'reviews--collapse'}`} id="reviews">
            {hotelObjects.map((hotel, hotelIndex) => {
                const reviewElements = [];
                
                for (let reviewIndex = 0; reviewIndex < hotel.reviews.reviews_users.length; reviewIndex++) {
                    const elReview = hotel.reviews.reviews_users[reviewIndex];
                    const reviewElement = (
                        <div className="reviews--review" key={reviewIndex}>
                            <h2 className='hotel--name'>{hotel.name}</h2>
                            <div key={reviewIndex}>
                                <div className='user--review'>
                                    <h2 className='user--name'>{elReview}</h2>
                                    <p className='user--reviews_review'>{hotel.reviews.reviews_rates[reviewIndex]}/5{'⭐'}</p>
                                </div>
                                <div className='reviews--quotes'>
                                    <img src={icon_quote} alt="quote" className="icon--quote icon--quote-start" />
                                    <p className='user--reviews_text'>{hotel.reviews.reviews_text[reviewIndex]}</p>
                                    <img src={icon_quote} alt="quote" className="icon--quote icon--quote-end" />
                                </div>
                            </div>
                        </div>
                    );
                    reviewElements.push(reviewElement);
                }
                return reviewElements;
            })}
            {/* <div className="reviews--review">
                <img src={icon_quote} alt="quote" className="icon--quote-start" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </p>
                <img src={icon_quote} alt="quote" className="icon--quote-end" />
            </div>
            <div className="reviews--review">
                <img src={icon_quote} alt="quote" className="icon--quote-start" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </p>
                <img src={icon_quote} alt="quote" className="icon--quote-end" />
            </div>
            <div className="reviews--review">
                <img src={icon_quote} alt="quote" className="icon--quote-start" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </p>
                <img src={icon_quote} alt="quote" className="icon--quote-end" />
            </div> */}
            <button className={`button--reviews ${isExpanded ? 'button--reviews-expand' : ''}`} onClick={toggleReviews}>
                <img src={icon_arrow} alt="arrow" className={`icon--arrow ${isExpanded ? 'rotate' : ''}`} />
            </button>
        </div>
    )
}