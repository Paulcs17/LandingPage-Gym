export default function App() {
  const plans = [
    {
      name: "Plan Básico",
      price: "$19.990",
      description: "Ideal para comenzar con acceso a máquinas, zona cardio y evaluación inicial.",
      features: ["Acceso ilimitado", "Zona cardio", "Rutina inicial", "Horario general"],
    },
    {
      name: "Plan Pro",
      price: "$29.990",
      description: "La opción más elegida para entrenar con seguimiento y clases dirigidas.",
      features: ["Todo lo del Básico", "Clases grupales", "Seguimiento mensual", "Área funcional"],
      featured: true,
    },
    {
      name: "Plan Elite",
      price: "$44.990",
      description: "Pensado para resultados más serios con asesoría personalizada.",
      features: ["Todo lo del Pro", "Coach personalizado", "Plan nutricional base", "Acceso preferente"],
    },
  ];

  const benefits = [
    { title: "Entrenamiento inteligente", text: "Rutinas diseñadas para principiantes y avanzados con enfoque en progreso real.", icon: "🏋️" },
    { title: "Entrenadores certificados", text: "Un equipo preparado para ayudarte a mejorar técnica, constancia y resultados.", icon: "🔥" },
    { title: "Clases energéticas", text: "Spinning, funcional, core y sesiones grupales para mantener la motivación alta.", icon: "⚡" },
    { title: "Espacio premium", text: "Ambiente moderno, limpio y diseñado para entrenar cómodo en cualquier horario.", icon: "💪" },
  ];

  const testimonials = [
    { name: "Camila R.", quote: "Entré por probar un mes y terminé cambiando por completo mi rutina. El ambiente motiva mucho." },
    { name: "Javier P.", quote: "Lo mejor fue la atención del equipo. Me guiaron desde cero y hoy entreno con mucha más confianza." },
    { name: "Valentina M.", quote: "La landing transmite justo lo que uno siente al llegar: energía, orden y ganas de mejorar." },
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
            <a href="#benefits" className="transition hover:text-lime-400">Beneficios</a>
            <a href="#plans" className="transition hover:text-lime-400">Planes</a>
            <a href="#gallery" className="transition hover:text-lime-400">Galería</a>
            <a href="#contact" className="transition hover:text-lime-400">Contacto</a>
          </nav>

          <a href="#plans" className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
            Únete hoy
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.18),transparent_25%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_20%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-300">
              Transforma tu cuerpo. Eleva tu disciplina.
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              El gimnasio que convierte <span className="text-lime-400">motivación</span> en resultados.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Una landing pensada para vender una experiencia fitness premium: moderna, intensa y enfocada en que el usuario quiera inscribirse desde el primer vistazo.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#plans" className="rounded-full bg-lime-400 px-7 py-4 text-center text-sm font-bold text-black transition hover:scale-[1.02]">
                Ver membresías
              </a>
              <a href="#gallery" className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-lime-400 hover:text-lime-400">
                Explorar instalaciones
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-lime-400">+2.5k</p>
                <p className="mt-1 text-sm text-white/60">Socios activos</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-lime-400">24/7</p>
                <p className="mt-1 text-sm text-white/60">Acceso disponible</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-lime-400">+18</p>
                <p className="mt-1 text-sm text-white/60">Clases semanales</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80" alt="Gimnasio moderno" className="h-72 w-full rounded-[2rem] object-cover shadow-2xl shadow-lime-500/10" />
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80" alt="Entrenamiento funcional" className="mt-10 h-72 w-full rounded-[2rem] object-cover shadow-2xl shadow-white/10" />
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80" alt="Pesas en gimnasio" className="-mt-6 h-60 w-full rounded-[2rem] object-cover shadow-2xl shadow-white/10" />
              <div className="flex h-60 flex-col justify-between rounded-[2rem] border border-lime-400/20 bg-lime-400/10 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-lime-300">Experiencia premium</p>
                  <h3 className="mt-3 text-2xl font-bold">Más energía, mejor branding, más conversión.</h3>
                </div>
                <p className="text-sm text-white/70">
                  Ideal para mostrar en tu portafolio que también puedes crear páginas comerciales atractivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">Por qué elegirnos</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Todo lo que una buena landing fitness debería transmitir</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">Planes</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Membresías para cada nivel de compromiso</h2>
          </div>
          <p className="max-w-xl text-white/65">
            Una sección pensada para convertir visitas en clientes, destacando precios, valor percibido y beneficios claros.
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
                Elegir plan
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">Galería</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Un espacio visual que vende experiencia y estilo</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80" alt="Entrenamiento de fuerza" className="h-72 w-full rounded-[2rem] object-cover" />
          <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80" alt="Mujer entrenando en gimnasio" className="h-72 w-full rounded-[2rem] object-cover" />
          <img src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1200&q=80" alt="Zona de entrenamiento premium" className="h-72 w-full rounded-[2rem] object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">Testimonios</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Lo que la gente siente cuando una marca se presenta bien</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">Tu nueva rutina empieza hoy</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Agenda tu visita y vive la experiencia Iron Temple.</h2>
            <p className="mt-4 max-w-lg text-white/70">
              Esta sección puede usarse como cierre comercial fuerte en tu portafolio para demostrar que también sabes construir páginas enfocadas en conversión.
            </p>
          </div>

          <form className="grid gap-4 rounded-[1.75rem] bg-black/20 p-6">
            <input type="text" placeholder="Nombre completo" className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400" />
            <input type="email" placeholder="Correo electrónico" className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400" />
            <input type="tel" placeholder="Teléfono" className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400" />
            <button className="rounded-full bg-black px-5 py-3 text-sm font-bold text-lime-400 transition hover:bg-neutral-900">
              Solicitar información
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
