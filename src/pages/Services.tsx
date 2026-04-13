import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { Search } from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'digital' | 'career' | 'government' | 'financial' | 'business' | 'freelancing'>('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'career', name: 'Career & Jobs' },
    { id: 'digital', name: 'Digital Marketing' },
    { id: 'government', name: 'Government Services' },
    { id: 'financial', name: 'Financial' },
    { id: 'business', name: 'Business Solutions' },
    { id: 'freelancing', name: 'Freelancing' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our wide range of professional services designed to help you grow and succeed.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-16 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-white shadow-lg shadow-red-200' 
                    : 'bg-gray-100 text-secondary hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-secondary">No services found in this category</h3>
              <p className="text-gray-500">Please try another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {/* 1. Career & Job Services */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-2 bg-red-50 text-primary rounded-full font-bold text-sm mb-6">CORE FOCUS</div>
                <h3 className="text-4xl font-extrabold text-secondary mb-8">💼 Career & Job Services</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-4">Resume & Profile Optimization</h4>
                    <ul className="grid sm:grid-cols-2 gap-4 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>ATS Keyword Optimization</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>Professional Formatting</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>LinkedIn Headline & Bio</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>Recruiter Visibility</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-4">Job Search & Preparation</h4>
                    <ul className="grid sm:grid-cols-2 gap-4 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>Direct Employee Referrals</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>Mock Interview Sessions</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>Technical Question Prep</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>GitHub/Portfolio Review</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800&v=2" alt="Career Services" className="rounded-[3rem] shadow-2xl" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>

            {/* 2. Digital Marketing */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&v=2" alt="Digital Marketing" className="rounded-[3rem] shadow-2xl" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div>
                <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm mb-6">HIGH DEMAND</div>
                <h3 className="text-4xl font-extrabold text-secondary mb-8">📢 Digital Marketing Services</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-secondary">Marketing & Ads</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Meta Ads Management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Google Search & Display</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>ROI Optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-secondary">Web & SEO</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Local SEO & Maps Ranking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>React/Vite Development</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>High-Conversion Landing Pages</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Government Services */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm mb-6">GOVERNMENT ASSISTANCE</div>
                <h3 className="text-4xl font-extrabold text-secondary mb-8">🏛️ Government Services</h3>
                <div className="space-y-10">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-secondary">PAN Card Services</h4>
                      <p className="text-gray-600 text-sm">Hassle-free application and correction services for PAN cards.</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-2"></div> New Application & Correction</li>
                        <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-2"></div> Instant e-PAN & Physical Delivery</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-secondary">Passport Services</h4>
                      <p className="text-gray-600 text-sm">New passport applications, renewals, and data correction services.</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-2"></div> Fresh Passport & Renewals</li>
                        <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-2"></div> Tatkaal & Data Correction</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-secondary">Driving License</h4>
                      <p className="text-gray-600 text-sm">Assistance for Learner License, Permanent License, and renewals.</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-2"></div> Slot Booking & Documentation</li>
                        <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-2"></div> Renewal & Category Addition</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-secondary">EPFO Support</h4>
                      <p className="text-gray-600 text-sm">EPF activation, name correction, claim support, and UAN services.</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-2"></div> UAN Activation & Claims</li>
                        <li className="flex items-center"><div className="w-1 h-1 bg-primary rounded-full mr-2"></div> Name/DOB/KYC Correction</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img src="https://images.unsplash.com/photo-1568145675395-66a2eda0c6d7?q=80&w=801&v=4" alt="Government Services" className="rounded-[3rem] shadow-2xl" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>

            {/* 4. Financial Services */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&v=2" alt="Financial Services" className="rounded-[3rem] shadow-2xl" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-secondary mb-8">💰 Financial & Banking Solutions</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-green-50 rounded-3xl border border-green-100">
                    <h4 className="text-xl font-bold text-green-800 mb-4">Banking & Credit</h4>
                    <ul className="grid sm:grid-cols-2 gap-3 text-green-700">
                      <li>• Credit Card Selection</li>
                      <li>• CC to Bank Transfer</li>
                      <li>• Credit Score Analysis</li>
                      <li>• Zero Balance Accounts</li>
                      <li>• Low Interest Loans</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100">
                    <h4 className="text-xl font-bold text-orange-800 mb-4">Insurance & Investment</h4>
                    <ul className="grid sm:grid-cols-2 gap-3 text-orange-700">
                      <li>• Health & Life Plans</li>
                      <li>• Family Protection</li>
                      <li>• Mutual Funds Basics</li>
                      <li>• Savings Planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Business Solutions */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-4xl font-extrabold text-secondary mb-8">🧾 Business & Software Solutions</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-2">Billing & CRM</h4>
                      <p className="text-gray-600">Restaurant billing with Swiggy/Zomato integration and 24/7 support.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-2">Automation & E-commerce</h4>
                      <p className="text-gray-600">WhatsApp automation and professional Shopify/WooCommerce setup.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=800&v=2" alt="Business Solutions" className="rounded-[3rem] shadow-2xl" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>

            {/* 6. Freelancing & Online Income */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&v=2" alt="Freelancing" className="rounded-[3rem] shadow-2xl" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div>
                <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full font-bold text-sm mb-6">NEW CATEGORY</div>
                <h3 className="text-4xl font-extrabold text-secondary mb-8">💻 Freelancing & Online Income</h3>
                <div className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-secondary">Platform Setup</h4>
                      <p className="text-gray-600 text-sm">Professional setup for Upwork and Fiverr profiles to start earning.</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li className="flex items-center"><div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div> Profile & Gig Optimization</li>
                        <li className="flex items-center"><div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div> Bidding & Portfolio Strategy</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-secondary">Online Earning</h4>
                      <p className="text-gray-600 text-sm">Expert advice on various ways to earn money online legitimately.</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li className="flex items-center"><div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div> Passive Income Methods</li>
                        <li className="flex items-center"><div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div> Skill Monetization Tips</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-secondary">Affiliate Marketing</h4>
                      <p className="text-gray-600 text-sm">Start your affiliate journey with the right tools and strategy.</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li className="flex items-center"><div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div> Niche & Tool Selection</li>
                        <li className="flex items-center"><div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div> Traffic & Conversion Strategy</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-secondary">Dropshipping</h4>
                      <p className="text-gray-600 text-sm">Learn the fundamentals of starting a successful dropshipping business.</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li className="flex items-center"><div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div> Supplier & Product Research</li>
                        <li className="flex items-center"><div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div> Store Setup & Fulfillment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
