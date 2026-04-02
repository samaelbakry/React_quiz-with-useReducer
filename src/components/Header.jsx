const Header = () => {
  return (
    <>
      <header className="relative flex items-center justify-center mx-auto max-w-7xl p-6">
        <div className="absolute inset-0 bg-linear-to-r from-violet-600/20 to-indigo-600/20 blur-3xl opacity-50 rounded-3xl"></div>
        <div className="relative flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-lg">
          <img
            src="images.png"
            alt="logo"
            className="w-14 h-14 object-contain drop-shadow-lg"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-indigo-400 tracking-wide">
            React Quiz
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
