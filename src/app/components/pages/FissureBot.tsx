import { useState } from "react";
import { motion } from "motion/react";
import {
  MessageSquare,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  BarChart3,
  Trophy,
  Send,
  CheckCircle2,
  Star,
  Github,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Статистика игроков",
    description: "Подробная статистика из OpenDota: MMR, винрейт, любимые герои и многое другое",
  },
  {
    icon: BarChart3,
    title: "Аналитика импакта",
    description: "Анализ влияния игрока на исход матча с подробными метриками",
  },
  {
    icon: TrendingUp,
    title: "Недельный мета-отчёт",
    description: "Актуальная информация о самых популярных и сильных героях патча",
  },
  {
    icon: Trophy,
    title: "Мини-игра Фиссура",
    description: "Увлекательная игра для участников чата с рейтингом и наградами",
  },
  {
    icon: Star,
    title: "Система MVP",
    description: "Определение лучшего игрока матча на основе множества параметров",
  },
  {
    icon: Zap,
    title: "Дайджесты матчей",
    description: "Автоматические краткие отчёты о прошедших играх участников",
  },
];

const stats = [
  { label: "Активных пользователей", value: "300+", icon: Users },
  { label: "Обработано матчей", value: "5000+", icon: Trophy },
  { label: "Игровых чатов", value: "25+", icon: MessageSquare },
  { label: "Uptime", value: "99.9%", icon: Shield },
];

export function FissureBot() {
  const [activeTab, setActiveTab] = useState<"features" | "commands">("features");

  const commands = [
    { command: "/stats [player_id]", description: "Получить подробную статистику игрока" },
    { command: "/lastmatch [player_id]", description: "Информация о последнем матче" },
    { command: "/heroes [player_id]", description: "Топ герои игрока" },
    { command: "/meta", description: "Актуальная мета текущего патча" },
    { command: "/fissure", description: "Сыграть в мини-игру Фиссура" },
    { command: "/leaderboard", description: "Таблица лидеров чата" },
    { command: "/mvp", description: "MVP последнего матча" },
    { command: "/help", description: "Список всех команд бота" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff4655]/20 via-purple-900/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#ff4655] to-purple-600 rounded-3xl mb-6">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-6xl font-bold mb-6">
              Fissure<span className="text-[#ff4655]">.Bot</span>
            </h1>

            <p className="text-2xl text-gray-300 mb-8">
              Telegram-бот для Dota 2 сообществ с полной интеграцией OpenDota, аналитикой и мини-играми
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://t.me/squadbase"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition-all transform hover:scale-105"
              >
                <Send className="w-6 h-6" />
                Добавить в чат
              </a>
              <a
                href="https://github.com/Seredin999/FissureBot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-gray-600 hover:border-gray-500 text-white text-lg rounded-lg transition-all"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#ff4655]" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Возможности бота</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Все что нужно для полноценной интеграции Dota 2 в ваш Telegram чат
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-[#ff4655]/50 transition-colors"
              >
                <div className="w-12 h-12 bg-[#ff4655]/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#ff4655]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Документация</h2>
            <p className="text-xl text-gray-400">
              Ознакомьтесь с возможностями и командами бота
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("features")}
              className={`flex-1 py-3 px-6 rounded-lg transition-all ${
                activeTab === "features"
                  ? "bg-[#ff4655] text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Функции
            </button>
            <button
              onClick={() => setActiveTab("commands")}
              className={`flex-1 py-3 px-6 rounded-lg transition-all ${
                activeTab === "commands"
                  ? "bg-[#ff4655] text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Команды
            </button>
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
          >
            {activeTab === "features" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">Основные функции</h3>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">{feature.title}</p>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "commands" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">Доступные команды</h3>
                {commands.map((cmd, index) => (
                  <div key={index} className="p-4 bg-black/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <code className="px-3 py-1 bg-[#ff4655]/20 text-[#ff4655] rounded font-mono text-sm">
                        {cmd.command}
                      </code>
                    </div>
                    <p className="text-gray-400 text-sm">{cmd.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <Globe className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Интеграция с OpenDota</h3>
                <p className="text-gray-400">
                  Fissure.Bot использует официальное API OpenDota для получения актуальной информации о матчах, игроках и статистике в реальном времени.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <Shield className="w-6 h-6 text-blue-400 mb-2" />
                <p className="font-bold mb-1">Безопасность</p>
                <p className="text-sm text-gray-400">Защищенное соединение с API</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="font-bold mb-1">Скорость</p>
                <p className="text-sm text-gray-400">Быстрая обработка запросов</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <TrendingUp className="w-6 h-6 text-green-400 mb-2" />
                <p className="font-bold mb-1">Актуальность</p>
                <p className="text-sm text-gray-400">Данные в реальном времени</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#ff4655]/10 to-purple-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <MessageSquare className="w-16 h-16 mx-auto mb-6 text-[#ff4655]" />
            <h2 className="text-4xl font-bold mb-4">Готовы попробовать?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Добавьте Fissure.Bot в свой Telegram чат и начните использовать все возможности уже сегодня!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://t.me/squadbase"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition-all transform hover:scale-105"
              >
                <Send className="w-6 h-6" />
                Добавить бота
              </a>
              <a
                href="https://t.me/Seredin999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-gray-600 hover:border-gray-500 text-white text-lg rounded-lg transition-all"
              >
                <MessageSquare className="w-6 h-6" />
                Задать вопрос
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
