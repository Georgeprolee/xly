import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AdminLogin from "@/pages/AdminLogin";
import AdminPanel from "@/pages/AdminPanel";
import MobileBottomNav from "@/components/MobileBottomNav";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import { toast } from "sonner";

// 模拟页面组件 - 实际项目中应该拆分为单独文件
import { useSearchParams } from 'react-router-dom';
import { getStoriesByCategory } from '@/data/stories';
import { motion } from 'framer-motion';

const StoryCategoryPage = () => {
  const [searchParams] = useSearchParams();
  const categoryId = Number(searchParams.get('category')) || 1;
  const categoryName = decodeURIComponent(searchParams.get('name') || '动物故事');
  const stories = getStoriesByCategory(categoryId);
  
  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">{categoryName}</h1>
          <button 
            onClick={() => window.history.back()}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition-colors"
          >
            返回
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => window.location.href = `/story/${story.id}`}
            >
               <div className="h-36 overflow-hidden rounded-xl">
                 <img 
                   src={story.imageUrl} 
                   alt={story.title}
                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                 />
               </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{story.title}</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">{story.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{story.readTime}</span>
                  <span>适合年龄: {story.ageRange}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {stories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">该分类下暂无故事</p>
          </div>
        )}
      </div>
    </div>
  );
};

import { useParams } from 'react-router-dom';
import { getStoryById } from '@/data/stories';


const StoryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const storyId = id ? parseInt(id) : 1;
  const story = getStoryById(storyId);
  
  if (!story) {
    return (
      <div className="min-h-screen py-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">故事未找到</h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          抱歉，我们找不到您要查看的故事。请检查链接是否正确或返回首页。
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition-colors"
        >
          返回首页
        </button>
      </div>
    );
  }
  
  // 将故事内容分段
  const storyParagraphs = story.content.split('\n\n');
  
  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => window.history.back()}
          className="mb-6 inline-flex items-center text-blue-500 hover:text-blue-600"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i> 返回列表
        </button>
        
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
           <div className="h-64 md:h-80 overflow-hidden rounded-t-3xl">
             <img 
               src={story.imageUrl.replace('landscape_4_3', 'portrait_4_3')} 
               alt={story.title}
               className="w-full h-full object-cover"
             />
           </div>
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-800">{story.title}</h1>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {story.category}
              </span>
            </div>
            
            <div className="flex justify-between text-sm text-gray-500 mb-6">
              <span>阅读时间: {story.readTime}</span>
              <span>适合年龄: {story.ageRange}</span>
            </div>
            
            <div className="prose max-w-none text-gray-700 mb-8">
              {storyParagraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-400">
              <h3 className="font-bold text-yellow-800 mb-2">故事寓意</h3>
              <p className="text-yellow-700">{story.moral}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mb-12">
          <button 
            onClick={() => toast.success("故事已添加到收藏夹！")}
            className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full transition-colors flex items-center"
          >
            <i className="fa-regular fa-heart mr-2"></i> 收藏故事
          </button>
          <button 
            onClick={() => window.print()}
            className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-full transition-colors flex items-center"
          >
            <i className="fa-solid fa-print mr-2"></i> 打印故事
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <div className="pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<StoryCategoryPage />} />
          <Route path="/stories/:category" element={<StoryCategoryPage />} />
          <Route path="/story/:id" element={<StoryDetailPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/favorites" element={<div className="text-center text-xl py-12">收藏的故事 - 即将上线</div>} />
          <Route path="/about" element={<div className="text-center text-xl py-12">关于我们 - 即将上线</div>} />
        </Routes>
      </div>
      <MobileBottomNav />
    </AuthContext.Provider>
  );
}
