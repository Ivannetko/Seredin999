import { Youtube, Twitch, Send, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold">
            <span className="text-white">Seredin</span>
            <span className="text-[#ff4655]">999</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@seredin999"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-gray-800/50 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://twitch.tv/Seredin999"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-purple-500 hover:bg-gray-800/50 transition-colors"
              title="Twitch"
            >
              <Twitch className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/Seredin999"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-800/50 transition-colors"
              title="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="https://vk.com/seredin_999"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-gray-800/50 transition-colors"
              title="VK"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2026 Seredin999.ru — Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
