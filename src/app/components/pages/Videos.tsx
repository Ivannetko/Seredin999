import { useState } from "react";
import { motion } from "motion/react";
import { Play, Filter, Search, TrendingUp, Clock, Eye } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

type VideoCategory = "all" | "dota2" | "streams" | "guides";

const videos = [
  {
    id: 1,
    title: "Лучшие моменты со стрима #12",
    category: "streams" as VideoCategory,
    thumbnail: "https://images.unsplash.com/photo-1619017120139-fb150367d4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3RhJTIwMiUyMGdhbWluZyUyMGJhdHRsZXxlbnwxfHx8fDE3Nzg4NzIxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "15K",
    duration: "25:30",
    uploadedAt: "2 дня назад",
  },
  {
    id: 2,
    title: "Гайд по новому патчу 7.35",
    category: "guides" as VideoCategory,
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW1lciUyMHNldHVwfGVufDF8fHx8MTc3ODg3MjEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "32K",
    duration: "18:45",
    uploadedAt: "5 дней назад",
  },
  {
    id: 3,
    title: "Dota 2: Epic Comeback!",
    category: "dota2" as VideoCategory,
    thumbnail: "https://images.unsplash.com/photo-1558008258-7ff8888b42b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudCUyMGNyb3dkfGVufDF8fHx8MTc3ODc0OTk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "48K",
    duration: "35:20",
    uploadedAt: "1 неделю назад",
  },
  {
    id: 4,
    title: "Как настроить OBS для стрима",
    category: "guides" as VideoCategory,
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW1lciUyMHNldHVwfGVufDF8fHx8MTc3ODg3MjEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "25K",
    duration: "22:15",
    uploadedAt: "2 недели назад",
  },
  {
    id: 5,
    title: "Highlights: турнир Сопли Squad",
    category: "streams" as VideoCategory,
    thumbnail: "https://images.unsplash.com/photo-1558008258-7ff8888b42b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudCUyMGNyb3dkfGVufDF8fHx8MTc3ODc0OTk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "42K",
    duration: "45:00",
    uploadedAt: "3 недели назад",
  },
  {
    id: 6,
    title: "Лучшие герои для калибровки MMR",
    category: "dota2" as VideoCategory,
    thumbnail: "https://images.unsplash.com/photo-1619017120139-fb150367d4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3RhJTIwMiUyMGdhbWluZyUyMGJhdHRsZXxlbnwxfHx8fDE3Nzg4NzIxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "38K",
    duration: "28:40",
    uploadedAt: "1 месяц назад",
  },
];

const categories = [
  { id: "all", label: "Все видео" },
  { id: "dota2", label: "Dota 2" },
  { id: "streams", label: "Стримы" },
  { id: "guides", label: "Гайды" },
];

export function Videos() {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
            <Play className="w-12 h-12 text-[#ff4655]" />
            Видео
          </h1>
          <p className="text-xl text-gray-400">
            Лучшие моменты, гайды и полезный контент
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск видео..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#ff4655] focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-gray-400" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as VideoCategory)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? "bg-[#ff4655] text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-3">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#ff4655] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs font-bold">
                  {video.duration}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-[#ff4655] transition-colors">
                {video.title}
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {video.views}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {video.uploadedAt}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Видео не найдены</p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700"
        >
          <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#ff4655]" />
          <h2 className="text-3xl font-bold mb-4">Хотите больше контента?</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Подпишитесь на YouTube канал, чтобы не пропустить новые видео и стримы!
          </p>
          <a
            href="https://www.youtube.com/@seredin999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg rounded-lg transition-all transform hover:scale-105"
          >
            <Play className="w-6 h-6" />
            Подписаться на YouTube
          </a>
        </motion.div>
      </div>
    </div>
  );
}
