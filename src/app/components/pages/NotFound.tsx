import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-[#ff4655] mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Страница не найдена</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-md">
          К сожалению, запрашиваемая страница не существует или была удалена
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-[#ff4655] hover:bg-[#ff4655]/90 text-white rounded-lg transition-all transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            На главную
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад
          </button>
        </div>
      </motion.div>
    </div>
  );
}
