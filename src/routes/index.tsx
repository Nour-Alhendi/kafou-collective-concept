import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "KAFOU COLECTIVO — Uplift Without Hesitation",
      },
      {
        name: "description",
        content:
          "KAFOU COLECTIVO is a multidisciplinary arts collective bridging art, music, and cinema. No gatekeeping, no competition — just pure creative power.",
      },
      {
        property: "og:title",
        content: "KAFOU COLECTIVO — Uplift Without Hesitation",
      },
      {
        property: "og:description",
        content:
          "A multidisciplinary arts collective bridging art, music, and cinema.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SmokeLayer />
      <TopNav />
      <Hero />
      <About />
      <Events />
      <Artists />
      <Archive />
      <Newsletter />
      <Footer />
    </main>
  );
}

function SmokeLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-smoke" />
      <div
        className="absolute -left-1/4 top-0 h-[60vh] w-[60vw] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--kafou-pink)" }}
      />
      <div
        className="absolute bottom-[10%] right-[-10%] h-[50vh] w-[50vw] rounded-full opacity-15 blur-[100px]"
        style={{ background: "var(--kafou-pink)" }}
      />
      <div
        className="absolute left-1/3 top-1/3 h-[40vh] w-[40vw] rounded-full opacity-10 blur-[90px]"
        style={{ background: "var(--kafou-pink-glow)" }}
      />
    </div>
  );
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Artists & Workshops", href: "#workshops" },
  { label: "Archive", href: "#archive" },
];

function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-arabic text-3xl leading-none text-foreground" lang="ar" dir="rtl">
            كفو
          </span>
          <span className="stencil-stamp text-xs tracking-[0.35em] text-muted-foreground">
            Collectivo
          </span>
        </a>

        <nav className="flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#newsletter"
            className="rounded-md bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90 glow-button"
          >
            Join
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-10 py-32 text-center">
      <div className="absolute inset-0 -z-10 mask-fade-bottom opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, color-mix(in oklab, var(--kafou-pink) 25%, transparent) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="max-w-6xl space-y-10">
        <h1 className="flex flex-col items-center">
          <span
            className="font-arabic ink-mark block text-[10rem] font-bold leading-[0.85] text-foreground lg:text-[14rem]"
            lang="ar"
            dir="rtl"
          >
            كفو
          </span>
          <span className="stencil-stamp mt-2 block text-2xl tracking-[0.5em] lg:text-4xl">
            Collectivo
          </span>
          <span className="sr-only">Kafou Collectivo</span>
        </h1>

        <p className="mx-auto max-w-3xl text-2xl font-medium uppercase tracking-[0.2em] text-primary">
          Uplift without hesitation
        </p>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A representative bridge between art, music, and cinema. A space for
          artists and musicians to be seen, supported, and connected.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#events"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 glow-button"
          >
            See upcoming events
          </a>
          <a
            href="#workshops"
            className="inline-flex items-center justify-center rounded-md border border-primary/40 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary/10"
          >
            Book a workshop
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="sr-only">Scroll down</span>
        <svg
          className="h-6 w-6 text-primary/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

