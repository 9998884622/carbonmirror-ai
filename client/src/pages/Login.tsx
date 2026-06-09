import { useState } from "react";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded shadow">

      <h1 className="text-3xl font-bold">
        Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="border p-3 w-full mt-4"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-3 w-full mt-4"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <button
        className="bg-green-600 text-white w-full mt-4 p-3 rounded"
      >
        Login
      </button>

    </div>
  );
}

export default Login;
