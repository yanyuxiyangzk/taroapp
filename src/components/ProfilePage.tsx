import { User, Star, BookOpen, Settings, Bell, Shield, Flame, Crown, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

const stats = [
  { label: '占卜次数', value: '156', icon: Star },
  { label: '学习天数', value: '89', icon: BookOpen },
  { label: '获得勋章', value: '12', icon: Award },
];

const menuItems = [
  { icon: Star, label: '我的收藏', color: 'yellow' },
  { icon: BookOpen, label: '学习记录', color: 'blue' },
  { icon: Bell, label: '消息通知', color: 'purple', badge: '3' },
  { icon: Shield, label: '隐私设置', color: 'green' },
  { icon: Settings, label: '系统设置', color: 'gray' },
];

const achievements = [
  { name: '占卜新手', desc: '完成首次占卜', unlocked: true },
  { name: '风水入门', desc: '学习5个风水知识', unlocked: true },
  { name: '社区活跃', desc: '发布10条动态', unlocked: true },
  { name: '神秘探索者', desc: '连续签到30天', unlocked: false },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black p-6 pb-24">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Crown className="w-8 h-8 text-yellow-400" />
          <h1 className="text-purple-200">个人中心</h1>
          <Crown className="w-8 h-8 text-yellow-400" />
        </div>
      </div>

      {/* Profile Card */}
      <Card className="bg-gradient-to-br from-purple-900/40 to-black/40 border-purple-500/40 backdrop-blur-sm mb-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/10 blur-3xl rounded-full"></div>
        
        <div className="relative p-6">
          {/* Avatar and Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center text-3xl shadow-lg shadow-purple-500/30">
              🔮
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-purple-100">神秘行者</h2>
                <span className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full border border-purple-400/30">
                  Lv.8
                </span>
              </div>
              <p className="text-purple-300/70 text-sm">探索神秘世界的旅人</p>
              
              {/* Level Progress */}
              <div className="mt-3">
                <div className="flex justify-between text-xs text-purple-300/60 mb-1">
                  <span>经验值</span>
                  <span>680/1000</span>
                </div>
                <Progress value={68} className="h-2 bg-purple-950/50">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-red-500 rounded-full transition-all" style={{ width: '68%' }}></div>
                </Progress>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-purple-400 mr-1" />
                    <span className="text-purple-100 text-xl">{stat.value}</span>
                  </div>
                  <div className="text-purple-300/60 text-xs">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Achievements */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Flame className="w-5 h-5 text-red-400" />
          <h3 className="text-purple-200">我的成就</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`p-3 backdrop-blur-sm transition-all ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-purple-900/30 to-black/30 border-purple-500/40'
                  : 'bg-black/20 border-purple-500/20 opacity-50'
              }`}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-yellow-500/30 to-red-500/30 shadow-lg shadow-yellow-500/20'
                      : 'bg-purple-900/20'
                  }`}
                >
                  <Award className={`w-6 h-6 ${achievement.unlocked ? 'text-yellow-400' : 'text-purple-400/50'}`} />
                </div>
                <div>
                  <div className="text-purple-100 text-sm mb-1">{achievement.name}</div>
                  <div className="text-purple-300/60 text-xs">{achievement.desc}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-black/20 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/40 transition-all cursor-pointer"
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-purple-300" />
                  </div>
                  <span className="text-purple-200">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-1 bg-red-500/30 text-red-200 text-xs rounded-full border border-red-400/30">
                    {item.badge}
                  </span>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Logout Button */}
      <div className="mt-6">
        <Button className="w-full bg-gradient-to-r from-purple-900/50 to-red-900/50 border border-purple-500/30 text-purple-200 hover:from-purple-900/70 hover:to-red-900/70 transition-all">
          退出登录
        </Button>
      </div>
    </div>
  );
}
