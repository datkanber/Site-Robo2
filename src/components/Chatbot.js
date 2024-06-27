import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaRobot, FaArrowDown } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isHidden) {
      scrollToBottom();
    }
  }, [messages, isHidden]);

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

  const toggleChatbot = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div className={`chatbot-container ${isHidden ? 'hidden' : ''}`}>
        <div className="chatbot-header" onClick={toggleChatbot}>
          <span>AI Chatbot</span>
          <span className="chatbot-minimize-icon">
            <FaArrowDown />
          </span>
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
      {isHidden && (
        <div className="chatbot-toggle-icon" onClick={toggleChatbot}>
          <FaRobot size={40} />
          <span className="chatbot-icon-text">CHATBOT</span>
          <span className="chatbot-icon-text">chat me</span>
        </div>
      )}
    </>
  );
};

export default Chatbot;
