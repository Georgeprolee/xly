import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex items-center space-x-2"
        >
          <span className="text-2xl">🌙</span>
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            梦童话
          </Link>
        </motion.div>
        
        {/* 桌面端导航 */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">首页</Link>
          <Link to="/stories" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">故事分类</Link>
          <Link to="/favorites" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">收藏夹</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">关于我们</Link>
          <Link to="/admin/login" className="text-gray-500 hover:text-blue-500 transition-colors font-medium text-sm">
            <i className="fa-solid fa-user-shield mr-1"></i>管理员
          </Link>
        </div>
        
        {/* 桌面端开始阅读按钮 */}
        <Link 
          to="/stories" 
          className={cn(
            "hidden md:flex bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          )}
        >
          开始阅读
        </Link>

        {/* 移动端菜单按钮 */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-700`}></i>
        </button>
      </div>

      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-home mr-3 w-5"></i>首页
            </Link>
            <Link 
              to="/stories" 
              className="block text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-book mr-3 w-5"></i>故事分类
            </Link>
            <Link 
              to="/favorites" 
              className="block text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-heart mr-3 w-5"></i>收藏夹
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-info-circle mr-3 w-5"></i>关于我们
            </Link>
            <Link 
              to="/admin/login" 
              className="block text-gray-500 hover:text-blue-500 transition-colors font-medium py-2 text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-user-shield mr-3 w-5"></i>管理员
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link 
                to="/stories" 
                className="block w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white text-center py-3 rounded-full shadow-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                开始阅读
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}