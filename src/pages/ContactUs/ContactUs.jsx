import Footer, {
  OurDestination,
  Revolution,
} from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavCardItem from "../../components/NavCardItem/NavCardItem";
import contactPhoto from "../..//assets/contact.png";
import "../../pages/ContactUs/ContactUs.css";
import ContactText from "./ContactText/ContactText";
import Layout from "../Layouts/Layouts";
export default function ContactUs() {
  return (
    <Layout>
      <NavCardItem
        url={contactPhoto}
        header="Contact us"
        text="Your Journey Begins with a Conversation - Reach Out to Us Today!"
      />
      <ContactText />
      <OurDestination />
      <Revolution />
    </Layout>
  );
}
