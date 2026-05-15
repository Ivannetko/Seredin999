import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Contact form data:", data);
    toast.success("Сообщение отправлено! 📨", {
      description: "Я отвечу вам в ближайшее время",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
    >
      <h3 className="text-2xl font-bold mb-6">Связаться со мной</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Ваше имя *</label>
          <input
            {...register("name", { required: "Введите ваше имя" })}
            type="text"
            placeholder="Иван Иванов"
            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-[#ff4655] focus:outline-none transition-colors"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            {...register("email", { 
              required: "Введите email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Неверный формат email"
              }
            })}
            type="email"
            placeholder="example@email.com"
            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-[#ff4655] focus:outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Тема *</label>
          <input
            {...register("subject", { required: "Укажите тему сообщения" })}
            type="text"
            placeholder="О чем хотите поговорить?"
            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-[#ff4655] focus:outline-none transition-colors"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Сообщение *</label>
          <textarea
            {...register("message", { 
              required: "Напишите сообщение",
              minLength: {
                value: 10,
                message: "Сообщение должно содержать минимум 10 символов"
              }
            })}
            placeholder="Напишите ваше сообщение..."
            rows={6}
            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-[#ff4655] focus:outline-none transition-colors resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-[#ff4655] to-pink-600 hover:from-[#ff4655]/90 hover:to-pink-600/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Отправка...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Отправить сообщение
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
