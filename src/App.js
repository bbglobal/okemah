import { Header, Footer, ScrollToTop } from './components';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Lenis from 'lenis'
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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
