
import React from 'react';
import { Article } from '../utils/data';

interface ArticleContentProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ 
  article, 
  isOpen, 
  onClose 
}) => {
  if (!article) return null;

  return (
    <div className={`article-overlay ${isOpen ? 'open' : ''}`}>
      <div 
        className="relative w-full h-64 cursor-pointer"
        onClick={onClose}
      >
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 z-10">
          <button 
            className="text-white text-2xl p-2"
            onClick={onClose}
          >
            ↩️
          </button>
        </div>
      </div>
      
      <div className="p-5 pb-24">
        <h1 className="text-3xl font-bold mb-3 text-primary">{article.title}</h1>
        <p className="text-base mb-6 font-semibold">By {article.author}</p>
        
        <div 
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            lineHeight: '1.8',
            fontSize: '1.1rem',
          }}
        />
      </div>
    </div>
  );
};

export default ArticleContent;
