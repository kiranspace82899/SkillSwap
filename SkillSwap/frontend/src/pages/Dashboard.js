import { useEffect, useState } from "react";
import API from "../utils/api";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [matches, setMatches] = useState([]);
  const [sentTo, setSentTo] = useState(null);

  useEffect(() => {
    API.get("/users/profile")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));

    API.get("/users/match")
      .then((res) => setMatches(res.data))
      .catch(() => setMatches([]));
  }, []);

  const sendRequest = async (toUserId) => {
    try {
      await API.post("/requests/send", { toUserId });
      setSentTo(toUserId);
    } catch (err) {
      alert("Request failed");
    }
  };

  if (!user) {
    return <p className="text-center mt-10 text-gray-700">Loading or not authorized...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-white to-[#e3f2fd] p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/80 border border-gray-200 shadow-2xl rounded-3xl p-8 animate-slide-up">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 drop-shadow mb-2 animate-fade-in">👋 Hello, {user.name}!</h2>
        <p className="text-center text-gray-700 mb-6 animate-fade-in">Welcome to your SkillSwap Dashboard</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mb-10">
          <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 p-4 rounded-xl shadow-inner border animate-slide-up">
            <h4 className="text-md font-bold text-blue-700">📧 Email</h4>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 via-white to-green-50 p-4 rounded-xl shadow-inner border animate-slide-up">
            <h4 className="text-md font-bold text-green-700">🎓 Skills You Have</h4>
            <p className="text-gray-600">{user.skillsHave}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 via-white to-purple-50 p-4 rounded-xl shadow-inner border animate-slide-up">
            <h4 className="text-md font-bold text-purple-700">🎯 Skills You Want</h4>
            <p className="text-gray-600">{user.skillsWant}</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center text-green-800 mb-4 animate-zoom-in">🔍 Matched Users</h3>

        <div className="grid gap-6">
          {matches.length === 0 ? (
            <p className="text-center text-gray-600">No matches found yet.</p>
          ) : (
            matches.map((match, index) => (
              <div
                key={match.id}
                className="p-5 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-bold text-gray-800">{match.name}</h4>
                <p className="text-sm text-gray-600 mt-1">🎓 Skills Have: {match.skillsHave}</p>
                <p className="text-sm text-gray-600">🎯 Skills Want: {match.skillsWant}</p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    onClick={() => sendRequest(match.id)}
                    className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition"
                  >
                    Send Request
                  </button>

                  {sentTo === match.id && (
                    <>
                      <span className="text-green-700 font-medium">✅ Request Sent</span>
                      <a
                        href={`/chat/${match.id}`}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition"
                      >
                        Chat 💬
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
