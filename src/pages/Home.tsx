import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';
import ServiceCard from '../components/ServiceCard';

const HERO_SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200",
    caption: "Professional Resume & LinkedIn Optimization"
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    caption: "Grow Your Business with Digital Marketing"
  },
  {
    url: "https://images.unsplash.com/photo-1544333346-64e4fe1feda5?q=80&w=1200",
    caption: "Hassle-Free Government Documentation Services"
  },
  {
    url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200",
    caption: "Smart Financial & Banking Solutions"
  },
  {
    url: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200",
    caption: "Restaurant & Hotel Billing Software Solutions"
  },
  {
    url: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1200",
    caption: "24/7 Technical Support Available",
    isContact: true,
    email: "consal@jksolutionsgroup.com",
    phone: "+91 93462 71654"
  }
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-red-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-bold tracking-wide mb-6 border border-green-100">
                <ShieldCheck size={16} />
                <span>Safe and Secure Service is Our Top Priority</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-secondary leading-tight mb-6">
                All-in-One <span className="text-primary">Multi-Service Solutions</span> for Your Business
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
                We offer a wide range of services designed to support and grow your business. From digital solutions to operational support, we focus on delivering quality, efficiency, and reliable results—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-red-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-secondary border-2 border-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:border-primary transition-all flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[450px] lg:h-[550px]"
            >
              <div className="relative z-10 h-full w-full rounded-3xl overflow-hidden shadow-2xl bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={HERO_SLIDES[currentImageIndex].url}
                      alt={HERO_SLIDES[currentImageIndex].caption}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://picsum.photos/seed/fallback-${currentImageIndex}/1200/600`;
                      }}
                    />
                    {HERO_SLIDES[currentImageIndex].isContact ? (
                      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-8 backdrop-blur-[2px]">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-8 max-w-md"
                        >
                          <div className="space-y-2">
                            <h4 className="text-5xl font-black text-white tracking-tight">Get in Touch</h4>
                            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                          </div>
                          
                          <div className="space-y-6">
                            <div className="group">
                              <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-2 font-bold">Email Us</p>
                              <a 
                                href={`mailto:${HERO_SLIDES[currentImageIndex].email}`} 
                                className="text-2xl sm:text-3xl font-bold text-white hover:text-primary transition-all duration-300 block break-all"
                              >
                                {HERO_SLIDES[currentImageIndex].email}
                              </a>
                            </div>
                            
                            <div className="group">
                              <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-2 font-bold">Call Us</p>
                              <a 
                                href={`tel:${HERO_SLIDES[currentImageIndex].phone.replace(/\s/g, '')}`} 
                                className="text-3xl sm:text-4xl font-black text-primary hover:scale-105 transition-transform duration-300 block"
                              >
                                {HERO_SLIDES[currentImageIndex].phone}
                              </a>
                            </div>
                          </div>
                          
                          <div className="pt-8">
                            <span className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-bold uppercase tracking-widest">
                              24/7 Support Available
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-16">
                        <p className="text-white text-lg font-bold text-center">
                          {HERO_SLIDES[currentImageIndex].caption}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
              
              {/* Slider Indicators */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentImageIndex === idx ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">500+</div>
              <div className="text-gray-500 font-medium">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">98%</div>
              <div className="text-gray-500 font-medium">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">15+</div>
              <div className="text-gray-500 font-medium">Services</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">24/7</div>
              <div className="text-gray-500 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl font-extrabold text-secondary mb-4">Key Services We Offer</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your professional and personal growth requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-primary font-bold hover:text-secondary transition-colors text-lg"
            >
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=802"
                alt="Trusted Services"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Why JK Solutions?</h2>
              <h3 className="text-4xl font-extrabold text-secondary mb-8">Safe, Secure & Trusted Services</h3>
              
              <div className="space-y-6">
                {[
                  { title: 'Expert Guidance', desc: 'Professional advice from industry veterans.', icon: Users },
                  { title: 'Secure Handling', desc: 'Your data and documents are safe with us.', icon: ShieldCheck },
                  { title: 'Fast Processing', desc: 'Quick turnaround time for all services.', icon: Zap },
                  { title: 'Verified Results', desc: 'Proven track record of success.', icon: CheckCircle2 },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-red-50 p-3 rounded-xl shrink-0">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl font-extrabold mb-4">Trusted by Clients</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-black/20 p-8 rounded-3xl border border-white/10"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-primary" />
                  <div>
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg italic text-gray-200 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-4xl font-extrabold mb-6">Ready to Start Your Journey?</h3>
              <p className="text-xl text-red-50 mb-10 max-w-2xl mx-auto">
                Contact us today for a free consultation and let us help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-all shadow-lg"
                >
                  Contact Us Now
                </Link>
                <a
                  href="https://wa.me/919346271654"
                  className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all"
                >
                  Chat with Expert
                </a>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
