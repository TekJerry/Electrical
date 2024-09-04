import React from 'react';
import { Phone } from 'lucide-react';

const Home = ({ businessName, services, phone }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{businessName}</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://i.imgur.com/480Ps41.jpg")',
            filter: 'brightness(0.6) saturate(0.7)',
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-500 opacity-50 z-10"></div>
        <div className="container mx-auto text-center relative z-20">
          <h2 className="text-5xl font-bold mb-6">Professional {businessName} Services</h2>
          <p className="text-2xl mb-10 max-w-2xl mx-auto">Quality work, fair prices, and exceptional customer service</p>
          <a href="#contact" className="bg-white text-blue-500 py-3 px-8 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300">Get a Free Quote</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img 
                  src={service.imageUrl || "/api/placeholder/400/300"} 
                  alt={service.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            We are a team of experienced professionals dedicated to providing top-quality {businessName.toLowerCase()} services to our community. With years of experience and a commitment to customer satisfaction, we're here to meet all your needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="flex justify-center items-center">
            <Phone size={24} className="mr-2" />
            <a href={`tel:${phone}`} className="text-2xl font-semibold">{phone}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 {businessName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;