
import React, { useState, useEffect } from 'react';
import FeedCard from '../components/FeedCard';
import ArticleContent from '../components/ArticleContent';
import { Article, articles } from '../utils/data';

const Index: React.FC = () => {
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [isArticleOpen, setIsArticleOpen] = useState(false);

  const handleOpenArticle = (article: Article) => {
    setCurrentArticle(article);
    setIsArticleOpen(true);
  };

  const handleCloseArticle = () => {
    setIsArticleOpen(false);
  };

  // Add empty handleScroll function to fix the reference error
  const handleScroll = () => {
    // This function was referenced but not defined
    // It's now defined but doesn't do anything specific
    // We can implement scroll behavior here if needed later
  };

  useEffect(() => {
    // Adding the event listener to prevent any potential errors
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full">
      <div className="snap-container">
        {articles.map((article) => (
          <FeedCard
            key={article.id}
            article={article}
            onOpenArticle={handleOpenArticle}
          />
        ))}
      </div>

      <ArticleContent
        article={currentArticle}
        isOpen={isArticleOpen}
        onClose={handleCloseArticle}
      />
    </div>
  );
};

export default Index;
