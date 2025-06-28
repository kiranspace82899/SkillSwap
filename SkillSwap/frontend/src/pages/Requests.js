import { useEffect, useState } from "react";
import API from "../utils/api";

export default function Requests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    API.get("/requests/received").then((res) => setRequests(res.data));
  }, []);

  const respond = async (id, status) => {
    try {
      await API.patch(`/requests/respond/${id}`, { status });
      setRequests((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status } : r))
      );
    } catch {
      alert("Failed to update request");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-tr from-[#fff] to-[#f0f0f0]">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 text-center text-green-700">📥 Incoming Requests</h2>

        {requests.length === 0 ? (
          <p className="text-center text-gray-500">No requests yet.</p>
        ) : (
          <ul className="space-y-4">
            {requests.map((req) => (
              <li key={req.id} className="p-4 border rounded-xl shadow-sm bg-gray-50">
                <p><strong>{req.fromUser.name}</strong> wants to swap skills with you.</p>
                <p>🎓 Has: {req.fromUser.skillsHave}</p>
                <p>🎯 Wants: {req.fromUser.skillsWant}</p>
                <p className="text-sm text-gray-600">Status: <strong>{req.status}</strong></p>

                {req.status === "pending" && (
                  <div className="flex gap-4 mt-3">
                    <button
                      onClick={() => respond(req.id, "accepted")}
                      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => respond(req.id, "rejected")}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
