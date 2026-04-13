import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

  const getLink = () => {
    if (service.id === 'resume-analysis') return '/resume-analysis';
    return '/contact';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden"
    >
      {service.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
            width="400"
            height="300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://picsum.photos/seed/${service.id}/800/600`;
            }}
          />
        </div>
      )}
      <div className="p-8">
        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
          <IconComponent className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
        </div>
        <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {service.features && service.features.length > 0 && (
          <div className="space-y-2 mb-8 border-t border-gray-50 pt-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm font-medium text-secondary">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        <Link 
          to={getLink()}
          className="text-primary font-semibold flex items-center space-x-2 group-hover:text-secondary transition-colors"
        >
          <span>{service.id === 'resume-analysis' ? 'Analyze Now' : 'Learn More'}</span>
          <Icons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
