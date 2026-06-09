import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold">
          Sustainability Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3>Total Emission</h3>

            <p className="text-3xl font-bold mt-3">
              217.8 kg
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3>Sustainability Score</h3>

            <p className="text-3xl font-bold mt-3">
              40
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3>Eco Rank</h3>

            <p className="text-3xl font-bold mt-3">
              Silver
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mt-8">
          <h2 className="font-bold text-2xl">
            AI Insights
          </h2>

          <p className="mt-4">
            Reduce transport emissions by
            using public transport twice a week.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
