import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import FadeInSection from './components/fadeInSection/FadeInSection';

function App() {
  const [fadeComplete, setFadeComplete] = useState(false);

  const handleLastSectionVisible = () => {
    setFadeComplete(true);
    console.log('All sections are visible. Animation complete!');
  };

  return (
    <div>
      <Sidebar />
      <main className="main">
        <section id="home"><Home /></section>
        <section id="about"><FadeInSection><About /></FadeInSection></section>
        <section id="services"><FadeInSection><Services /></FadeInSection></section>
        <section id="resume"><FadeInSection><Resume /></FadeInSection></section>
        <section id="portfolio"><FadeInSection><Portfolio /></FadeInSection></section>
        <section id="blog"><FadeInSection><Blog /></FadeInSection></section>
        <section id="contact">
          <FadeInSection onLastSectionVisible={handleLastSectionVisible}>
            <Contact />
          </FadeInSection>
        </section>
      </main>
    </div>
  );
}

export default App;
