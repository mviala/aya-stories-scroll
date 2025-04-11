
export interface Article {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  intro: string;
  content: string;
  category: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Finding Balance: The Modern Woman's Guide to Wellness",
    author: "Elena Rodriguez",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    intro: "Discover how to balance career, relationships, and self-care in today's fast-paced world.",
    category: "Wellness",
    content: `
      <p>In a world that never seems to slow down, finding balance has become more crucial than ever. Modern women are juggling career ambitions, relationships, family responsibilities, and personal wellness—often at the expense of their own needs.</p>
      
      <p>The key to sustainable balance isn't about perfect time management or productivity hacks—it's about intentionality and presence. When we're fully engaged in whatever we're doing, whether it's focused work, quality time with loved ones, or self-care, we experience a deeper sense of fulfillment.</p>
      
      <h3>Start with micro-moments</h3>
      <p>Balance doesn't require dramatic lifestyle changes. Begin with small, intentional pauses throughout your day: a five-minute meditation, a mindful cup of tea, or a brief walk outside. These micro-moments accumulate to create a more centered life.</p>
      
      <h3>Set boundaries with technology</h3>
      <p>Our devices keep us constantly connected, making it difficult to truly disconnect. Establish technology-free zones or hours in your home, use app blockers during focused work or family time, and resist the urge to check emails first thing in the morning.</p>
      
      <h3>Practice the art of saying no</h3>
      <p>Every "yes" to others is potentially a "no" to yourself. Before committing to new responsibilities or social engagements, ask yourself if they align with your priorities and if you truly have the energy for them.</p>
      
      <p>Remember that balance isn't a destination—it's a continuous practice of realignment as life's circumstances change. The goal isn't perfection but presence and intentionality in how you navigate each day.</p>
    `
  },
  {
    id: "2",
    title: "Financial Freedom: Investment Strategies for Women",
    author: "Morgan Chen",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    intro: "Take control of your financial future with these investment approaches tailored for women.",
    category: "Finance",
    content: `
      <p>Financial independence isn't just about wealth accumulation—it's about creating options, security, and freedom in your life. For women, who often face unique financial challenges including career gaps and longer lifespans, developing a strong investment strategy is particularly crucial.</p>
      
      <h3>Start where you are</h3>
      <p>Many women delay investing because they think they don't have enough money to begin or enough knowledge to make smart choices. The truth is that starting small is infinitely better than not starting at all. Even $50 a month invested consistently can grow significantly over time thanks to compound interest.</p>
      
      <h3>Understand your risk tolerance</h3>
      <p>Studies show women often make excellent investors because they tend to take a more measured approach to risk. Understanding your personal risk tolerance—how comfortable you are with market fluctuations—is essential for creating a sustainable investment strategy you can stick with through market ups and downs.</p>
      
      <h3>Diversification is your friend</h3>
      <p>Spreading your investments across different asset classes (stocks, bonds, real estate) and sectors helps protect your portfolio from volatility. Consider low-cost index funds or ETFs as a simple way to achieve instant diversification.</p>
      
      <h3>Seek community</h3>
      <p>Finding an investment club or online community of women investors can provide both education and encouragement. Sharing knowledge and experiences helps demystify investing and builds confidence in your decision-making.</p>
      
      <p>Remember that financial freedom isn't just about retirement—it's about having choices throughout your life. Whether it's changing careers, starting a business, taking time off for family, or supporting causes you care about, financial independence gives you the power to design your life on your own terms.</p>
    `
  },
  {
    id: "3",
    title: "The Art of Self-Discovery Through Solo Travel",
    author: "Amara Jackson",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    intro: "Why traveling alone might be the key to finding yourself and embracing your independence.",
    category: "Travel",
    content: `
      <p>There's something transformative about navigating unfamiliar streets, ordering meals in a language you barely speak, and making spontaneous decisions with no one to consult but yourself. Solo travel strips away the comfort of routine and familiar relationships, leaving you with the most authentic version of yourself.</p>
      
      <h3>Beyond the comfort zone</h3>
      <p>When you travel alone, everyday activities become small adventures. Figuring out public transportation, finding a local cafe, or striking up a conversation with a stranger—these moments of navigating uncertainty build confidence that extends far beyond your journey.</p>
      
      <h3>The freedom of solitude</h3>
      <p>Without the need to compromise or consider others' preferences, solo travel offers unparalleled freedom. Want to spend an entire day in one museum? Change plans last minute? Wake up at dawn for a sunrise hike? The only person you need to consult is yourself.</p>
      
      <h3>Meeting yourself anew</h3>
      <p>Removed from the roles and identities that define you at home—professional, daughter, partner, friend—solo travel creates space to rediscover parts of yourself that may have been overshadowed. You might uncover interests, strengths, or perspectives you didn't know you had.</p>
      
      <h3>Safety first</h3>
      <p>Smart preparation enhances both safety and enjoyment. Research destinations, stay connected with loved ones, secure good accommodations, and trust your intuition. Women-only tours or accommodations can also provide community while maintaining independence.</p>
      
      <p>Solo travel isn't about escaping your life—it's about returning to it with greater clarity about who you are and what you want. The woman who returns from a solo journey is invariably more confident, more self-reliant, and more in tune with her authentic desires than the one who left.</p>
    `
  },
  {
    id: "4",
    title: "Sustainable Fashion: Building an Eco-Friendly Wardrobe",
    author: "Maya Thompson",
    imageUrl: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
    intro: "How to curate a stylish wardrobe while minimizing your environmental impact.",
    category: "Fashion",
    content: `
      <p>Fashion has always been about self-expression and creativity, but today's conscious consumers are looking beyond aesthetics to consider the environmental and ethical implications of their style choices. Building a sustainable wardrobe doesn't mean sacrificing style—it's about making mindful decisions that align with your values.</p>
      
      <h3>Quality over quantity</h3>
      <p>The foundation of sustainable fashion is investing in fewer, better-quality pieces that will last. Look for well-constructed garments made from durable materials that can withstand years of wear. While the initial cost may be higher, the cost-per-wear of quality pieces is often lower than fast fashion alternatives.</p>
      
      <h3>Research ethical brands</h3>
      <p>Seek out brands that prioritize transparency in their supply chains, fair labor practices, and environmentally friendly production methods. Many sustainable brands are sharing their journey and processes, making it easier for consumers to make informed choices.</p>
      
      <h3>Embrace secondhand</h3>
      <p>Thrift stores, vintage shops, and online resale platforms offer unique pieces with minimal environmental impact. Shopping secondhand extends the lifecycle of garments and keeps them out of landfills while often saving you money.</p>
      
      <h3>Care consciously</h3>
      <p>How you care for your clothes significantly impacts their longevity and environmental footprint. Wash clothes less frequently, at lower temperatures, and line-dry when possible. Learn basic mending skills to extend the life of beloved pieces.</p>
      
      <p>Remember that building a sustainable wardrobe is a journey, not an overnight transformation. Each mindful choice contributes to a more ethical fashion ecosystem. By valuing quality, versatility, and longevity in your clothing, you create a wardrobe that serves both your personal style and the planet.</p>
    `
  },
  {
    id: "5",
    title: "Navigating Modern Relationships in a Digital World",
    author: "Dr. Sophia Rivera",
    imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624",
    intro: "Understanding how technology is reshaping love, dating, and connection in today's world.",
    category: "Relationships",
    content: `
      <p>From dating apps to social media profiles, from text messages to video calls, technology has fundamentally altered how we meet, connect with, and maintain relationships with others. This digital revolution brings both unprecedented opportunities and unique challenges to modern love.</p>
      
      <h3>The double-edged sword of choice</h3>
      <p>Dating apps have expanded our potential dating pool exponentially, giving us access to people we might never have encountered otherwise. However, this abundance of choice can create a paradox where having too many options leads to decision paralysis or a constant feeling that someone better might be just one more swipe away.</p>
      
      <h3>Digital communication literacy</h3>
      <p>Text-based communication lacks the nonverbal cues that make up a significant portion of how we communicate in person. Learning to navigate this limitation—understanding tone, timing, and context in digital messages—has become an essential relationship skill. Being explicit about feelings and intentions can help bridge the gap that technology creates.</p>
      
      <h3>Setting digital boundaries</h3>
      <p>Healthy modern relationships require thoughtful boundaries around technology use. This might mean phone-free dinners, agreements about social media sharing, or designated times to disconnect and focus fully on each other. These boundaries should reflect both partners' needs and comfort levels.</p>
      
      <h3>Long-distance connection</h3>
      <p>Technology has transformed how we maintain relationships across distances. Video calls, shared online experiences, and digital intimacy tools allow couples to feel connected even when physically separated. Finding creative ways to share experiences remotely can strengthen bonds despite distance.</p>
      
      <p>The core elements of successful relationships remain timeless: trust, communication, respect, and mutual support. Technology simply offers new contexts where these fundamentals must be applied. By approaching digital tools mindfully and remembering that they serve connection rather than replace it, we can build meaningful relationships that thrive both online and off.</p>
    `
  }
];
