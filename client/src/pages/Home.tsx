import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold">
          CarbonMirror AI
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Understand, Track and Reduce
          Your Carbon Footprint.
        </p>

        <button
          className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg"
        >
          Get Started
        </button>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">
            Carbon Calculator
          </h3>

          <p className="mt-2">
            Calculate your daily emissions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">
            AI Coach
          </h3>

          <p className="mt-2">
            Personalized sustainability advice.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">
            Future Prediction
          </h3>

          <p className="mt-2">
            Forecast your carbon impact.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
