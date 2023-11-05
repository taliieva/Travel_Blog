import {Route, Routes} from 'react-router-dom';
import HomePage from '../pages/Homepage/Homepage';
import Destinations from '../pages/Destinations/Destinations';
import AboutUs from '../pages/AboutUs/AboutUs';
import FAQ from '../pages/FAQ/FAQ';
import ItalyPage from '../pages/ItalyPage/ItalyPage';
import SignIn from '../pages/SignIn/SignIn';
import Blog from '../pages/Blog/Blog';
import ContactUs from '../pages/ContactUs/ContactUs';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import TripPlanning from '../pages/TripPlanning/TripPlanning';


export default function Routers(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path='/Destinations' element={<Destinations/>}/>
                <Route path='/About' element={<AboutUs/>} />
                <Route path='/FAQ' element={<FAQ/>}/>
                <Route path='/Blog' element={<Blog/>}/>
                <Route path='/Contact' element={<ContactUs/>}/>
                <Route path='/Italy' element={<ItalyPage/>}/>
                <Route path='/Sign' element={<SignIn/>}/>
                <Route path='ForgotPassword' element={<ForgotPassword/>}/>
                <Route path='/TripPlanning' element={<TripPlanning/>}/>
            </Routes>
        </div>
       
    )
}