function About() {
  const values = [
    "Respect",
    "Skill",
    "Raw authenticity",
    "No gatekeeping",
    "No competition",
    "Pure creative power",
  ];

  return (
    <section id="about" className="relative px-10 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-20">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              What KAFOU means
            </p>
            <h2 className="text-6xl font-bold uppercase leading-tight tracking-tight">
              Well done.
              <br />
              Capable.
              <br />
              More than enough.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="font-bold text-foreground">KAFOU</span> comes
              from Arabic — a word of recognition, of respect, of saying{" "}
              <em className="text-primary">you have what it takes</em>.
            </p>
            <p>
              We are a multidisciplinary arts collective built on that energy:
              a bridge between art, music, and cinema where creators lift each
              other up. No hierarchy. No gatekeeping. Just space, support, and
              connection.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-5">
          {values.map((value) => (
            <div
              key={value}
              className="rounded-md border border-border bg-card/50 px-6 py-5 transition-colors hover:border-primary/40"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-foreground">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const events = [
  {
    date: "24 AUG",
    title: "Kafou Sessions: Live Cinema & Sound",
    location: "Berlin",
  },
  {
    date: "07 SEP",
    title: "Workshop Night: Sampling & Storytelling",
    location: "Hamburg",
  },
  {
    date: "21 SEP",
    title: "Collectivo Gathering: Art + Music",
    location: "Online",
  },
];

function Events() {
  return (
    <section id="events" className="relative px-10 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Coming up
          </p>
          <h2 className="text-5xl font-bold uppercase tracking-tight">
            Upcoming Events
          </h2>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-row items-center justify-between gap-8 rounded-md border border-border bg-card/40 p-7 transition-colors hover:border-primary/40 hover:bg-card/60"
            >
              <div className="flex items-center gap-8">
                <div className="min-w-[4.5rem] text-center">
                  <p className="text-2xl font-bold leading-none text-primary">
                    {event.date.split(" ")[0]}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {event.date.split(" ")[1]}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wide text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </div>
              </div>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 glow-button shrink-0"
              >
                Anmeldung
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const artists = [
  { name: "Layla", discipline: "Visual Art / Mixed Media" },
  { name: "Hasna", discipline: "Poetry & Spoken Word" },
  { name: "Maia", discipline: "Experimental Film" },
  { name: "Zedan", discipline: "Electronic Music Production" },
  { name: "Amir", discipline: "DJ & Sound Design" },
  { name: "Anna", discipline: "Photography & Zine Making" },
  { name: "Sham", discipline: "Arabic Calligraphy & Typography" },
];

function Artists() {
  return (
    <section id="workshops" className="relative px-10 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Collective artists
          </p>
          <h2 className="text-5xl font-bold uppercase tracking-tight">
            Artists & Workshops
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Every artist in the collective offers a workshop. Learn directly from
            the people building the scene.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="group flex flex-col justify-between rounded-md border border-border bg-card/40 p-6 transition-all hover:border-primary/40 hover:bg-card/60"
            >
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {artist.name[0]}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    {artist.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{artist.discipline}</p>
              </div>
              <a
                href="#newsletter"
                className="inline-flex w-full items-center justify-center rounded-md border border-primary/40 bg-transparent px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Book workshop
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const archiveItems = [
  { label: "Kafou Launch Night", year: "2024" },
  { label: "Cinema Under the Bridge", year: "2024" },
  { label: "Zine & Beat Swap", year: "2024" },
  { label: "Open Studio Sessions", year: "2023" },
  { label: "Collectivo Radio 001", year: "2023" },
  { label: "Group Exhibition: Roots", year: "2023" },
];

function Archive() {
  return (
    <section id="archive" className="relative px-10 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Past happenings
          </p>
          <h2 className="text-5xl font-bold uppercase tracking-tight">
            Archive
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            A growing record of events, exhibitions, and collaborations. Future
            version could include an interactive map view of past happenings.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {archiveItems.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-card/40 p-6 transition-all hover:border-primary/40"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-full flex-col justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold uppercase leading-tight tracking-wide">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="relative px-10 py-32">
      <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card/40 p-8 glow-border md:p-12">
        <div className="mb-8 space-y-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Stay connected
          </p>
          <h2 className="text-4xl font-bold uppercase tracking-tight">
            Join the collective
          </h2>
          <p className="text-muted-foreground">
            Get updates on events, workshops, and open calls. No spam — just
            creative power.
          </p>
        </div>

        <form
          className="flex flex-row gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Thanks for signing up with ${email}`);
            setEmail("");
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 glow-button"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border px-10 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="font-arabic ink-mark text-6xl leading-none text-foreground" lang="ar" dir="rtl">
                كفو
              </span>
              <span className="stencil-stamp text-sm tracking-[0.4em] text-muted-foreground">
                Collectivo
              </span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="text-foreground">Instagram:</span>{" "}
                <a
                  href="https://instagram.com/kafou.colectivo"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  @kafou.colectivo
                </a>
              </p>
              <p>
                <span className="text-foreground">Email:</span>{" "}
                <a
                  href="mailto:kafou.colectivo@proton.me"
                  className="text-primary hover:underline"
                >
                  kafou.colectivo@proton.me
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-6 text-right">
            <div className="flex flex-wrap gap-3">
              {["Instagram", "YouTube", "SoundCloud", "Bandcamp"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-md border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {social}
                  </a>
                )
              )}
            </div>

            <div className="flex flex-row-reverse items-center gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-md border border-dashed border-primary/40 bg-card/40 text-xs text-muted-foreground">
                QR
              </div>
              <p className="max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
                Scan for the full link tree / social channels. Placeholder for
                final QR asset.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-row items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} KAFOU COLLECTIVO. All rights reserved.</p>
          <p className="uppercase tracking-wider">Uplift without hesitation</p>
        </div>
      </div>
    </footer>
  );
}
