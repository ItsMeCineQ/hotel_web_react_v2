import '../css/reviews.css'
import icon_quote from '../img/icon_quote.png'
import icon_arrow from '../img/icon_arrow_black.png'
import { useState } from 'react'

export default function Reviews() {

    const [isExpanded, setExpanded] = useState(false);

     const toggleReviews = () => {
        setExpanded(!isExpanded);
    };

    return(
        <div className={`reviews--container section ${isExpanded ? 'reviews--expand' : 'reviews--collapse'}`} id="reviews">
            <div className="reviews--review first--review">
                <img src={icon_quote} alt="quote" className="icon--quote-start" />
                <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </span>
                <img src={icon_quote} alt="quote" className="icon--quote-end" />
            </div>
            <div className="reviews--review">
                <img src={icon_quote} alt="quote" className="icon--quote-start" />
                <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </span>
                <img src={icon_quote} alt="quote" className="icon--quote-end" />
            </div>
            <div className="reviews--review">
                <img src={icon_quote} alt="quote" className="icon--quote-start" />
                <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </span>
                <img src={icon_quote} alt="quote" className="icon--quote-end" />
            </div>
            <div className="reviews--review">
                <img src={icon_quote} alt="quote" className="icon--quote-start" />
                <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </span>
                <img src={icon_quote} alt="quote" className="icon--quote-end" />
            </div>
            <button className={`button--reviews ${isExpanded ? 'button--reviews-expand' : ''}`} onClick={toggleReviews}>
                <img src={icon_arrow} alt="arrow" className={`icon--arrow ${isExpanded ? 'rotate' : ''}`} />
            </button>
        </div>
    )
}