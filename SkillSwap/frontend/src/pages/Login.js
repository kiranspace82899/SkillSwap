import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-gray-900 flex justify-center items-center animate-fade-in">
  <form onSubmit={handleSubmit} className="bg-white shadow-2xl p-8 rounded-xl max-w-md w-full animate-slide-up">
    <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">🔐 Login</h2>
    {error && <p className="text-red-500 mb-3">{error}</p>}

    <input name="email" placeholder="Email" onChange={handleChange}
      className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
    <input type="password" name="password" placeholder="Password" onChange={handleChange}
      className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
    >Login</button>
  </form>
</div>



  );
}
