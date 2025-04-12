
import React, { useState } from 'react';
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
    setCurrentArticle(null);
  };

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
