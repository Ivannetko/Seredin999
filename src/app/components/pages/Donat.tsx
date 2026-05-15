import { useState } from "react";
import { motion } from "motion/react";
import { Heart, DollarSign, Gift, Star, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ContactForm } from "../ContactForm";

type DonationForm = {
  name: string;
  amount: string;
  message: string;
};

const presetAmounts = [100, 300, 500, 1000, 2000, 5000];

const topDonators = [
  { name: "Player1337", amount: 5000, message: "За контент!" },
  { name: "DotaFan", amount: 3000, message: "Продолжай в том же духе" },
  { name: "Anonymous", amount: 2500, message: "Спасибо за стримы" },
  { name: "ProGamer", amount: 2000, message: "🔥🔥🔥" },
  { name: "StreamLover", amount: 1500, message: "Лучший стример!" },
];

export function Donat() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DonationForm>();

  const onSubmit = (data: DonationForm) => {
    console.log("Donation:", data);
    toast.success("Спасибо за поддержку! 🎉", {
      description: `Донат на ${data.amount}₽ от ${data.name}`,
    });
    reset();
    setSelectedAmount(null);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#ff4655] to-pink-600 rounded-full mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Поддержать проект</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ваша поддержка помогает мне создавать больше качественного контента и развивать проекты как Fissure.Bot
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-[#ff4655]" />
                Сделать донат
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input
                    {...register("name", { required: "Введите ваше имя" })}
                    type="text"
                    placeholder="Как вас представить?"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-[#ff4655] focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сумма доната</label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setSelectedAmount(amount)}
                        className={`px-4 py-3 rounded-lg border transition-all ${
                          selectedAmount === amount
                            ? "bg-[#ff4655] border-[#ff4655] text-white"
                            : "bg-black/50 border-gray-600 hover:border-gray-500"
                        }`}
                      >
                        {amount}₽
                      </button>
                    ))}
                  </div>
                  <input
                    {...register("amount", { 
                      required: "Укажите сумму доната",
                      min: { value: 10, message: "Минимальная сумма 10₽" }
                    })}
                    type="number"
                    value={selectedAmount || ""}
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    placeholder="Или введите свою сумму"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-[#ff4655] focus:outline-none transition-colors"
                  />
                  {errors.amount && (
                    <p className="text-red-400 text-sm mt-1">{errors.amount.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение (опционально)</label>
                  <textarea
                    {...register("message")}
                    placeholder="Напишите что-нибудь приятное..."
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-[#ff4655] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#ff4655] to-pink-600 hover:from-[#ff4655]/90 hover:to-pink-600/90 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Gift className="w-5 h-5" />
                  Отправить донат
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div className="mt-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Что вы получаете
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Упоминание на стриме</p>
                    <p className="text-sm text-gray-400">Ваше имя и сообщение появятся на экране</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Участие в розыгрышах</p>
                    <p className="text-sm text-gray-400">Специальные призы для донатеров</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Доступ к эксклюзивному контенту</p>
                    <p className="text-sm text-gray-400">Закрытые видео и материалы</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Donators */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Топ донатеров
              </h3>
              <div className="space-y-4">
                {topDonators.map((donator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-black/30 rounded-lg"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold truncate">{donator.name}</p>
                        <p className="text-[#ff4655] font-bold">{donator.amount}₽</p>
                      </div>
                      <p className="text-sm text-gray-400 truncate">{donator.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}