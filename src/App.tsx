import React from 'react';
import Hero from './components/Hero';
import CourseHighlights from './components/CourseHighlights';
import ProgramDetails from './components/ProgramDetails';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CourseHighlights />
      <ProgramDetails />
      <Testimonials />
      <Newsletter />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;