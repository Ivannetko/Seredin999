import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            <span className="text-white">Seredin</span>
            <span className="text-[#ff4655]">999</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive("/")
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/donat"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive("/donat")
                  ? "bg-[#ff4655] text-white"
                  : "text-gray-300 hover:bg-[#ff4655]/20 hover:text-white"
              }`}
            >
              Donat
            </Link>
            <Link
              to="/videos"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive("/videos")
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              Видео
            </Link>
            <Link
              to="/blog"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive("/blog")
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              Блог
            </Link>

            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors flex items-center gap-1"
              >
                Полезное
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden"
                  >
                    <Link
                      to="/fissure-bot"
                      className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Fissure.Bot
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg ${
                    isActive("/")
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-800/50"
                  }`}
                >
                  Главная
                </Link>
                <Link
                  to="/donat"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg ${
                    isActive("/donat")
                      ? "bg-[#ff4655] text-white"
                      : "text-gray-300 hover:bg-gray-800/50"
                  }`}
                >
                  Donat
                </Link>
                <Link
                  to="/videos"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg ${
                    isActive("/videos")
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-800/50"
                  }`}
                >
                  Видео
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg ${
                    isActive("/blog")
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-800/50"
                  }`}
                >
                  Блог
                </Link>
                <Link
                  to="/fissure-bot"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg ${
                    isActive("/fissure-bot")
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-800/50"
                  }`}
                >
                  Fissure.Bot
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
