import React from 'react';
import { Link } from 'wouter';

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  painPoint: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, image, href, painPoint }) => {
  return (
    <Link href={href}>
      <div className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={image}
            alt={`${title} solutions`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600 mb-3 text-sm">{painPoint}</p>
          <p className="text-slate-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SolutionCard;