import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function LayoutPrincipal({ children }) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}
