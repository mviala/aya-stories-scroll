
import React, { useState } from 'react';
import { Article } from '../utils/data';

interface FeedCardProps {
  article: Article;
  onOpenArticle: (article: Article) => void;
}

const FeedCard: React.FC<FeedCardProps> = ({ article, onOpenArticle }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showLikeAnimation, setShowLikeAnimation] = useState(false);

  const handleCardClick = () => {
    onOpenArticle(article);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  const handleDoubleTap = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!liked) {
      setLiked(true);
      setShowLikeAnimation(true);
      setTimeout(() => {
        setShowLikeAnimation(false);
      }, 1000);
    }
  };

  return (
    <div 
      className="snap-card" 
      onClick={handleCardClick}
      onDoubleClick={handleDoubleTap}
    >
      <img 
        src={article.imageUrl} 
        alt={article.title}
        className="w-full h-full object-cover"
      />
      
      <div className="card-content">
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        <p className="text-base mb-2">{article.intro}</p>
        <p className="text-sm opacity-80">By {article.author}</p>
      </div>
      
      <button 
        className="action-btn bookmark-btn"
        onClick={handleBookmark}
      >
        {bookmarked ? '📕' : '📑'}
      </button>

      {showLikeAnimation && (
        <div className="like-animation">
          <div className={`heart ${showLikeAnimation ? 'animate' : ''}`}>❤️</div>
        </div>
      )}
    </div>
  );
};

export default FeedCard;
