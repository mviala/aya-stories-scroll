
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

  const articleOverlayRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = React.useCallback(
    (e: Event) => {
      const target = e.target as HTMLDivElement;
      if (target.scrollTop === 0) {
        // Check for scroll direction
        if ((e as any).wheelDeltaY > 0 || (e as WheelEvent).deltaY > 0) {
          if (article) { // Only close if article is not null
            onClose();
          }
        }
      }
    },
    [onClose]
  );

  React.useEffect(() => {
    const overlay = articleOverlayRef.current;
    if (overlay) {
      overlay.addEventListener('wheel', handleScroll, { passive: false });
    }
    return () => {
      if (overlay) {
        overlay.removeEventListener('wheel', handleScroll); // Use 'wheel' here
      }
    };
  }, [handleScroll, article, isOpen, onClose]); // Include handleScroll in the dependency array

  if (!article) return null;

  return article && (
    <div className={`article-overlay ${isOpen ? 'open' : ''}`} ref={articleOverlayRef}>
      {/* Rest of your component's JSX here */}
    </div>
  );
};

export default ArticleContent;
