import '../css/about_us.css'

export default function ContactUs() {
    return(
        <div className="contact--container section" id="contact">
            <span>Contact us with e-mail!</span>
            <div className="form--contact">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your e-mail" />
                <select name="Choose topic" className="form--contact-select">
                    <option value="">Choose topic...</option>
                    <option value="Reservation">Reservation</option>
                    <option value="Reservation">Localizations</option>
                    <option value="Reservation">Availability</option>
                    <option value="Reservation">Events</option>
                </select>
                <textarea className="form--contact-message" cols="30" rows="10" placeholder="Your message..."></textarea>
            </div>
        </div>
    )
}