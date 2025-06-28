import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    skillsHave: "",
    skillsWant: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/register", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-600 flex justify-center items-center text-white animate-fade-in">
  <form onSubmit={handleSubmit} className="bg-white text-black shadow-xl p-8 rounded-xl max-w-xl w-full animate-slide-up">
    <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">📝 Register</h2>
    {error && <p className="text-red-500 mb-3">{error}</p>}

    {["name", "email", "password", "skillsHave", "skillsWant"].map((field, i) => (
      <input key={i} name={field} placeholder={field.replace(/([A-Z])/g, ' $1')} onChange={handleChange}
        className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        type={field === "password" ? "password" : "text"}
      />
    ))}

    <button
      type="submit"
      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
    >Sign Up</button>
  </form>
</div>


  );
}
