import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-mountains.jpg";
import shawlImg from "@/assets/shawl.jpg";
import handsImg from "@/assets/hands.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tulip — A Himalayan House of Provenance" },
      {
        name: "description",
        content:
          "By invitation. A curated house of Himalayan craft, story and provenance. 500 founding patrons.",
      },
      { property: "og:title", content: "Tulip — A Himalayan House of Provenance" },
      {
        property: "og:description",
        content: "By invitation. 500 founding patrons.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

function Monogram() {
  return (
    <div className="flex items-center gap-3">
      <span className="font-serif text-2xl italic text-gold">T</span>
      <span className="h-px w-8 bg-gold/60" />
      <span className="font-sans tracking-luxe text-[10px] uppercase text-muted-foreground">
        Tulip
      </span>
    </div>
  );
}

function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [seats, setSeats] = useState(500);

  useEffect(() => {
    // gentle scarcity — a slow countdown of remaining seats
    const t = setInterval(() => {
      setSeats((s) => (s > 387 ? s - 1 : s));
    }, 9000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] flex-col">
        <img
          src={heroImg}
          alt="Mist over a cedar forest in the Himalayas at dawn"
          width={1080}
          height={1920}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-vignette" />
        <div className="absolute inset-0 -z-10 bg-background/45" />

        <header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <Monogram />
          <span className="font-sans tracking-luxe text-[10px] uppercase text-muted-foreground">
            By Invitation
          </span>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center md:px-12">
          <p className="animate-fade font-sans tracking-luxe text-[10px] uppercase text-gold/90 md:text-xs">
            A Himalayan House of Provenance
          </p>

          <h1 className="mt-8 max-w-4xl animate-fade-up font-serif text-5xl font-light leading-[1.05] text-balance text-foreground md:text-7xl lg:text-[5.5rem]">
            For those who collect{" "}
            <em className="text-gold">silence</em>,
            <br className="hidden md:block" /> not souvenirs.
          </h1>

          <p className="mt-8 max-w-xl animate-fade-up font-serif text-lg italic font-light text-muted-foreground md:text-xl">
            Cedar smoke. Hand-spun wool. A grandmother's recipe.
            <br />
            The mountain, kept whole — and offered to a chosen few.
          </p>

          <div className="mt-14 flex flex-col items-center gap-4 animate-fade-up">
            <a
              href="#patron"
              className="group inline-flex items-center gap-3 border border-gold/70 px-10 py-4 font-sans text-[11px] tracking-luxe uppercase text-gold transition-all hover:bg-gold hover:text-primary-foreground"
            >
              Request an Invitation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="font-sans text-[10px] tracking-luxe uppercase text-muted-foreground">
              <span className="animate-shimmer text-gold">●</span>&nbsp;&nbsp;
              {seats} of 500 founding patrons remain
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-[10px] tracking-luxe uppercase text-muted-foreground/70">
          ↓ Scroll
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans tracking-luxe text-[10px] uppercase text-gold">
            Manifesto
          </p>
          <p className="mt-10 font-serif text-2xl font-light leading-relaxed text-balance text-foreground md:text-4xl md:leading-[1.4]">
            We do not sell objects. We sell{" "}
            <em className="text-gold">belonging</em> — to a mountain,
            to a maker, to a tradition that refused to be hurried.
          </p>
          <div className="mx-auto mt-16 h-px w-16 bg-gold/50" />
          <p className="mt-16 font-sans text-sm leading-loose text-muted-foreground md:text-base">
            Each piece in the house carries the fingerprint of a single artisan,
            the soil of a single valley, and the patience of a single season.
            Nothing is repeated. Nothing is rushed. Nothing is anonymous.
          </p>
        </div>
      </section>

      {/* TRIPTYCH */}
      <section className="px-6 pb-32 md:px-12 md:pb-48">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <figure className="group relative overflow-hidden">
            <img
              src={shawlImg}
              alt="Handwoven Kullu shawl, close detail"
              loading="lazy"
              width={1080}
              height={1600}
              className="h-[28rem] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04] md:h-[36rem]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-8">
              <p className="font-sans tracking-luxe text-[10px] uppercase text-gold/90">
                Chapter I
              </p>
              <p className="mt-2 font-serif text-2xl font-light italic text-foreground">
                The Loom
              </p>
            </figcaption>
          </figure>
          <figure className="group relative overflow-hidden md:mt-24">
            <img
              src={handsImg}
              alt="An artisan's weathered hands carving cedar wood"
              loading="lazy"
              width={1080}
              height={1600}
              className="h-[28rem] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04] md:h-[36rem]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-8">
              <p className="font-sans tracking-luxe text-[10px] uppercase text-gold/90">
                Chapter II
              </p>
              <p className="mt-2 font-serif text-2xl font-light italic text-foreground">
                The Hand
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border/60 bg-card/40 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-3">
          {[
            { n: "I", t: "Provenance", d: "Every object traceable to a valley, a maker, a season." },
            { n: "II", t: "Patience",   d: "Released only when the season, and the artisan, are ready." },
            { n: "III", t: "Privacy",   d: "A members-only house. No catalog. No commerce in public view." },
          ].map((p) => (
            <div key={p.n} className="text-center">
              <p className="font-serif text-3xl italic text-gold">{p.n}</p>
              <p className="mt-6 font-serif text-2xl font-light text-foreground">{p.t}</p>
              <p className="mx-auto mt-4 max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PATRON FORM */}
      <section id="patron" className="px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-sans tracking-luxe text-[10px] uppercase text-gold">
            The Founding Five Hundred
          </p>
          <h2 className="mt-8 font-serif text-4xl font-light leading-tight text-balance text-foreground md:text-5xl">
            An invitation, should the mountain accept you.
          </h2>
          <p className="mt-6 font-serif text-lg italic font-light text-muted-foreground">
            Patronage is reviewed personally. We write to those we welcome.
          </p>

          {submitted ? (
            <div className="mt-14 border border-gold/60 px-8 py-12">
              <p className="font-serif text-2xl italic text-gold">Received.</p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                Your name has been placed before the house. Should we open a door for you,
                you will hear from us — quietly, by letter.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const name = (data.get("name") as string) || "";
                const email = (data.get("email") as string) || "";
                const why = (data.get("why") as string) || "";
                const message = `Tulip — Request for Patronage%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AWhy:%0A${encodeURIComponent(why)}`;
                window.open(`https://wa.me/918296379446?text=${message}`, "_blank");
                setSubmitted(true);
              }}
              className="mt-14 space-y-5 text-left"
            >
              <div>
                <label className="block font-sans tracking-luxe text-[10px] uppercase text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="mt-2 w-full border-b border-border bg-transparent py-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                  placeholder="As you wish to be addressed"
                />
              </div>
              <div>
                <label className="block font-sans tracking-luxe text-[10px] uppercase text-muted-foreground">
                  Correspondence
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="mt-2 w-full border-b border-border bg-transparent py-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                  placeholder="A private email"
                />
              </div>
              <div>
                <label className="block font-sans tracking-luxe text-[10px] uppercase text-muted-foreground">
                  A few words about why
                </label>
                <textarea
                  name="why"
                  rows={3}
                  className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                  placeholder="Optional. We read every word."
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full border border-gold/70 px-10 py-4 font-sans text-[11px] tracking-luxe uppercase text-gold transition-all hover:bg-gold hover:text-primary-foreground"
              >
                Submit for Consideration
              </button>
              <p className="pt-2 text-center font-sans text-[10px] tracking-luxe uppercase text-muted-foreground">
                Reviewed by hand · Replies within fourteen days
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <Monogram />
          <p className="font-sans text-[10px] tracking-luxe uppercase text-muted-foreground">
            Himachal · The Himalayas · By Invitation Only
          </p>
        </div>
      </footer>
    </main>
  );
}
