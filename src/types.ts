export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'digital' | 'career' | 'government' | 'financial' | 'business' | 'freelancing';
  image?: string;
  features?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
