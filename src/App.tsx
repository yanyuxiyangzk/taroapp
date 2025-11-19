import { useState } from 'react';
import { Sparkles, Compass, Users, User } from 'lucide-react';
import DivinationPage from './components/DivinationPage';
import FengShuiPage from './components/FengShuiPage';
import CommunityPage from './components/CommunityPage';
import ProfilePage from './components/ProfilePage';

type TabType = 'divination' | 'fengshui' | 'community' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('divination');

  const tabs = [
    { id: 'divination' as TabType, icon: Sparkles, label: '占卜' },
    { id: 'fengshui' as TabType, icon: Compass, label: '风水' },
    { id: 'community' as TabType, icon: Users, label: '社区' },
    { id: 'profile' as TabType, icon: User, label: '我的' },
  ];

  const renderPage = () => {
    switch (activeTab) {
      case 'divination':
        return <DivinationPage />;
      case 'fengshui':
        return <FengShuiPage />;
      case 'community':
        return <CommunityPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <DivinationPage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-800/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-purple-500/30 z-50">
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 transition-all ${
                    isActive ? 'text-purple-300' : 'text-purple-500/50'
                  }`}
                >
                  <div
                    className={`relative p-2 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-br from-purple-600/30 to-red-600/30 shadow-lg shadow-purple-500/30'
                        : ''
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 transition-all ${
                        isActive ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-red-500/20 rounded-xl blur-md"></div>
                    )}
                  </div>
                  <span className={`text-xs ${isActive ? '' : 'font-normal'}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
