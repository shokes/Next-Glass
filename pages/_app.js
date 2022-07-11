import '../styles/globals.css';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
// import Footer from '../components/Footer/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
