export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'digital' | 'career' | 'government' | 'financial' | 'business' | 'freelancing';
  image?: string;
  features?: string[];

  plans?: {
    name: string;
    desc: string;
    price: string;
  }[];
}
