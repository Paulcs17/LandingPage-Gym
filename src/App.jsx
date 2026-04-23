export default function App() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$19.990",
      description: "Ideal for getting started with access to machines, cardio area, and an initial assessment.",
      features: ["Unlimited access", "Cardio zone", "Starter routine", "General schedule"],
    },
    {
      name: "Pro Plan",
      price: "$29.990",
      description: "The most chosen option for training with guidance and group classes.",
      features: ["Everything in Basic", "Group classes", "Monthly follow-up", "Functional area"],
      featured: true,
    },
    {
      name: "Elite Plan",
      price: "$44.990",
      description: "Designed for more serious results with personalized guidance.",
      features: ["Everything in Pro", "Personal coach", "Basic nutrition plan", "Priority access"],
    },
  ];

  const benefits = [
    { title: "Smart Training", text: "Workouts designed for beginners and advanced members with a focus on real progress.", icon: "🏋️" },
    { title: "Certified Coaches", text: "A trained team ready to help you improve technique, consistency, and results.", icon: "🔥" },
    { title: "High-Energy Classes", text: "Spinning, functional, core, and group sessions to keep motivation high.", icon: "⚡" },
    { title: "Premium Space", text: "A modern, clean environment designed for comfortable training at any time.", icon: "💪" },
  ];

  const testimonials = [
    { name: "Camila R.", quote: "I joined just to try one month and ended up completely changing my routine. The atmosphere is highly motivating." },
    { name: "Javier P.", quote: "The best part was the staff’s support. They guided me from zero, and now I train with much more confidence." },
    { name: "Valentina M.", quote: "The landing page conveys exactly what you feel when you arrive: energy, order, and the desire to improve." },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-lime-400" />
            <div>
              <p className="text-lg font-bold tracking-wide">IRON TEMPLE</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Fitness Club</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#benefits" className="transition hover:text-lime-400">Benefits</a>
            <a href="#plans" className="transition hover:text-lime-400">Plans</a>
            <a href="#gallery" className="transition hover:text-lime-400">Gallery</a>
            <a href="#contact" className="transition hover:text-lime-400">Contact</a>
          </nav>

          <a href="#plans" className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
            Join Today
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.18),transparent_25%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_20%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-300">
              Transform your body. Elevate your discipline.
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              The gym that turns <span className="text-lime-400">motivation</span> into results.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              A landing page designed to sell a premium fitness experience: modern, intense, and focused on making the user want to sign up from the very first glance.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#plans" className="rounded-full bg-lime-400 px-7 py-4 text-center text-sm font-bold text-black transition hover:scale-[1.02]">
                View Memberships
              </a>
              <a href="#gallery" className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-lime-400 hover:text-lime-400">
                Explore Facilities
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-lime-400">+2.5k</p>
                <p className="mt-1 text-sm text-white/60">Active Members</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-lime-400">24/7</p>
                <p className="mt-1 text-sm text-white/60">Access Available</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-lime-400">+18</p>
                <p className="mt-1 text-sm text-white/60">Weekly Classes</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80" alt="Modern gym" className="h-72 w-full rounded-[2rem] object-cover shadow-2xl shadow-lime-500/10" />
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80" alt="Functional training" className="mt-10 h-72 w-full rounded-[2rem] object-cover shadow-2xl shadow-white/10" />
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80" alt="Gym weights" className="-mt-6 h-60 w-full rounded-[2rem] object-cover shadow-2xl shadow-white/10" />
              <div className="flex h-60 flex-col justify-between rounded-[2rem] border border-lime-400/20 bg-lime-400/10 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-lime-300">Premium experience</p>
                  <h3 className="mt-3 text-2xl font-bold">More energy, better branding, more conversion.</h3>
                </div>
                <p className="text-sm text-white/70">
                  Ideal to showcase in your portfolio that you can also build attractive commercial pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">Why choose us</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything a great fitness landing page should communicate</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-lime-400/30">
              <div className="mb-4 text-3xl">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">Plans</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Memberships for every level of commitment</h2>
          </div>
          <p className="max-w-xl text-white/65">
            A section designed to turn visitors into clients by highlighting pricing, perceived value, and clear benefits.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-[2rem] border p-8 ${plan.featured ? "border-lime-400 bg-lime-400 text-black shadow-2xl shadow-lime-500/20" : "border-white/10 bg-white/5 text-white"}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                {plan.featured && <span className="rounded-full bg-black px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-lime-400">Popular</span>}
              </div>
              <p className={`mt-4 text-4xl font-black ${plan.featured ? "text-black" : "text-lime-400"}`}>{plan.price}</p>
              <p className={`mt-4 text-sm leading-7 ${plan.featured ? "text-black/70" : "text-white/65"}`}>{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${plan.featured ? "bg-black text-lime-400" : "bg-lime-400 text-black"}`}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-bold transition ${plan.featured ? "bg-black text-white hover:bg-neutral-900" : "bg-lime-400 text-black hover:scale-[1.02]"}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">Gallery</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A visual space that sells experience and style</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80" alt="Strength training" className="h-72 w-full rounded-[2rem] object-cover" />
          <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80" alt="Woman training at the gym" className="h-72 w-full rounded-[2rem] object-cover" />
          <img src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1200&q=80" alt="Premium training area" className="h-72 w-full rounded-[2rem] object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">Testimonials</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What people feel when a brand presents itself well</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-neutral-900/70 p-6">
                <p className="text-sm leading-7 text-white/70">“{item.quote}”</p>
                <p className="mt-6 font-semibold text-lime-400">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-lime-400/20 bg-lime-400/10 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">Your new routine starts today</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Book your visit and experience Iron Temple.</h2>
            <p className="mt-4 max-w-lg text-white/70">
              This section can be used as a strong commercial closing in your portfolio to show that you also know how to build pages focused on conversion.
            </p>
          </div>

          <form className="grid gap-4 rounded-[1.75rem] bg-black/20 p-6">
            <input type="text" placeholder="Full name" className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400" />
            <input type="email" placeholder="Email address" className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400" />
            <input type="tel" placeholder="Phone number" className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400" />
            <button className="rounded-full bg-black px-5 py-3 text-sm font-bold text-lime-400 transition hover:bg-neutral-900">
              Request Information
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}