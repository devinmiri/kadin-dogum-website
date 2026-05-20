import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages placeholder
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimda" element={<About />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
