import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  MapPin, 
  Target, 
  Award, 
  Users, 
  Building, 
  Phone, 
  Mail,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Camera,
  Compass,
  Navigation,
  Layers,
  TreePine,
  Calculator,
  Train,
  Droplets,
  Building2,
  X
} from 'lucide-react';
import { portfolioCategories } from '../data/portfolioData';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceType: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form will be handled by Formspree
    setFormSubmitted(true);
    setTimeout(() => {
      setShowContactForm(false);
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        serviceType: ''
      });
    }, 2000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { 
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const services = [
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Drone Surveys",
      description: "Advanced aerial surveying with high-precision drones for topographic mapping, site inspection, and comprehensive land analysis.",
      image: "https://images.pexels.com/photos/32211979/pexels-photo-32211979.jpeg"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "DGPS Surveys",
      description: "Differential Global Positioning System technology providing centimeter-level accuracy for precise positioning and boundary mapping.",
      image: "https://images.unsplash.com/photo-1682663810771-89d21838530f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxsYW5kJTIwc3VydmV5aW5nfGVufDB8fHx8MTc0ODYwNzM3Nnww&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: "Comprehensive Surveys",
      description: "Complete range of surveying services including topographic, boundary, construction, and environmental surveys for all project needs.",
      image: "https://images.pexels.com/photos/5802827/pexels-photo-5802827.jpeg"
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Ortho Image Processing",
      description: "Advanced drone image processing delivering precise, high-resolution data for construction, urban planning, and land surveying. Our cutting-edge technology transforms aerial imagery into actionable insights for enhanced project efficiency and decision making.",
      image: "https://images.pexels.com/photos/7937294/pexels-photo-7937294.jpeg"
    }
  ];

  const clientTypes = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Private Property Owners",
      description: "Boundary surveys, topographic mapping, and property assessments for individual landowners and developers."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Government Agencies",
      description: "Municipal mapping, infrastructure planning, and compliance surveys for local and federal government projects."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Engineering Firms",
      description: "Technical surveying support, construction layout, and precision measurements for engineering projects."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img 
                src="/AMP%20Logo_001.png"
                alt="AMP Geosolutions"
                className="h-16 w-auto bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-all duration-300"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-slate-600 hover:text-red-600 transition-colors">Home</a>
              <a href="#services" className="text-slate-600 hover:text-red-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-slate-600 hover:text-red-600 transition-colors">Portfolio</a>
              <a href="#products" className="text-slate-600 hover:text-red-600 transition-colors">Products</a>
              <a href="#contact" className="text-slate-600 hover:text-red-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/32211979/pexels-photo-32211979.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-slate-800/70 to-red-800/60"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Precision Surveying
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">
              Advanced Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional GIS survey services using cutting-edge drone technology and DGPS systems. 
            Delivering reliable expertise for property owners, government agencies, and engineering firms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all"
            >
              View Portfolio
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Advanced Survey Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive surveying solutions powered by the latest technology and delivered by experienced professionals.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gradient-to-br from-slate-50 to-red-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="text-red-600 mb-6 group-hover:text-red-700 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Expertise
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Decades of combined experience, cutting-edge technology, and unwavering commitment to precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-12 h-12" />, title: "6 Years Experience", desc: "Proven track record in complex surveying projects" },
              { icon: <Star className="w-12 h-12" />, title: "99.9% Accuracy", desc: "Industry-leading precision with advanced equipment" },
              { icon: <CheckCircle className="w-12 h-12" />, title: "Licensed Professionals", desc: "Certified surveyors and licensed operators" },
              { icon: <Globe className="w-12 h-12" />, title: "Statewide Coverage", desc: "Comprehensive service area across the region" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-red-400 mb-4 flex justify-center group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-red-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing our comprehensive portfolio of surveying and GIS projects across government, infrastructure, and development sectors.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {portfolioCategories.map((category, categoryIndex) => {
              const getIcon = (iconType) => {
                switch(iconType) {
                  case 'layout': return <Layers className="w-8 h-8" />;
                  case 'city': return <Building2 className="w-8 h-8" />;
                  case 'property': return <Calculator className="w-8 h-8" />;
                  case 'railway': return <Train className="w-8 h-8" />;
                  case 'water': return <Droplets className="w-8 h-8" />;
                  case 'government': return <Building className="w-8 h-8" />;
                  default: return <Star className="w-8 h-8" />;
                }
              };

              return (
                <motion.div
                  key={categoryIndex}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        {getIcon(category.icon)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <p className="text-red-100 text-lg">{category.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-red-50 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Projects List */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.projects.map((project, projectIndex) => (
                        <motion.div
                          key={projectIndex}
                          variants={fadeInUp}
                          className="bg-slate-50 rounded-lg p-4 hover:bg-red-50 transition-colors duration-200 border border-slate-200 hover:border-red-200"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-white text-xs font-bold">{projectIndex + 1}</span>
                            </div>
                            <p className="text-slate-700 font-medium leading-relaxed">{project}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Portfolio Summary */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Project Excellence</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-red-200">40,000+</div>
                <div className="text-red-100">Properties Surveyed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-200">15+</div>
                <div className="text-red-100">Railway Divisions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-200">8+</div>
                <div className="text-red-100">States Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-200">6</div>
                <div className="text-red-100">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Serving Diverse Clients
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored surveying solutions for every client type, from individual property owners to large-scale government projects.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {clientTypes.map((client, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-red-600 mb-4 flex justify-center">
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{client.title}</h3>
                <p className="text-slate-600">{client.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Products
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive software solutions for modern governance and management systems.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "E-Municipal",
                description: "Comprehensive municipal management system for digital governance and citizen services.",
                icon: <Building2 className="w-12 h-12" />
              },
              {
                title: "Land Allotment",
                description: "Advanced land allotment management system for efficient property allocation and tracking.",
                icon: <MapPin className="w-12 h-12" />
              },
              {
                title: "Industrial Area Management System",
                description: "Comprehensive management platform for industrial areas and manufacturing zones.",
                icon: <Target className="w-12 h-12" />
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-red-600 mb-6 group-hover:text-red-700 transition-colors">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{product.title}</h3>
                <p className="text-slate-600">{product.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information & Map */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+919587839666" className="text-red-200 hover:text-white transition-colors">
                      +91-9587839666
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:Contact@ampgeosolution.com" className="text-red-200 hover:text-white transition-colors">
                      Contact@ampgeosolution.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Office Location</p>
                    <p className="text-red-200">
                      Shree Shyam Tower, Kedia Palace Rd,<br />
                      Dadi Ka Phatak, Murlipura Scheme,<br />
                      Murlipura, Jaipur, Rajasthan 302039
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Office Map */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-2 shadow-2xl"
            >
              <div className="w-full h-80 bg-gradient-to-br from-slate-100 to-red-50 rounded-xl flex flex-col items-center justify-center p-6">
                <MapPin className="w-16 h-16 text-red-600 mb-4" />
                <h4 className="text-xl font-bold text-slate-800 mb-2">AMP Geosolutions Office</h4>
                <p className="text-center text-slate-600 mb-4 leading-relaxed">
                  <strong>Shree Shyam Tower</strong><br />
                  Kedia Palace Rd, Dadi Ka Phatak<br />
                  Murlipura Scheme, Murlipura<br />
                  Jaipur, Rajasthan 302039
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://maps.app.goo.gl/VBAZ7DDuqP6LBSodA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium flex items-center space-x-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                  </a>
                  <div className="bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">
                    Plus Code: XQC4+3W Jaipur
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
              Contact our experts for professional surveying solutions. We're ready to help you achieve precise results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <motion.a
                href="tel:+919587839666"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>+91-9587839666</span>
              </motion.a>
              <motion.a
                href="mailto:Contact@ampgeosolution.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                <span>Contact@ampgeosolution.com</span>
              </motion.a>
            </div>

            <motion.button
              onClick={() => setShowContactForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all shadow-xl"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Form Header */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-slate-800 mb-2">Get In Touch</h3>
              <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h4>
                <p className="text-slate-600">Your message has been sent successfully. We'll contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} action="https://formspree.io/f/f/xeokqopv" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="drone-survey">Drone Survey</option>
                    <option value="dgps-survey">DGPS Survey</option>
                    <option value="comprehensive-survey">Comprehensive Survey</option>
                    <option value="ortho-processing">Ortho Image Processing</option>
                    <option value="software-solutions">Software Solutions</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Please describe your project requirements, location, timeline, and any specific needs..."
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/AMP%20Logo_001.png"
                  alt="AMP Geosolutions"
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-slate-400">
                Professional surveying services with cutting-edge technology and reliable expertise.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Drone Surveys</li>
                <li>DGPS Surveys</li>
                <li>Topographic Mapping</li>
                <li>Boundary Surveys</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Coverage Areas</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Residential Properties</li>
                <li>Commercial Developments</li>
                <li>Infrastructure Projects</li>
                <li>Government Contracts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Phone: +91-9587839666</li>
                <li>Email: Contact@ampgeosolution.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AMP Geosolutions. All rights reserved. Licensed Professional Surveyors.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;