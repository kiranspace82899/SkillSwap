import { useEffect, useState, useCallback } from "react";
import API from "../utils/api";
import { useParams } from "react-router-dom";

export default function ChatPage() {
  const { partnerId } = useParams();
  const [partner, setPartner] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");

  const fetchMessages = useCallback(async () => {
    try {
      const res = await API.get(`/chats/${partnerId}`);
      setMessages(res.data);
    } catch {
      setMessages([]);
    }
  }, [partnerId]);

  useEffect(() => {
    API.get("/users")
      .then((res) => {
        const match = res.data.find((u) => u.id === parseInt(partnerId));
        setPartner(match?.name || "User");
      });

    fetchMessages();
    const interval = setInterval(fetchMessages, 2000);
    return () => clearInterval(interval);
  }, [partnerId, fetchMessages]);

  const sendMessage = async () => {
    if (!newMsg.trim()) return;
    try {
      await API.post("/chats/send", {
        to: partnerId,
        message: newMsg,
      });
      setNewMsg("");
      fetchMessages();
    } catch {
      alert("Failed to send");
    }
  };

  useEffect(() => {
    const el = document.querySelector(".chat-scroll");
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#e0f7fa] to-[#fce4ec] p-6 flex flex-col items-center animate-fade-in">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-4 text-lg font-semibold shadow-md">
          💬 Chat with {partner}
        </div>

        <div className="h-[400px] overflow-y-auto p-4 space-y-3 chat-scroll bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === Number(partnerId) ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow-md animate-slide-up ${
                  msg.from === Number(partnerId)
                    ? "bg-white text-gray-800"
                    : "bg-green-100 text-gray-900"
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t bg-white px-4 py-3">
          <input
            type="text"
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={sendMessage}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition shadow"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
