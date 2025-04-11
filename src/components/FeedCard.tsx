
import React, { useState } from 'react';
import { Article } from '../utils/data';
import { Bookmark, Heart, Share2 } from 'lucide-react';
import LikeAnimation from './LikeAnimation';

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

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!liked) {
      setLiked(true);
      setShowLikeAnimation(true);
      setTimeout(() => {
        setShowLikeAnimation(false);
      }, 1000);
    } else {
      setLiked(false);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.intro,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Web Share API not supported');
    }
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
      
      <div className="action-buttons">
        <button 
          className="action-btn"
          onClick={handleBookmark}
        >
          <Bookmark 
            fill={bookmarked ? "white" : "none"} 
            color="white" 
            size={24} 
          />
        </button>

        <button 
          className="action-btn"
          onClick={handleLike}
        >
          <Heart 
            fill={liked ? "white" : "none"} 
            color="white" 
            size={24} 
          />
        </button>

        <button 
          className="action-btn"
          onClick={handleShare}
        >
          <Share2 color="white" size={24} />
        </button>
      </div>

      <LikeAnimation show={showLikeAnimation} />
    </div>
  );
};

export default FeedCard;
