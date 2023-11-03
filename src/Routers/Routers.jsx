import {Route, Routes} from 'react-router-dom';
import HomePage from '../pages/Homepage/Homepage';
import Destinations from '../pages/Destinations/Destinations';
import AboutUs from '../pages/AboutUs/AboutUs';
import FAQ from '../pages/FAQ/FAQ';
import ItalyPage from '../pages/ItalyPage/ItalyPage';
import SignIn from '../pages/SignIn/SignIn';


export default function Routers(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path='/Destinations' element={<Destinations/>}/>
                <Route path='/About' element={<AboutUs/>} />
                <Route path='/FAQ' element={<FAQ/>}/>
                <Route path='/Italy' element={<ItalyPage/>}/>
                <Route path='/Sign' element={<SignIn/>}/>
            </Routes>
        </div>
       
    )
}