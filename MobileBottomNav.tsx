import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MobileBottomNav() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: 'fa-home', label: '首页' },
    { path: '/stories', icon: 'fa-book', label: '故事' },
    { path: '/favorites', icon: 'fa-heart', label: '收藏' },
    { path: '/about', icon: 'fa-info-circle', label: '关于' }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path === '/stories' && location.pathname.startsWith('/story'));
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center py-2 px-3 relative"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-50 rounded-lg"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <i className={`fa-solid ${item.icon} text-lg ${
                  isActive ? 'text-blue-500' : 'text-gray-400'
                } transition-colors`}></i>
                <span className={`text-xs mt-1 ${
                  isActive ? 'text-blue-500 font-medium' : 'text-gray-400'
                } transition-colors`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

