import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Calculator() {
  const [result, setResult] =
    useState<number | null>(null);

  const calculate = () => {
    setResult(217.8);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold">
          Carbon Calculator
        </h1>

        <div className="grid gap-4 mt-8">

          <input
            type="number"
            placeholder="Transport KM"
            className="border p-3 rounded"
          />

          <input
            type="number"
            placeholder="Electricity Units"
            className="border p-3 rounded"
          />

          <input
            type="number"
            placeholder="Water Usage"
            className="border p-3 rounded"
          />

          <input
            type="number"
            placeholder="Waste (kg)"
            className="border p-3 rounded"
          />

          <select
            className="border p-3 rounded"
          >
            <option>
              Vegetarian
            </option>

            <option>
              Non-Vegetarian
            </option>

            <option>
              Vegan
            </option>
          </select>

          <button
            onClick={calculate}
            className="bg-green-600 text-white py-3 rounded"
          >
            Calculate Footprint
          </button>

          {result && (
            <div className="bg-green-100 p-6 rounded">
              Estimated Carbon Footprint:
              <strong>
                {" "}
                {result} kg CO₂
              </strong>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Calculator;
