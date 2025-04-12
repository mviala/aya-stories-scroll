
import React, { useState } from 'react';
import { Article } from '../utils/data';
import { Bookmark, Heart, Share2 } from 'lucide-react';

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
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share && article) {
      navigator.share({
        title: article.title,
        text: article.intro,
        url: window.location.href
      }).catch(error => console.log('Error sharing', error));
    } else {
      console.log('Web Share API not supported');
    }
  };

  if (!article) return null;

  return (
    <div className={`article-overlay ${isOpen ? 'open' : ''}`}>
      <div className="relative w-full h-64 cursor-pointer image-container" onClick={onClose}>
        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 z-10">
          
        </div>
      </div>
      
      <div className="article-action-buttons">
        <button className="action-btn" onClick={handleBookmark}>
          <Bookmark fill={bookmarked ? "white" : "none"} color="white" size={24} />
        </button>

        <button className="action-btn" onClick={handleLike}>
          <Heart fill={liked ? "rgba(255, 255, 255, 0.7)" : "none"} color="white" size={24} />
        </button>

        <button className="action-btn" onClick={handleShare}>
          <Share2 color="white" size={24} />
        </button>
      </div>
      
      <div className="p-5 pb-24">
        <span className="text-sm font-semibold text-primary bg-secondary/20 px-2 py-1 rounded mb-2 inline-block">{article.category}</span>
        <h1 className="text-3xl font-bold mb-3 text-primary">{article.title}</h1>
        <p className="text-base mb-6 font-semibold">By {article.author}</p>
        
        <div className="article-body" dangerouslySetInnerHTML={{
        __html: article.content
      }} style={{
        lineHeight: '1.8',
        fontSize: '1.1rem'
      }} />
      </div>
    </div>
  );
};

export default ArticleContent;
