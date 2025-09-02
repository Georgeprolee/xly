import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  Settings, 
  BarChart3, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  X,
  FolderOpen
} from 'lucide-react';

interface Category {
  id: number;
  name: string;
}

interface Story {
  id: number;
  title: string;
  description: string;
  category_id: number;
  read_time: string;
  age_range: string;
  image_url: string;
  content: string;
  moral: string;
}

interface Admin {
  id: number;
  username: string;
  is_super_admin: boolean;
  is_active: boolean;
  created_at: string;
}

interface Stats {
  total_stories: number;
  total_categories: number;
  total_admins: number;
}

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [categories, setCategories] = useState<Category[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [stats, setStats] = useState<Stats>({ total_stories: 0, total_categories: 0, total_admins: 0 });
  const [currentAdmin, setCurrentAdmin] = useState<Admin | null>(null);
  
  // 编辑状态
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingStory, setEditingStory] = useState<Story | null>(null);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showStoryForm, setShowStoryForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [storyForm, setStoryForm] = useState({
    title: '',
    description: '',
    category_id: 1,
    read_time: '5分钟',
    age_range: '3-6岁',
    image_url: '',
    content: '',
    moral: ''
  });

  const API_BASE = 'http://localhost:5000/api';

  useEffect(() => {
    fetchCurrentAdmin();
    fetchStats();
    fetchCategories();
    fetchStories();
  }, []);

  const fetchCurrentAdmin = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/profile`, {
        credentials: 'include'
      });
      if (response.ok) {
        const admin = await response.json();
        setCurrentAdmin(admin);
      } else {
        navigate('/admin/login');
      }
    } catch (error) {
      console.error('获取管理员信息失败:', error);
      navigate('/admin/login');
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/stats`, {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('获取统计信息失败:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/categories`, {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('获取分类失败:', error);
    }
  };

  const fetchStories = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/stories?per_page=50`, {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setStories(data.stories);
      }
    } catch (error) {
      console.error('获取故事失败:', error);
    }
  };

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return;
    
    try {
      const response = await fetch(`${API_BASE}/admin/categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ name: newCategoryName })
      });
      
      if (response.ok) {
        setNewCategoryName('');
        setShowCategoryForm(false);
        fetchCategories();
        fetchStats();
      } else {
        const error = await response.json();
        alert(error.error || '创建分类失败');
      }
    } catch (error) {
      console.error('创建分类失败:', error);
      alert('创建分类失败');
    }
  };

  const handleUpdateCategory = async (id: number, name: string) => {
    try {
      const response = await fetch(`${API_BASE}/admin/categories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ name })
      });
      
      if (response.ok) {
        setEditingCategory(null);
        fetchCategories();
      } else {
        const error = await response.json();
        alert(error.error || '更新分类失败');
      }
    } catch (error) {
      console.error('更新分类失败:', error);
      alert('更新分类失败');
    }
  };

  const handleDeleteCategory = async (id: number) => {
    if (!confirm('确定要删除这个分类吗？')) return;
    
    try {
      const response = await fetch(`${API_BASE}/admin/categories/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      
      if (response.ok) {
        fetchCategories();
        fetchStats();
      } else {
        const error = await response.json();
        alert(error.error || '删除分类失败');
      }
    } catch (error) {
      console.error('删除分类失败:', error);
      alert('删除分类失败');
    }
  };

  const handleCreateStory = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/stories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(storyForm)
      });
      
      if (response.ok) {
        setStoryForm({
          title: '',
          description: '',
          category_id: 1,
          read_time: '5分钟',
          age_range: '3-6岁',
          image_url: '',
          content: '',
          moral: ''
        });
        setShowStoryForm(false);
        fetchStories();
        fetchStats();
      } else {
        const error = await response.json();
        alert(error.error || '创建故事失败');
      }
    } catch (error) {
      console.error('创建故事失败:', error);
      alert('创建故事失败');
    }
  };

  const handleUpdateStory = async (id: number) => {
    try {
      const response = await fetch(`${API_BASE}/admin/stories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(storyForm)
      });
      
      if (response.ok) {
        setEditingStory(null);
        setShowStoryForm(false);
        fetchStories();
      } else {
        const error = await response.json();
        alert(error.error || '更新故事失败');
      }
    } catch (error) {
      console.error('更新故事失败:', error);
      alert('更新故事失败');
    }
  };

  const handleDeleteStory = async (id: number) => {
    if (!confirm('确定要删除这个故事吗？')) return;
    
    try {
      const response = await fetch(`${API_BASE}/admin/stories/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      
      if (response.ok) {
        fetchStories();
        fetchStats();
      } else {
        const error = await response.json();
        alert(error.error || '删除故事失败');
      }
    } catch (error) {
      console.error('删除故事失败:', error);
      alert('删除故事失败');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE}/admin/logout`, {
        method: 'POST',
        credentials: 'include'
      });
      navigate('/admin/login');
    } catch (error) {
      console.error('退出失败:', error);
    }
  };

  const getCategoryName = (categoryId: number) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : '未知分类';
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">仪表板</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-blue-600">总故事数</p>
              <p className="text-2xl font-bold text-blue-900">{stats.total_stories}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <div className="flex items-center">
            <FolderOpen className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-green-600">总分类数</p>
              <p className="text-2xl font-bold text-green-900">{stats.total_categories}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-purple-600">管理员数</p>
              <p className="text-2xl font-bold text-purple-900">{stats.total_admins}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCategories = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">分类管理</h2>
        <button
          onClick={() => setShowCategoryForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          添加分类
        </button>
      </div>

      {showCategoryForm && (
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="分类名称"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleCreateCategory}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              保存
            </button>
            <button
              onClick={() => {
                setShowCategoryForm(false);
                setNewCategoryName('');
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 flex items-center"
            >
              <X className="h-4 w-4 mr-2" />
              取消
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">名称</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{category.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingCategory?.id === category.id ? (
                      <input
                        type="text"
                        value={editingCategory.name}
                        onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                        className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <span className="text-sm text-gray-900">{category.name}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {editingCategory?.id === category.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleUpdateCategory(category.id, editingCategory.name)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Save className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setEditingCategory(null)}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingCategory(category)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(category.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStories = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">故事管理</h2>
        <button
          onClick={() => {
            setShowStoryForm(true);
            setEditingStory(null);
            setStoryForm({
              title: '',
              description: '',
              category_id: categories[0]?.id || 1,
              read_time: '5分钟',
              age_range: '3-6岁',
              image_url: '',
              content: '',
              moral: ''
            });
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          添加故事
        </button>
      </div>

      {showStoryForm && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">
            {editingStory ? '编辑故事' : '添加新故事'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">标题</label>
              <input
                type="text"
                value={storyForm.title}
                onChange={(e) => setStoryForm({ ...storyForm, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">分类</label>
              <select
                value={storyForm.category_id}
                onChange={(e) => setStoryForm({ ...storyForm, category_id: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">阅读时间</label>
              <input
                type="text"
                value={storyForm.read_time}
                onChange={(e) => setStoryForm({ ...storyForm, read_time: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">适合年龄</label>
              <input
                type="text"
                value={storyForm.age_range}
                onChange={(e) => setStoryForm({ ...storyForm, age_range: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">描述</label>
              <textarea
                value={storyForm.description}
                onChange={(e) => setStoryForm({ ...storyForm, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">图片URL</label>
              <input
                type="url"
                value={storyForm.image_url}
                onChange={(e) => setStoryForm({ ...storyForm, image_url: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">故事内容</label>
              <textarea
                value={storyForm.content}
                onChange={(e) => setStoryForm({ ...storyForm, content: e.target.value })}
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">寓意</label>
              <textarea
                value={storyForm.moral}
                onChange={(e) => setStoryForm({ ...storyForm, moral: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={() => {
                setShowStoryForm(false);
                setEditingStory(null);
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 flex items-center"
            >
              <X className="h-4 w-4 mr-2" />
              取消
            </button>
            <button
              onClick={() => editingStory ? handleUpdateStory(editingStory.id) : handleCreateStory()}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              保存
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">标题</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分类</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">阅读时间</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">适合年龄</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stories.map((story) => (
                <tr key={story.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{story.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{story.title}</div>
                    <div className="text-sm text-gray-500">{story.description.substring(0, 50)}...</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {getCategoryName(story.category_id)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{story.read_time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{story.age_range}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setEditingStory(story);
                          setStoryForm({
                            title: story.title,
                            description: story.description,
                            category_id: story.category_id,
                            read_time: story.read_time,
                            age_range: story.age_range,
                            image_url: story.image_url,
                            content: story.content,
                            moral: story.moral
                          });
                          setShowStoryForm(true);
                        }}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteStory(story.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">管理面板</h1>
              {currentAdmin && (
                <span className="ml-4 text-sm text-gray-600">
                  欢迎，{currentAdmin.username}
                  {currentAdmin.is_super_admin && (
                    <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      超级管理员
                    </span>
                  )}
                </span>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              退出登录
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8">
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center px-4 py-2 text-left rounded-lg ${
                      activeTab === 'dashboard' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <BarChart3 className="h-5 w-5 mr-3" />
                    仪表板
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('categories')}
                    className={`w-full flex items-center px-4 py-2 text-left rounded-lg ${
                      activeTab === 'categories' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FolderOpen className="h-5 w-5 mr-3" />
                    分类管理
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('stories')}
                    className={`w-full flex items-center px-4 py-2 text-left rounded-lg ${
                      activeTab === 'stories' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <BookOpen className="h-5 w-5 mr-3" />
                    故事管理
                  </button>
                </li>
                {currentAdmin?.is_super_admin && (
                  <li>
                    <button
                      onClick={() => setActiveTab('admins')}
                      className={`w-full flex items-center px-4 py-2 text-left rounded-lg ${
                        activeTab === 'admins' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Users className="h-5 w-5 mr-3" />
                      管理员管理
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === 'dashboard' && renderDashboard()}
              {activeTab === 'categories' && renderCategories()}
              {activeTab === 'stories' && renderStories()}
              {activeTab === 'admins' && currentAdmin?.is_super_admin && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">管理员管理</h2>
                  <p className="text-gray-600 mt-2">管理员管理功能将在下一阶段实现</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

