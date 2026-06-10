import { Leaf, Zap, Clock, BarChart2 } from "lucide-react";

function Home() {
  return (
    <>
      <header className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-24 rounded-lg">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Understand. Reduce. Transform.
            </h1>

            <p className="mt-6 text-lg text-green-100 max-w-2xl">
              CarbonMirror AI helps you measure your footprint, get personalized guidance,
              and predict the impact of your choices — all in one clean, privacy-first dashboard.
            </p>

            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a
                href="/calculator"
                className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-md"
              >
                Calculate My Footprint
              </a>

              <a
                href="/dashboard"
                className="inline-block bg-white/20 text-white px-6 py-3 rounded-lg font-medium"
              >
                View Dashboard
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white/90 p-6 rounded-xl shadow-lg text-gray-800">
              <div className="flex items-center gap-3">
                <Leaf className="w-6 h-6 text-green-600" />
                <div>
                  <div className="text-sm text-gray-500">Estimated annual savings</div>
                  <div className="text-2xl font-bold">1.2 tCO2e</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm text-gray-500">Today</div>
                  <div className="font-semibold">3.6 kg</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500">Weekly</div>
                  <div className="font-semibold">25 kg</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500">Monthly</div>
                  <div className="font-semibold">110 kg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-16">
        <section className="container">
          <h2 className="text-3xl font-bold text-center">What we offer</h2>
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            Tools and insights to help individuals and teams make sustainable decisions.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-lg">Carbon Calculator</h3>
              </div>
              <p className="mt-3 text-gray-600">Accurate, simple inputs to estimate emissions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <BarChart2 className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-lg">AI Coach</h3>
              </div>
              <p className="mt-3 text-gray-600">Personalized suggestions to reduce impact over time.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-lg">Predictions</h3>
              </div>
              <p className="mt-3 text-gray-600">Forecasts to see how choices change your trajectory.</p>
            </div>
          </div>
        </section>

        <section className="container mt-12">
          <h2 className="text-2xl font-bold text-center">How it works</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl">1</div>
              <h4 className="font-semibold mt-2">Tell us about your activities</h4>
              <p className="mt-2 text-sm text-gray-600">Quick forms capture the things that matter most.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl">2</div>
              <h4 className="font-semibold mt-2">Get tailored recommendations</h4>
              <p className="mt-2 text-sm text-gray-600">AI-guided tips that fit your lifestyle and budget.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl">3</div>
              <h4 className="font-semibold mt-2">Track progress</h4>
              <p className="mt-2 text-sm text-gray-600">See real reductions and predicted outcomes over time.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
