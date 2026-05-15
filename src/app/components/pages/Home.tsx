import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Youtube,
  Twitch,
  Send,
  Users,
  Code,
  Video,
  TrendingUp,
  MessageSquare,
  Shield,
  Globe,
  Radio,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  const [isLive, setIsLive] = useState(false);
  const [stats, setStats] = useState({
    fissureBotUsers: 300,
    youtubeSubs: 1000,
    twitchFollowers: 650,
    telegramSubs: 700,
  });

  // Simulate live status check
  useEffect(() => {
    const checkLiveStatus = () => {
      setIsLive(Math.random() > 0.7);
    };
    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  // Animate stats on mount
  useEffect(() => {
    const animateStats = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 0.05;
        if (progress >= 1) {
          clearInterval(interval);
          return;
        }
        setStats({
          fissureBotUsers: Math.floor(300 * progress),
          youtubeSubs: Math.floor(1000 * progress),
          twitchFollowers: Math.floor(650 * progress),
          telegramSubs: Math.floor(700 * progress),
        });
      }, 30);
    };
    animateStats();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff4655]/10 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-[#ff4655] to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-[#0a0a0f] rounded-full flex items-center justify-center text-4xl font-bold">
                  S9
                </div>
              </div>
              {isLive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1"
                >
                  <Radio className="w-3 h-3 animate-pulse" />
                  LIVE
                </motion.div>
              )}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Seredin</span>
              <span className="text-[#ff4655]">999</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Стримлю Dota 2, делаю контент, строю сервисы и помогаю начинающим стримерам с настройками обс.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.youtube.com/@seredin999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all transform hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
              <a
                href="https://twitch.tv/Seredin999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all transform hover:scale-105"
              >
                <Twitch className="w-5 h-5" />
                Twitch
              </a>
              <a
                href="https://t.me/Seredin999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Stats */}
      <section className="py-12 px-4 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700"
            >
              <Users className="w-8 h-8 mx-auto mb-2 text-[#ff4655]" />
              <div className="text-3xl font-bold text-white mb-1">{stats.fissureBotUsers}+</div>
              <div className="text-sm text-gray-400">Fissure.Bot Users</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700"
            >
              <Youtube className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <div className="text-3xl font-bold text-white mb-1">{stats.youtubeSubs}+</div>
              <div className="text-sm text-gray-400">YouTube Subs</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700"
            >
              <Twitch className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <div className="text-3xl font-bold text-white mb-1">{stats.twitchFollowers}+</div>
              <div className="text-sm text-gray-400">Twitch Followers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700"
            >
              <Send className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="text-3xl font-bold text-white mb-1">{stats.telegramSubs}+</div>
              <div className="text-sm text-gray-400">Telegram Subs</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <Users className="w-8 h-8 text-[#ff4655]" />
            <h2 className="text-3xl font-bold">О себе</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-300 mb-4">
                Я <span className="text-[#ff4655] font-bold">Seredin999</span>, в офлайне —{" "}
                <span className="font-bold">Андрей Середин</span>. Стримлю Dota 2, делаю позитивный контент и запускаю
                проекты, которыми сам пользуюсь.
              </p>
              <p className="text-gray-400 mb-4">
                В 2026 запустил <span className="font-bold text-white">Fissure.Bot</span> — Telegram-бота для игровых
                чатов с полной интеграцией Dota 2: OpenDota, аналитика импакта, недельный мета-отчёт, мини-игра
                «Фиссура», дайджесты, топ MMR и топ Фиссур.
              </p>
              <p className="text-sm text-gray-500">
                Стримлю то, чем реально пользуюсь. Без воды и лишнего шума.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW1lciUyMHNldHVwfGVufDF8fHx8MTc3ODg3MjEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gaming Setup"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <Code className="w-8 h-8 text-[#ff4655]" />
            <h2 className="text-3xl font-bold">Проекты</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#ff4655]/20 rounded-xl">
                <MessageSquare className="w-8 h-8 text-[#ff4655]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Fissure.Bot</h3>
                <p className="text-gray-400">
                  Telegram-бот для игровых чатов с полной интеграцией Dota 2: OpenDota, аналитика импакта, недельный
                  мета-отчёт, мини-игра «Фиссура», дайджесты, топ MMR и топ Фиссур.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-black/30 rounded-lg p-4">
                <Users className="w-5 h-5 text-[#ff4655]" />
                <div>
                  <div className="font-bold">300+</div>
                  <div className="text-sm text-gray-400">пользователей</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/30 rounded-lg p-4">
                <Shield className="w-5 h-5 text-[#ff4655]" />
                <div>
                  <div className="font-bold">Dota 2</div>
                  <div className="text-sm text-gray-400">интеграция</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/30 rounded-lg p-4">
                <Globe className="w-5 h-5 text-[#ff4655]" />
                <div>
                  <div className="font-bold">OpenDota</div>
                  <div className="text-sm text-gray-400">интеграция</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://t.me/squadbase"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#ff4655] hover:bg-[#ff4655]/90 text-white rounded-lg transition-all transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Открыть
              </a>
              <Link
                to="/fissure-bot"
                className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-all"
              >
                Подробнее
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media & Events */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <Video className="w-8 h-8 text-[#ff4655]" />
            <h2 className="text-3xl font-bold">Мероприятия и медиа</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
            >
              <div className="w-12 h-12 bg-[#ff4655]/20 rounded-xl flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-[#ff4655]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Медиа-проекты и шоу</h3>
              <p className="text-gray-400">
                Основатель Сопли Squad. Создал несколько форматов авторских шоу: Дота Мафия и не только.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
            >
              <div className="w-12 h-12 bg-[#ff4655]/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#ff4655]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Коллабы и партнёрства</h3>
              <p className="text-gray-400">
                Сотрудничаю с ведущими брендами игровой индустрии и за ее пределами, включая Metaskins.gg, Mostbet и
                другие. Открыт для новых партнерств — пишите.
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Присоединяйтесь к сообществу!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Следите за стримами, участвуйте в розыгрышах и общайтесь с другими фанатами Dota 2
            </p>
            <a
              href="https://t.me/Seredin999"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition-all transform hover:scale-105"
            >
              <Send className="w-6 h-6" />
              Связаться в Telegram
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
