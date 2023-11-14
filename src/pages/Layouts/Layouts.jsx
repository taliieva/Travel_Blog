import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
