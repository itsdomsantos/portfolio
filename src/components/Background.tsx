// Fundo fixo com blobs de gradiente animados e uma grelha subtil.
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#05010f]" />

      {/* Blobs de gradiente */}
      <div className="absolute top-[-10%] left-[-5%] h-[45vw] w-[45vw] rounded-full bg-fuchsia-600/30 blur-[120px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] h-[40vw] w-[40vw] rounded-full bg-indigo-600/30 blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-15%] left-[25%] h-[42vw] w-[42vw] rounded-full bg-cyan-500/20 blur-[120px] animate-blob animation-delay-4000" />

      {/* Grelha subtil */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
