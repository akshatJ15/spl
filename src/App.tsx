import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Catalouge from './pages/catalouge';
// import Services from './pages/Services';
// import Projects from './pages/Projects';
// import About from './pages/About';\
import VisitUs from './pages/VisitUs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/catalogue" element={<Catalouge />} />
            <Route path='/visitus' element={<VisitUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;