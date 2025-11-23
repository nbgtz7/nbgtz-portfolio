export default function About() {
  // Replace with your own portrait (local: /about/portrait.jpg or a Cloudinary URL)
  const portrait =
    "https://res.cloudinary.com/dkirmhlji/image/upload/v1762109473/IMG_0468_knpu6c.jpg";

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          About me
        </h1>
        <p className="mt-3 text-neutral-600">
          Model combining presence, energy, and versatility. I’m
          driven by refined aesthetics, natural expression, and collaborative
          work with photographers, stylists, and brands.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200">
          <img
            src={portrait}
            alt="Portrait"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold">Bio</h2>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              I work across editorial and commercial contexts, from studio to
              outdoor locations. Reliable on set, comfortable with direction,
              and confident in front of the camera. Open to castings,
              lookbooks, campaigns, and creative tests.
            </p>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Measurements & details
            </h3>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-neutral-200 p-3">
                <dt className="text-neutral-500">Height</dt>
                <dd className="font-medium">181 cm</dd>
              </div>
              <div className="rounded-lg border border-neutral-200 p-3">
                <dt className="text-neutral-500">Weight</dt>
                <dd className="font-medium">73 kg</dd>
              </div>
              <div className="rounded-lg border border-neutral-200 p-3">
                <dt className="text-neutral-500">Eyes</dt>
                <dd className="font-medium">Brown/Green</dd>
              </div>
              <div className="rounded-lg border border-neutral-200 p-3">
                <dt className="text-neutral-500">Hair</dt>
                <dd className="font-medium">Brown/Blond</dd>
              </div>
              <div className="rounded-lg border border-neutral-200 p-3">
                <dt className="text-neutral-500">Shoes</dt>
                <dd className="font-medium">EU 44</dd>
              </div>
              <div className="rounded-lg border border-neutral-200 p-3">
                <dt className="text-neutral-500">Location</dt>
                <dd className="font-medium">Paris / Alsace, France</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* Put a PDF in /public to enable this download */}
            <a
              href="/NBGTZ_Portfolio.pdf"
              className="rounded bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90"
              download
            >
              Download PDF
            </a>
            <a
              href="mailto:bogenschutz.nicolas@hotmail.fr"
              className="rounded border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Contact me
            </a>
            <a
              href="https://www.instagram.com/nbgtz_/"
              target="_blank"
              className="rounded border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
