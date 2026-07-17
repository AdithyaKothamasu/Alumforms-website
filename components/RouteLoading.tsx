export default function RouteLoading() {
  return (
    <main aria-busy="true" aria-live="polite" className="min-h-screen bg-[#F6F4F3]">
      <span className="sr-only">Loading page</span>
      <div className="h-16 border-b border-black/5 bg-white/90" />
      <section className="bg-[#131200] px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl animate-pulse space-y-5">
          <div className="h-3 w-32 bg-[#ECA72C]/70" />
          <div className="h-10 max-w-xl bg-white/20 sm:h-14" />
          <div className="h-5 max-w-2xl bg-white/10" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="animate-pulse space-y-5">
          <div className="h-[min(58vw,32rem)] min-h-64 w-full bg-[#131200]/10" />
          <div className="h-5 max-w-3xl bg-[#131200]/10" />
          <div className="h-5 max-w-xl bg-[#131200]/10" />
        </div>
      </section>
    </main>
  );
}
