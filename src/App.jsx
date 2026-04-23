import { Dumbbell, Flame, Users, Clock, Check } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <h1 className="text-xl font-bold">Iron Temple</h1>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#">Benefits</a>
          <a href="#">Plans</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold">
          Join Now
        </button>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Transform your body. <br /> Elevate your discipline.
        </h2>
        <p className="text-white/60 mt-6 max-w-xl mx-auto">
          The gym that turns motivation into real results.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            View Memberships
          </button>
          <button className="border border-white/20 px-6 py-3 rounded-xl">
            Explore Facilities
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-xl mx-auto text-center">
          <div>
            <p className="text-2xl font-bold">+500</p>
            <p className="text-white/50 text-sm">Active Members</p>
          </div>
          <div>
            <p className="text-2xl font-bold">24/7</p>
            <p className="text-white/50 text-sm">Access Available</p>
          </div>
          <div>
            <p className="text-2xl font-bold">+40</p>
            <p className="text-white/50 text-sm">Weekly Classes</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="border border-white/10 p-6 rounded-2xl">
            <Flame />
            <h4 className="mt-4 font-semibold">Smart Training</h4>
            <p className="text-white/60 text-sm mt-2">
              Optimized routines for real progress.
            </p>
          </div>

          <div className="border border-white/10 p-6 rounded-2xl">
            <Users />
            <h4 className="mt-4 font-semibold">Certified Coaches</h4>
            <p className="text-white/60 text-sm mt-2">
              Professionals guiding every step.
            </p>
          </div>

          <div className="border border-white/10 p-6 rounded-2xl">
            <Clock />
            <h4 className="mt-4 font-semibold">Flexible Schedule</h4>
            <p className="text-white/60 text-sm mt-2">
              Train anytime, no excuses.
            </p>
          </div>

          <div className="border border-white/10 p-6 rounded-2xl">
            <Dumbbell />
            <h4 className="mt-4 font-semibold">Premium Space</h4>
            <p className="text-white/60 text-sm mt-2">
              Modern equipment and atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="px-6 py-20 bg-white text-black">
        <h3 className="text-3xl font-bold text-center mb-12">
          Membership Plans
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* BASIC */}
          <div className="border p-6 rounded-2xl">
            <h4 className="text-xl font-bold">Basic</h4>
            <p className="text-3xl font-bold mt-4">$20/mo</p>

            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex gap-2"><Check /> Gym Access</li>
              <li className="flex gap-2"><Check /> Locker Room</li>
              <li className="flex gap-2"><Check /> Basic Classes</li>
            </ul>

            <button className="mt-6 w-full bg-black text-white py-2 rounded-xl">
              Choose Plan
            </button>
          </div>

          {/* PRO */}
          <div className="border-2 border-black p-6 rounded-2xl">
            <h4 className="text-xl font-bold">Pro</h4>
            <p className="text-3xl font-bold mt-4">$35/mo</p>

            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex gap-2"><Check /> Everything in Basic</li>
              <li className="flex gap-2"><Check /> Personal Trainer</li>
              <li className="flex gap-2"><Check /> Nutrition Plan</li>
            </ul>

            <button className="mt-6 w-full bg-black text-white py-2 rounded-xl">
              Choose Plan
            </button>
          </div>

          {/* ELITE */}
          <div className="border p-6 rounded-2xl">
            <h4 className="text-xl font-bold">Elite</h4>
            <p className="text-3xl font-bold mt-4">$50/mo</p>

            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex gap-2"><Check /> Everything in Pro</li>
              <li className="flex gap-2"><Check /> VIP Area</li>
              <li className="flex gap-2"><Check /> Priority Support</li>
            </ul>

            <button className="mt-6 w-full bg-black text-white py-2 rounded-xl">
              Choose Plan
            </button>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">Gallery</h3>
        <p className="text-white/60 mb-12">
          A space designed for performance and aesthetics.
        </p>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <img src="https://source.unsplash.com/400x400/?gym" alt="Gym" className="rounded-xl" />
          <img src="https://source.unsplash.com/400x400/?fitness" alt="Fitness" className="rounded-xl" />
          <img src="https://source.unsplash.com/400x400/?workout" alt="Workout" className="rounded-xl" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Your new routine starts today
        </h3>
        <p className="text-white/60 mb-10">
          Book your visit and experience Iron Temple.
        </p>

        <div className="max-w-md mx-auto space-y-4">
          <input placeholder="Full Name" className="w-full p-3 rounded-xl bg-white/10 border border-white/20" />
          <input placeholder="Email" className="w-full p-3 rounded-xl bg-white/10 border border-white/20" />
          <input placeholder="Phone" className="w-full p-3 rounded-xl bg-white/10 border border-white/20" />

          <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
            Request Info
          </button>
        </div>
      </section>

    </div>
  );
}

export default App;