import { useState, useEffect } from "react";

export const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setLoading(false), 350);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0d0d0d] transition-opacity duration-300 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border border-white/10 border-t-white animate-spin" />
        <span className="absolute text-[10px] font-mono font-bold text-white tracking-widest">
          SD
        </span>
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
        Loading Portfolio
      </p>
    </div>
  );
};

export default PreLoader;
