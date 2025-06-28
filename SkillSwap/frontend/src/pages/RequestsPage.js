import { useEffect, useState } from "react";
import API from "../utils/api";

export default function RequestsPage() {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await API.get("/requests/incoming");
      setRequests(res.data);
    } catch {
      setRequests([]);
    }
  };

  const respond = async (id, action) => {
    try {
      await API.post("/requests/respond", { requestId: id, status: action });
      fetchRequests();
    } catch {
      alert("Failed to update request");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-6 animate-fade-in">
      <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-4">🔔 Incoming Swap Requests</h2>

        {requests.length === 0 ? (
          <p className="text-center text-gray-600">No pending requests.</p>
        ) : (
          <ul className="space-y-4">
            {requests.map((req) => (
              <li
                key={req.id}
                className="p-4 border rounded-lg shadow bg-gray-50 flex justify-between items-center"
              >
                <div>
                  <p className="font-bold text-lg">{req.fromUser.name}</p>
                  <p className="text-sm text-gray-600">🎓 {req.fromUser.skillsHave}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => respond(req.id, "accepted")}
                    className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => respond(req.id, "rejected")}
                    className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
