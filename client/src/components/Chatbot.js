import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
        { inputs: input },
        {
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data && response.data[0] && response.data[0].generated_text) {
        const botMessage = { text: response.data[0].generated_text, sender: "bot" };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } else {
        const botMessage = { text: "I'm sorry, I couldn't process your request.", sender: "bot" };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error("Error fetching response from Hugging Face API:", error);
      const botMessage = { text: "I'm sorry, I couldn't process your request.", sender: "bot" };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend(e);
    }
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <span>AI Chatbot</span>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chatbot-message ${message.sender}`}>
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="chatbot-input" onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
