export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b120f] text-[#f4efe6]">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0b120f]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          
          <a
            href="#"
            className="text-xl font-semibold tracking-[0.25em] text-[#d7a65a]"
          >
            YAQOTA
          </a>

          <div className="hidden items-center gap-8 text-sm text-[#d8d3c8] md:flex">
            <a href="#home" className="transition hover:text-[#d7a65a]">
              Home
            </a>
            <a href="#menu" className="transition hover:text-[#d7a65a]">
              Menu
            </a>
            <a href="#story" className="transition hover:text-[#d7a65a]">
              Our Story
            </a>
            <a href="#contact" className="transition hover:text-[#d7a65a]">
              Contact
            </a>
          </div>

          <a
            href="#menu"
            className="border border-[#d7a65a] px-5 py-2.5 text-sm text-[#d7a65a] transition hover:bg-[#d7a65a] hover:text-[#0b120f]"
          >
            Explore Menu
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-10"
      >
        
        {/* Decorative glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7a65a]/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT */}
          <div className="max-w-2xl">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#d7a65a]">
              Specialty Coffee · Tetouan
            </p>

            <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Coffee
              <br />
              <span className="font-semibold text-[#d7a65a]">
                with a soul.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#aaa69c]">
              A quiet place for remarkable coffee, meaningful conversations,
              and moments worth slowing down for.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="bg-[#d7a65a] px-7 py-4 font-medium text-[#0b120f] transition hover:bg-[#e4bb79]"
              >
                Discover the menu
              </a>

              <a
                href="#story"
                className="border border-white/20 px-7 py-4 text-[#f4efe6] transition hover:border-[#d7a65a] hover:text-[#d7a65a]"
              >
                Discover YAQOTA
              </a>
            </div>
          </div>

          {/* RIGHT - COFFEE VISUAL */}
          <div className="relative mx-auto flex h-[520px] w-full max-w-[500px] items-center justify-center">
            
            <div className="absolute h-[380px] w-[380px] rounded-full border border-[#d7a65a]/20" />
            <div className="absolute h-[300px] w-[300px] rounded-full border border-white/10" />

            <div className="relative flex h-[260px] w-[260px] items-center justify-center rounded-full bg-gradient-to-b from-[#d9c2a0] to-[#7b4e2e] shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
              
              <div className="absolute top-[48px] h-[115px] w-[115px] rounded-full bg-[#3b2114] shadow-inner" />

              <div className="absolute -bottom-8 h-16 w-40 rounded-full bg-black/30 blur-xl" />
            </div>

            <div className="absolute bottom-12 left-4 text-xs uppercase tracking-[0.3em] text-white/40">
              Slow · Rich · Human
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        className="border-t border-white/10 bg-[#101914] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d7a65a]">
                Our selection
              </p>

              <h2 className="text-4xl font-light sm:text-5xl">
                Crafted with intention.
              </h2>
            </div>

            <p className="max-w-md text-[#aaa69c]">
              Carefully selected beans, balanced flavours and simple recipes
              made to let the coffee speak.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            
            <div className="bg-[#101914] p-8 transition hover:bg-[#16221b]">
              <span className="text-sm text-[#d7a65a]">01</span>
              <h3 className="mt-12 text-2xl">Espresso</h3>
              <p className="mt-4 text-sm leading-7 text-[#aaa69c]">
                Deep, intense and perfectly balanced.
              </p>
              <p className="mt-8 text-lg text-[#d7a65a]">18 DH</p>
            </div>

            <div className="bg-[#101914] p-8 transition hover:bg-[#16221b]">
              <span className="text-sm text-[#d7a65a]">02</span>
              <h3 className="mt-12 text-2xl">Signature Latte</h3>
              <p className="mt-4 text-sm leading-7 text-[#aaa69c]">
                Silky milk with our house espresso.
              </p>
              <p className="mt-8 text-lg text-[#d7a65a]">28 DH</p>
            </div>

            <div className="bg-[#101914] p-8 transition hover:bg-[#16221b]">
              <span className="text-sm text-[#d7a65a]">03</span>
              <h3 className="mt-12 text-2xl">Cold Brew</h3>
              <p className="mt-4 text-sm leading-7 text-[#aaa69c]">
                Slow extracted for a smooth finish.
              </p>
              <p className="mt-8 text-lg text-[#d7a65a]">30 DH</p>
            </div>

          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="px-6 py-32 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#d7a65a]">
              The YAQOTA story
            </p>

            <h2 className="text-4xl font-light leading-tight sm:text-6xl">
              More than coffee.
              <br />
              <span className="text-[#d7a65a]">A feeling.</span>
            </h2>
          </div>

          <div className="border-l border-[#d7a65a]/40 pl-8">
            <p className="text-lg leading-9 text-[#aaa69c]">
              YAQOTA was imagined as a space where coffee becomes part of the
              moment. No rush. No noise. Just carefully crafted drinks,
              warm light and good company.
            </p>

            <p className="mt-6 text-lg leading-9 text-[#aaa69c]">
              From the first aroma to the last sip, every detail has a
              purpose.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#d7a65a] px-6 py-24 text-[#0b120f] lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em]">
              Come visit
            </p>

            <h2 className="text-5xl font-light sm:text-7xl">
              See you at YAQOTA.
            </h2>
          </div>

          <div className="text-sm leading-7">
            <p>Tétouan, Morocco</p>
            <p>Every day · 08:00 — 22:00</p>
            <p className="mt-4">hello@yaqota.ma</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b120f] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-white/40 sm:flex-row">
          <span>© 2026 YAQOTA Coffee House</span>
          <span>Made with intention.</span>
        </div>
      </footer>

    </main>
  );
}