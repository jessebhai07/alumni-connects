import { BookOpen } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="absolute inset-0 opacity-90" />

      <div className="relative z-10 flex flex-col items-center space-y-10">
        <div className="relative">
          <div className="animate-pulse">
            <BookOpen className="w-24 h-24 md:w-32 md:h-32 text-red-600" />
          </div>

          <div className="absolute -inset-12 md:-inset-16">
            <div className="h-full w-full rounded-full border-8 border-transparent border-t-red-500 border-r-orange-500 border-b-red-400 border-l-orange-400 animate-spin"></div>
          </div>

          <div className="absolute -inset-20 md:-inset-24">
            <div className="h-full w-full rounded-full border-4 border-dashed border-red-200 opacity-40 animate-spin" style={{ animationDirection: "reverse", animationDuration: "10s" }}></div>
          </div>
        </div>

        <div className="text-center space-y-4 py-20">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
            বাঁশগ্রাম হাইস্কুল অ্যালামনাই
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            অ্যালামনাই ডিরেক্টরি লোড হচ্ছে...
          </p>
        </div>

        <div className="flex space-x-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}