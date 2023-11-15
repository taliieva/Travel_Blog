import Footer, {
  OurDestination,
  Revolution,
} from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavCardItem from "../../components/NavCardItem/NavCardItem";
import blogPhoto from "../../../public/assets/blog.png";
import BlogNavLink from "./BlogNavLink/BlogNavLink";
import BlogTripInfo from "./BlogTripInfo/BlogTripInfo";
import Layout from "../Layouts/Layouts";
import style from "./Blog.module.css";
export default function Blog() {
  return (
    <Layout>
      <NavCardItem
        url={blogPhoto}
        header="Blog"
        text='Blog articles for "Inspiration".'
      />
      <BlogNavLink />
      <BlogTripInfo />
      <OurDestination />
      <Revolution />
    </Layout>
  );
}
