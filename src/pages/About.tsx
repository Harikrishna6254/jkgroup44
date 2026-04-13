import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
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
            About JK Solutions
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering individuals and businesses with reliable digital, career, and government services since our inception.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold tracking-wider uppercase mb-3 text-sm">Our Story</h2>
              <h3 className="text-4xl font-extrabold text-secondary mb-6">A Legacy of Trust and Excellence</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                JK Solutions was founded with a simple yet powerful goal: to bridge the gap between people and the essential digital and professional services they need to succeed.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We understand that navigating government procedures, building a career, or managing digital marketing can be overwhelming. That's why we've assembled a team of experts dedicated to providing seamless, secure, and efficient solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary" />
                  <span className="font-bold text-secondary">100% Secure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary" />
                  <span className="font-bold text-secondary">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary" />
                  <span className="font-bold text-secondary">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary" />
                  <span className="font-bold text-secondary">24/7 Support</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=801"
                alt="Our Team"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold mb-1">5+ Years</div>
                <div className="text-red-100">Industry Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-extrabold text-secondary mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide safe, secure, and trusted digital and career services that empower our clients to achieve their full potential in an increasingly complex world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-secondary" size={32} />
              </div>
              <h3 className="text-3xl font-extrabold text-secondary mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most preferred and trusted service partner for digital growth and career success, recognized for our integrity, innovation, and client-centric approach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Our Core Values</h2>
          <h3 className="text-4xl font-extrabold text-secondary mb-16">What We Stand For</h3>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity', desc: 'We believe in absolute transparency and honesty in all our dealings.', icon: ShieldCheck },
              { title: 'Excellence', desc: 'We strive for perfection in every service we deliver to our clients.', icon: Award },
              { title: 'Innovation', desc: 'We continuously evolve our methods to provide modern solutions.', icon: Zap },
            ].map((value, idx) => (
              <div key={idx} className="group">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <value.icon className="text-primary group-hover:text-white transition-colors duration-300" size={36} />
                </div>
                <h4 className="text-2xl font-bold text-secondary mb-4">{value.title}</h4>
                <p className="text-gray-600 text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
