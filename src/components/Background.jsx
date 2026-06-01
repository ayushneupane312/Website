export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-glow-radial" />
      <div
        className="absolute inset-0 bg-grid-tech opacity-40"
        style={{ backgroundSize: '64px 64px' }}
      />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-depth/10 blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-signal/5 blur-[100px]" />
    </div>
  )
}
