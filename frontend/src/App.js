import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Platforms from './components/Platforms/Platforms';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Thanks from './components/Thanks/thanks';

function App() {
  return (
    <BrowserRouter>
      <div className="app-main">
        {/* Main Content */}
        <div className="app-content">
          
          <main className="main-content">
            <section className="grid-section">
              <div className="bg-grid-hero">
                <div className="radial-fade-hero"></div>
                 <Header />
                <Hero />
              </div>
             
            </section>
            <Platforms /> 
            <Features />
            <Services />
            <Testimonials />
            <Contact />
            <Thanks />
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
