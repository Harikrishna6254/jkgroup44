import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsSending(true);
    try {
      // Note: You need to set up these environment variables in your settings
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_h2yclnr';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          service_interest: data.service,
          message: data.message,
          to_name: 'JK Solutions Team',
        },
        publicKey
      );

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again or contact us directly via email.');
    } finally {
      setIsSending(false);
    }
  };

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
            Contact Us
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Our team is ready to help.</p>
                <a href="mailto:consult@jksolutionsgroup.org" className="text-primary font-bold hover:underline">
                  consult@jksolutionsgroup.org
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Mon-Fri from 9am to 6pm.</p>
                <a href="tel:+919346271654" className="text-secondary font-bold hover:underline">
                  +91 93462 71654
                </a>
              </div>

              <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Instant support on WhatsApp.</p>
                <a href="https://wa.me/919346271654" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">
                  Chat Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
                <h3 className="text-3xl font-extrabold text-secondary mb-8">Send us a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-secondary mb-2">Full Name</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-100 outline-none transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-secondary mb-2">Email Address</label>
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                        })}
                        type="email"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-100 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">Service Interested In</label>
                    <select
                      {...register('service')}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-100 outline-none transition-all bg-white"
                    >
                      <option value="digital">Digital Marketing</option>
                      <option value="career">Career & Job Services</option>
                      <option value="government">Government Services</option>
                      <option value="financial">Financial Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">Your Message</label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-100 outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message as string}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSending || isSuccess}
                    className={`w-full py-5 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center space-x-2 ${
                      isSuccess 
                        ? 'bg-green-500 text-white cursor-default' 
                        : 'bg-primary text-white hover:bg-primary-dark hover:shadow-red-200 disabled:opacity-70'
                    }`}
                  >
                    {isSending ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle2 size={20} />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 h-[400px] rounded-[3rem] flex items-center justify-center text-gray-500 overflow-hidden relative">
            <img 
              src="https://picsum.photos/seed/map/1200/400" 
              alt="Location Map" 
              className="w-full h-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">JK Solutions HQ</h4>
                  <p className="text-sm text-gray-600">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
