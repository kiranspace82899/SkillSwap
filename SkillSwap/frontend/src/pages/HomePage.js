export default function HomePage() {
  return (
    <div className="h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 flex items-center justify-center text-white">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-extrabold drop-shadow-lg animate-zoom-in">🎓 SkillSwap</h1>
        <p className="mt-4 text-xl animate-slide-up">Swap skills. Make friends. Learn together.</p>
        <p className="text-yellow-100 italic mt-4 animate-pulse-fast">Powered by learners like you 🔁</p>
      </div>
    </div>
  );
}
