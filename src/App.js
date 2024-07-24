import { Header, Footer, ScrollToTop, Home, About, Store, Ebook, Episodes, Contact, Blogs } from './components';
import { Route, Routes } from 'react-router-dom';
import Lenis from 'lenis'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import './App.css';

function App() {

  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/store`} element={<Store />} />
        <Route path={`/e-books`} element={<Ebook />} />
        <Route path={`/podcast-episodes`} element={<Episodes />} />
        <Route path={`/contact-us`} element={<Contact />} />
        <Route path={`/blog-&-news`} element={<Blogs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
