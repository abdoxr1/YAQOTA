const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b120f] text-[#f4efe6]">
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a
            href="#home"
            className="text-xl font-semibold tracking-[0.3em] text-[#f4efe6]"
          >
            YAQOTA
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-[#d7a65a]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#menu"
            className="border border-[#d7a65a] px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[#d7a65a] transition hover:bg-[#d7a65a] hover:text-[#0b120f]"
          >
            Menu
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10"
      >
        {/* Background atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(84,108,75,0.25),transparent_35%)]" />

        <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#d7a65a]/10 blur-[130px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* HERO TEXT */}
          <div>
            <p className="mb-7 text-xs uppercase tracking-[0.45em] text-[#d7a65a]">
              Specialty Coffee · Tetouan
            </p>

            <h1 className="max-w-4xl text-6xl font-light leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-[100px]">
              Coffee
              <br />
              <span className="font-serif italic text-[#d7a65a]">
                made slowly.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
              A warm space for carefully crafted coffee, meaningful
              conversations and moments worth remembering.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="group inline-flex items-center gap-4 bg-[#d7a65a] px-7 py-4 text-sm font-medium text-[#0b120f] transition hover:bg-[#e4bb79]"
              >
                Explore the menu
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#story"
                className="border border-white/15 px-7 py-4 text-sm text-white/80 transition hover:border-[#d7a65a] hover:text-[#d7a65a]"
              >
                Our story
              </a>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto flex h-[520px] w-full max-w-[520px] items-center justify-center">
            <div className="absolute h-[430px] w-[430px] rounded-full border border-[#d7a65a]/15" />

            <div className="absolute h-[340px] w-[340px] rounded-full border border-white/10" />

            <div className="absolute h-[260px] w-[260px] rounded-full border border-[#d7a65a]/20" />

            {/* Coffee cup */}
            <div className="relative">
              <div className="relative h-[190px] w-[240px] rounded-[45%_45%_35%_35%] bg-gradient-to-b from-[#e0c7a2] via-[#a8794c] to-[#59361f] shadow-[0_35px_90px_rgba(0,0,0,0.65)]">
                <div className="absolute left-1/2 top-8 h-[70px] w-[150px] -translate-x-1/2 rounded-full bg-[#321b11] shadow-inner" />

                <div className="absolute left-1/2 top-[23px] h-4 w-[115px] -translate-x-1/2 rounded-full bg-[#6b4226]/60 blur-sm" />
              </div>

              {/* Handle */}
              <div className="absolute -right-16 top-10 h-[105px] w-[90px] rounded-r-full border-[22px] border-[#a8794c]" />

              {/* Saucer */}
              <div className="absolute -bottom-8 left-1/2 h-7 w-[300px] -translate-x-1/2 rounded-full bg-[#c4a27a]/60 blur-[1px]" />

              {/* Shadow */}
              <div className="absolute -bottom-16 left-1/2 h-10 w-[280px] -translate-x-1/2 rounded-full bg-black/50 blur-2xl" />
            </div>

            <div className="absolute bottom-5 left-0 text-[10px] uppercase tracking-[0.35em] text-white/30">
              Slow · Rich · Human
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-white/30 md:flex">
          <span className="h-px w-10 bg-white/20" />
          Scroll
          <span className="h-px w-10 bg-white/20" />
        </div>
      </section>

      {/* SMALL INTRO */}
      <section className="border-t border-white/10 bg-[#f0eadf] px-6 py-28 text-[#18211c] lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#806c45]">
              The YAQOTA philosophy
            </p>

            <h2 className="text-4xl font-light leading-tight sm:text-6xl">
              Good coffee.
              <br />
              <span className="font-serif italic">Good moments.</span>
            </h2>
          </div>

          <p className="max-w-xl self-end text-base leading-8 text-[#5e665f]">
            We believe the best coffee experiences are never rushed. YAQOTA is
            a place to slow down, enjoy the craft and make room for the moments
            that matter.
          </p>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section
        id="menu"
        className="bg-[#0b120f] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d7a65a]">
            Selected menu
          </p>

          <h2 className="text-4xl font-light sm:text-6xl">
            Crafted with intention.
          </h2>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              ["01", "Espresso", "Deep, intense and balanced.", "18 DH"],
              ["02", "Signature Latte", "Silky milk and house espresso.", "28 DH"],
              ["03", "Cold Brew", "Slow extracted and refreshing.", "30 DH"],
            ].map(([number, title, description, price]) => (
              <article
                key={number}
                className="bg-[#0b120f] p-8 transition hover:bg-[#121d17]"
              >
                <span className="text-xs tracking-[0.25em] text-[#d7a65a]">
                  {number}
                </span>

                <h3 className="mt-16 text-2xl">{title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {description}
                </p>

                <p className="mt-8 text-[#d7a65a]">{price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="border-t border-white/10 px-6 py-32 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d7a65a]">
              Our story
            </p>

            <h2 className="text-4xl font-light leading-tight sm:text-6xl">
              More than coffee.
              <br />
              <span className="text-[#d7a65a]">A feeling.</span>
            </h2>
          </div>

          <div className="border-l border-[#d7a65a]/40 pl-8">
            <p className="text-lg leading-9 text-white/55">
              YAQOTA was created around a simple idea: coffee tastes better
              when you give yourself time to enjoy it.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/55">
              Every detail, from the beans to the atmosphere, is designed to
              create a warm and memorable experience.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#d7a65a] px-6 py-24 text-[#0b120f] lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em]">
              Come visit
            </p>

            <h2 className="text-5xl font-light sm:text-7xl">
              See you at YAQOTA.
            </h2>
          </div>

          <div className="text-sm leading-8">
            <p>Tétouan · Morocco</p>
            <p>08:00 — 22:00</p>
            <p>hello@yaqota.ma</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b120f] px-6 py-8">
        <div className="mx-auto flex max-w-7xl justify-between text-xs text-white/35">
          <span>© 2026 YAQOTA</span>
          <span>Coffee · Moments · Tétouan</span>
        </div>
      </footer>
    </main>
  );
}