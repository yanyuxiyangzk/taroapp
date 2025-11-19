import { useState, useEffect } from 'react';
import { Sparkles, Flame, Star, Moon, Heart, Briefcase, Wallet, ChevronDown, Circle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Progress } from './ui/progress';

const zodiacSigns = [
  '白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座',
  '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'
];

const bannerImages = [
  'https://images.unsplash.com/photo-1671013033034-5ea58e9c5008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMGNhcmRzJTIwbXlzdGljYWx8ZW58MXx8fHwxNzYyNzczMzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1682566737262-4ee52c933e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6b2RpYWMlMjBhc3Ryb2xvZ3klMjBteXN0aWNhbHxlbnwxfHx8fDE3NjI3ODU1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1753797782254-4ef6719c7bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3J0dW5lJTIwdGVsbGluZyUyMG1hZ2ljfGVufDF8fHx8MTc2Mjc4NTUyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

const fortuneStats = [
  { label: '健康', value: 86, color: 'from-green-500 to-emerald-500' },
  { label: '爱情', value: 81, color: 'from-pink-500 to-rose-500' },
  { label: '事业', value: 83, color: 'from-blue-500 to-cyan-500' },
  { label: '财富', value: 80, color: 'from-yellow-500 to-amber-500' },
];

const divinationCards = [
  { title: '卡牌问答', desc: '100w+ 回答', icon: '🎴', bg: 'https://images.unsplash.com/photo-1671013033034-5ea58e9c5008?w=400' },
  { title: '星图单图', desc: '专业达人解答', icon: '⭐', bg: null },
  { title: '骰子问答', desc: '趣味占卜', icon: '🎲', bg: null },
  { title: '星图合图', desc: '深度解析', icon: '🌟', bg: null },
  { title: '梦境详解', desc: '专业达人解答', icon: '💭', bg: 'https://images.unsplash.com/photo-1559466851-47d3cc0872ba?w=400' },
  { title: '手相问答', desc: '专业达人解答', icon: '✋', bg: 'https://images.unsplash.com/photo-1607824972522-2821fba071f5?w=400' },
];

export default function DivinationPage() {
  const [selectedZodiac, setSelectedZodiac] = useState('摩羯座');
  const [showZodiacSelect, setShowZodiacSelect] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [overallScore] = useState(85);

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black pb-24">
      {/* Header with Zodiac Selector */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-purple-200">妙瞳</h2>
          <div className="relative">
            <button
              onClick={() => setShowZodiacSelect(!showZodiacSelect)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-200 hover:bg-purple-900/60 transition-all backdrop-blur-sm"
            >
              <span>{selectedZodiac}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {showZodiacSelect && (
              <div className="absolute top-full right-0 mt-2 bg-black/95 border border-purple-500/30 rounded-xl p-2 backdrop-blur-lg z-10 grid grid-cols-3 gap-2 shadow-xl shadow-purple-500/20">
                {zodiacSigns.map((sign) => (
                  <button
                    key={sign}
                    onClick={() => {
                      setSelectedZodiac(sign);
                      setShowZodiacSelect(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedZodiac === sign
                        ? 'bg-purple-600/50 text-purple-100'
                        : 'text-purple-300 hover:bg-purple-900/30'
                    }`}
                  >
                    {sign}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Banner Carousel */}
      <div className="px-6 mb-6">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-red-500/20 blur-3xl z-0"></div>
          <Card className="relative bg-black/50 border-purple-500/30 overflow-hidden">
            <div className="relative h-44">
              {bannerImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentBanner === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="text-purple-100 mb-1">解锁命运密码</div>
                    <div className="inline-block px-4 py-1 bg-yellow-600/80 rounded-full text-white text-sm">
                      立即查看运势
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Indicator Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {bannerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBanner(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentBanner === index
                        ? 'bg-purple-400 w-6'
                        : 'bg-purple-400/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Today's Fortune */}
      <div className="px-6 mb-6">
        <Card className="bg-gradient-to-br from-purple-900/40 to-black/40 border-purple-500/40 backdrop-blur-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>
          
          <div className="relative p-5">
            <h3 className="text-purple-200 mb-4">今日心情</h3>
            
            <div className="flex items-center gap-6">
              {/* Overall Score Circle */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-900/50 to-purple-950/50 border-4 border-purple-500/30 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                  <div className="relative">
                    <div className="text-3xl text-purple-100">{overallScore}</div>
                    <div className="text-xs text-purple-300/70">综合评分</div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-purple-400/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              </div>

              {/* Stats Bars */}
              <div className="flex-1 space-y-3">
                {fortuneStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-purple-200 text-sm w-12">{stat.label}</span>
                    <div className="flex-1 h-2 bg-purple-950/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 relative overflow-hidden`}
                        style={{ width: `${stat.value}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                    <span className="text-purple-100 text-sm w-8">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fortune Description */}
            <div className="mt-4 pt-4 border-t border-purple-500/20">
              <p className="text-purple-200/80 text-sm leading-relaxed">
                今日的感情运势显示，你与伴侣之间的情感将愈发醇厚深沉。共同参与一场刺激的...
                <span className="text-purple-400">更多 {'>>>'}</span>
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Divination Cards Grid */}
      <div className="px-6">
        <div className="grid grid-cols-2 gap-3">
          {divinationCards.map((card, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all cursor-pointer group ${
                index === 0 || index === 4 || index === 5 ? 'h-40' : 'h-32'
              }`}
            >
              {card.bg ? (
                <>
                  <ImageWithFallback
                    src={card.bg}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/60"></div>
              )}
              
              <div className="relative p-4 h-full flex flex-col justify-end">
                <div className="text-3xl mb-2">{card.icon}</div>
                <h4 className="text-purple-100 mb-1">{card.title}</h4>
                <p className="text-purple-300/70 text-xs">{card.desc}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-all"></div>
            </Card>
          ))}
        </div>
      </div>

      {/* Mystical Book Section */}
      <div className="px-6 mt-6">
        <Card className="bg-gradient-to-br from-purple-900/30 to-black/30 border-purple-500/30 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-red-500/10 blur-2xl"></div>
          <div className="relative p-6 text-center">
            <div className="text-2xl mb-3">✨</div>
            <h3 className="text-purple-100 mb-2">神秘之书</h3>
            <p className="text-purple-300/70 text-sm mb-4">在彷徨不决时，找到内心的答案</p>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559466851-47d3cc0872ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMGJvb2slMjBncmltb2lyZXxlbnwxfHx8fDE3NjI3ODU1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mystical Book"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
