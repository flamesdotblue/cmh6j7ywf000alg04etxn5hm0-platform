import Spline from '@splinetool/react-spline';

export default function HeroCover({ children }) {
  return (
    <div className="relative w-full" style={{ height: '60vh', minHeight: 380 }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white dark:from-zinc-950/20 dark:via-zinc-950/0 dark:to-zinc-950 pointer-events-none" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-full pointer-events-none">
          {/* children wrapper remains non-interactive to preserve Spline interactions; inner controls re-enable */}
          <div className="pointer-events-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
