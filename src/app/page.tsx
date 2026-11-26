const features = [
  {
    title: "Fast by default",
    description:
      "Built on the App Router with server components, so pages load quickly without extra setup.",
  },
  {
    title: "Simple to extend",
    description:
      "A clean starting point you can build on as new pages and features are added.",
  },
  {
    title: "Ready to ship",
    description:
      "Styled with Tailwind CSS and ready to deploy as soon as the content is in place.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-1 flex-col items-center">
        <section className="flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-28 text-center sm:py-36">
          <span className="rounded-full bg-black/[.06] px-4 py-1 text-sm font-medium text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300">
            Landingpage v0.1
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Welcome to kautrykaucuba
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A straightforward landing page to introduce what we&apos;re building
            and invite people to get in touch.
          </p>
          <div className="mt-2 flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href="#contact"
            >
              Get in touch
            </a>
            <a
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              href="#features"
            >
              Learn more
            </a>
          </div>
        </section>

        <section
          id="features"
          className="grid w-full max-w-5xl grid-cols-1 gap-8 border-t border-black/[.08] px-6 py-20 dark:border-white/[.145] sm:grid-cols-3"
        >
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
                {feature.title}
              </h2>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

        <section
          id="contact"
          className="flex w-full flex-col items-center gap-4 border-t border-black/[.08] px-6 py-20 text-center dark:border-white/[.145]"
        >
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Want to know more?
          </h2>
          <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Reach out and we&apos;ll get back to you.
          </p>
          <a
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="mailto:hello@kautrykaucuba.com"
          >
            hello@kautrykaucuba.com
          </a>
        </section>
      </main>
    </div>
  );
}
