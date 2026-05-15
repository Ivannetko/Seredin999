import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, Calendar, User, Tag, ArrowRight, TrendingUp } from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Как я создал Fissure.Bot: от идеи до запуска",
    excerpt: "История разработки Telegram-бота для Dota 2 сообщества. Технические решения, вызовы и результаты первого месяца работы.",
    category: "Разработка",
    author: "Seredin999",
    date: "15 мая 2026",
    readTime: "8 мин",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW1lciUyMHNldHVwfGVufDF8fHx8MTc3ODg3MjEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Топ-5 ошибок начинающих стримеров",
    excerpt: "Разбираю самые частые ошибки новичков в стриминге и даю практические советы, как их избежать. Настройка OBS, взаимодействие с аудиторией и многое другое.",
    category: "Гайды",
    author: "Seredin999",
    date: "10 мая 2026",
    readTime: "6 мин",
    image: "https://images.unsplash.com/photo-1558008258-7ff8888b42b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudCUyMGNyb3dkfGVufDF8fHx8MTc3ODc0OTk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Анализ нового патча 7.35 в Dota 2",
    excerpt: "Подробный разбор изменений в последнем патче. Какие герои стали сильнее, какие ослабли, и как это повлияет на мету.",
    category: "Dota 2",
    author: "Seredin999",
    date: "5 мая 2026",
    readTime: "12 мин",
    image: "https://images.unsplash.com/photo-1619017120139-fb150367d4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3RhJTIwMiUyMGdhbWluZyUyMGJhdHRsZXxlbnwxfHx8fDE3Nzg4NzIxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "Итоги турнира Сопли Squad: впечатления и выводы",
    excerpt: "Организация турнира с нуля - это челлендж! Делюсь опытом проведения турнира, технической стороной и планами на будущее.",
    category: "Мероприятия",
    author: "Seredin999",
    date: "1 мая 2026",
    readTime: "10 мин",
    image: "https://images.unsplash.com/photo-1558008258-7ff8888b42b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudCUyMGNyb3dkfGVufDF8fHx8MTc3ODc0OTk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    title: "Как поднять MMR: проверенные стратегии",
    excerpt: "Делюсь своими методами и подходами к повышению MMR. Психология, выбор героев, коммуникация с командой и работа над ошибками.",
    category: "Dota 2",
    author: "Seredin999",
    date: "25 апреля 2026",
    readTime: "15 мин",
    image: "https://images.unsplash.com/photo-1619017120139-fb150367d4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3RhJTIwMiUyMGdhbWluZyUyMGJhdHRsZXxlbnwxfHx8fDE3Nzg4NzIxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    title: "Интеграция OpenDota API: практическое руководство",
    excerpt: "Технический гайд по работе с OpenDota API. Примеры кода, лучшие практики и готовые решения для ваших проектов.",
    category: "Разработка",
    author: "Seredin999",
    date: "20 апреля 2026",
    readTime: "20 мин",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW1lciUyMHNldHVwfGVufDF8fHx8MTc3ODg3MjEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const categories = ["Все", "Разработка", "Dota 2", "Гайды", "Мероприятия"];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredPosts = selectedCategory === "Все" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
            <BookOpen className="w-12 h-12 text-[#ff4655]" />
            Блог
          </h1>
          <p className="text-xl text-gray-400">
            Статьи о разработке, стриминге и Dota 2
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex items-center gap-2 flex-wrap"
        >
          <Tag className="w-5 h-5 text-gray-400" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category
                  ? "bg-[#ff4655] text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {selectedCategory === "Все" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 group cursor-pointer"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#ff4655] rounded-full text-sm font-bold">
                  Избранное
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <span className="px-2 py-1 bg-gray-700 rounded">{blogPosts[0].category}</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-[#ff4655] transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-400 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">{blogPosts[0].author}</span>
                  </div>
                  <button className="flex items-center gap-2 text-[#ff4655] group-hover:gap-3 transition-all">
                    Читать
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <span className="px-2 py-1 bg-gray-700 rounded">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff4655] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <button className="text-[#ff4655] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Читать
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-[#ff4655]/20 to-purple-900/20 rounded-2xl p-12 border border-[#ff4655]/30 text-center"
        >
          <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#ff4655]" />
          <h2 className="text-3xl font-bold mb-4">Не пропускайте новые статьи!</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Подпишитесь на Telegram канал, чтобы получать уведомления о новых публикациях
          </p>
          <a
            href="https://t.me/Seredin999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition-all transform hover:scale-105"
          >
            Подписаться на Telegram
          </a>
        </motion.div>
      </div>
    </div>
  );
}
