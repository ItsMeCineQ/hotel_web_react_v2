import '../css/reviews.css'

export default function Reviews() {
    return(
        <div className="reviews--container section" id="reviews">
            <div className="reviews--review first--review">
                <img src="src/img/icon_quote.png" alt="quote" className="icon--quote-start" />
                <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </span>
                <img src="src/img/icon_quote.png" alt="quote" className="icon--quote-end" />
            </div>
            <div className="reviews--review">
                <img src="src/img/icon_quote.png" alt="quote" className="icon--quote-start" />
                <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </span>
                <img src="src/img/icon_quote.png" alt="quote" className="icon--quote-end" />
            </div>
            <div className="reviews--review">
                <img src="src/img/icon_quote.png" alt="quote" className="icon--quote-start" />
                <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </span>
                <img src="src/img/icon_quote.png" alt="quote" className="icon--quote-end" />
            </div>
            <div className="reviews--review">
                <img src="src/img/icon_quote.png" alt="quote" className="icon--quote-start" />
                <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam eaque facilis consectetur delectus est libero omnis dignissimos aperiam voluptatem?
                </span>
                <img src="src/img/icon_quote.png" alt="quote" className="icon--quote-end" />
            </div>
            <button className="button--reviews button--reviews-expanded">
                <img src="src/img/icon_arrow_black.png" alt="arrow" className="icon--arrow" />
            </button>
        </div>
    )
}