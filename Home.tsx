import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StoryCategories from '@/components/StoryCategories';
import FeaturedStories from '@/components/FeaturedStories';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { getFeaturedStories } from '@/data/stories';

// 故事分类
const storyCategories = [
  { id: 1, name: "动物故事", icon: "🐰", color: "bg-blue-100 text-blue-800" },
  { id: 2, name: "魔法冒险", icon: "✨", color: "bg-purple-100 text-purple-800" },
  { id: 3, name: "勇敢传说", icon: "🛡️", color: "bg-red-100 text-red-800" },
  { id: 4, name: "友谊故事", icon: "🤝", color: "bg-green-100 text-green-800" },
  { id: 5, name: "睡前童谣", icon: "🎶", color: "bg-yellow-100 text-yellow-800" },
  { id: 6, name: "奇幻梦境", icon: "🌙", color: "bg-indigo-100 text-indigo-800" },
];

// 获取精选故事
const featuredStories = getFeaturedStories(6);

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        

        
        <StoryCategories categories={storyCategories} />
        <FeaturedStories stories={featuredStories} />
      </main>
      <Footer />
    
      {/* 下载模态框已删除 */}
    </div> 
);
}