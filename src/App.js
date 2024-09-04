import React from 'react';
import Home from './Home/Home.js';
import './App.css'

const App = () => {
  const businessName = "Smith's Electrical Services";
  const services = [
    { title: "Residential Wiring", description: "Our residential wiring services ensure that your home’s electrical systems are safe, efficient, and up to code. From new installations to repairs and upgrades, we provide reliable solutions that keep your home powered and protected.", imageUrl: "https://i.imgur.com/qycP4fr.jpg" },
    { title: "Commercial Electrical", description: "We specialize in commercial wiring for businesses of all sizes, offering tailored solutions that meet industry standards and safety requirements. Whether it’s new construction or an upgrade to existing systems, our expert technicians deliver efficient, high-quality service.", imageUrl: "https://i.imgur.com/i3wq2hl.jpg" },
    { title: "Emergency Services", description: "Our emergency services are available 24/7 to address any urgent electrical issues you may encounter. With quick response times and skilled professionals, we’re committed to restoring your power and ensuring your safety when you need it most.", imageUrl: "https://i.imgur.com/H0LBs95.jpg" },
  ];
  const phone = "(555) 123-4567";

  return (
    <Home 
      businessName={businessName}
      services={services}
      phone={phone}
    />
  );
};

export default App;