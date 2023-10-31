import homePageVideo from "../../assets/Homepage.gif";
import "../Videos/Video.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function HomePageVideo(){
    return(
        <div className="imageContainer">
            <img src={homePageVideo} alt="" />
            <div className="absoluteContainer">
            <h1>We create trips you love</h1>
            <p>Trips you couldn't plan, even if you wanted to.</p>
            <div className="inputOnVideo">
                <input type="text" placeholder="Where do you want to go?" />
                <div className="searchIcon">
                    <FontAwesomeIcon icon={faMagnifyingGlass}  />
                </div>
                
            </div>
            </div>
            
        </div>
    )
}