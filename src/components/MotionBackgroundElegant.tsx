export default function MotionBackgroundElegant({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="site-grid pointer-events-none absolute inset-x-0 top-0 h-[760px]" />
      <div className="network-lines pointer-events-none absolute inset-x-0 top-0 h-[760px]" aria-hidden="true"><i /><i /><i /></div>
      {children}
    </div>
  );
}
