import Footer, { OurDestination, Revolution } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavCardItem from "../../components/NavCardItem/NavCardItem";
import blogPhoto from "../../assets/blog.png";
import BlogNavLink from "../../components/BlogNavLink/BlogNavLink";
import BlogTripInfo from "../../components/BlogTripInfo/BlogTripInfo";

export default function Blog(){
    return(
        <div>
            <Header/>
            <NavCardItem url={blogPhoto} header="Blog" text='Blog articles for "Inspiration".'/>
            <BlogNavLink/>
            <BlogTripInfo/>
            <OurDestination/>
            <Revolution/>
            <Footer/>
        </div>
    )
}