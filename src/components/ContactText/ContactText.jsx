import "../../components/ContactText/ContactText.css";
export default function ContactText() {
  return (
    <div className="contactContainer">
      <div>
        <h3>Commercial Contacts</h3>
        <p>To advertise on Tourista:</p>
        <a href="#">advertise@tourista.com</a>
        <p>To become an affiliate partner:</p>
        <a href="#">affiliate@tourista.com</a>
        <p>To contact the hotels team:</p>
        <a href="#">hotels@tourista.com</a>
        <p>Send your request to republish Tourista content:</p>
        <a href="#">contentlicensing@tourista.com</a>
        <p>To contact the experiences team:</p>
        <a href="#">experiences@tourista.com</a>
      </div>
      <div>
        <h3>Content Contact</h3>
        <p>To report an issue to our content teams please contact: </p>
        <a href="#">corrections@tourista.com</a>
        <h3>Press Contact</h3>
        <p>
          If you’re a journalist / influencer with a press enquiry about
          Tourista, please contact our press office:
        </p>
        <a href="#">pr@tourista.com</a>
        <h3>Partnership Contact</h3>
        <p>For partnership opportunities:</p>
        <a href="#">partnerships@tourista.com</a>
      </div>
    </div>
  );
}
