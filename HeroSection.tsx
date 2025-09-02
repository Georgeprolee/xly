import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-white z-0"></div>
      
      {/* 装饰元素 */}
      <div className="absolute top-1/4 left-4 md:left-10 w-16 md:w-20 h-16 md:h-20 bg-pink-200 rounded-full opacity-50 blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-4 md:right-16 w-24 md:w-32 h-24 md:h-32 bg-blue-200 rounded-full opacity-50 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="block text-gray-800">温馨的</span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">睡前故事</span>
            <span className="block text-gray-800">陪伴宝贝入睡</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 px-4 md:px-0">
            每晚一个精彩故事，让可爱的角色和奇妙的冒险伴随孩子进入甜美的梦乡。
          </p>
          
          {/* 移动端优化的按钮布局 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 px-4 md:px-0">
            <button 
              onClick={() => window.location.href = '/story/1'} 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium text-sm md:text-base active:scale-95"
            >
              <i className="fa-solid fa-book"></i>
              <span>经典故事</span>
            </button>
            
            <button 
              onClick={() => window.location.href = '/story/2'} 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium text-sm md:text-base active:scale-95"
            >
              <i className="fa-solid fa-heart"></i>
              <span>温馨故事</span>
            </button>
            
            <button 
              onClick={() => window.location.href = '/story/3'} 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium text-sm md:text-base active:scale-95"
            >
              <i className="fa-solid fa-leaf"></i>
              <span>自然故事</span>
            </button>
            
            <button 
              onClick={() => window.location.href = '/story/4'} 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium text-sm md:text-base active:scale-95"
            >
              <i className="fa-solid fa-star"></i>
              <span>冒险故事</span>
            </button>
            
            <button 
              onClick={() => window.location.href = '/story/5'} 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium text-sm md:text-base active:scale-95"
            >
              <i className="fa-solid fa-magic-wand-sparkles"></i>
              <span>奇幻故事</span>
            </button>
            
            <button 
              onClick={() => window.location.href = '/stories'} 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium text-sm md:text-base active:scale-95"
            >
              <i className="fa-solid fa-list"></i>
              <span>更多故事</span>
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <div className="relative w-full max-w-xs md:max-w-md aspect-square">
            {/* 使用参考图片作为主要角色 */}
            <div className="relative w-full h-full bg-contain bg-center bg-no-repeat rounded-2xl" 
                 style={{ backgroundImage: 'url(https://lf-code-agent.coze.cn/obj/x-ai-cn/attachment/2798714188734668/1755477753630_edit_480037941881438_20250821165448.png)' }}>
            </div>
            
            {/* 装饰元素 - 移动端优化 */}
            <div className="absolute -top-3 md:-top-5 -right-3 md:-right-5 bg-yellow-200 p-2 md:p-3 rounded-full shadow-lg animate-bounce">
              <span className="text-lg md:text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-2 md:-bottom-3 -left-2 md:-left-3 bg-pink-200 p-2 rounded-full shadow-lg animate-pulse">
              <span className="text-base md:text-xl">🌙</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}