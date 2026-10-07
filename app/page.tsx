export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#262522]">
      <section className="flex min-h-screen flex-col items-center px-6 py-8 text-center">
        <div className="my-auto flex flex-col items-center">
          {/* Logo */}
          <div className="mb-12">
            <img
              src="/lisvi-logo.png"
              alt="LISVI"
              className="mx-auto w-48 md:w-64"
            />
          </div>

          {/* Brand category */}
          <p className="text-xs uppercase tracking-[0.4em] text-[#77736b]">
            Kids Collection
          </p>

          {/* Main message */}
          <h1 className="mt-7 max-w-2xl text-4xl font-light leading-tight tracking-tight md:text-6xl">
            Little adventures.
            <br />
            Beautifully made.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-md text-sm leading-7 text-[#77736b] md:text-base">
            A thoughtfully crafted collection for joyful,
            everyday moments with the little ones is coming soon.
          </p>

          {/* Coming Soon */}
          <div className="mt-12">
            <p className="text-sm font-medium uppercase tracking-[0.35em]">
              Coming Soon
            </p>

            <div className="mx-auto mt-4 h-px w-16 bg-[#262522]" />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col items-center gap-3 text-xs text-[#99958c]">
          <p>Luxury in simplicity.</p>
          <p>© 2026 LISVI</p>
        </div>

      </section>
    </main>
  );
}