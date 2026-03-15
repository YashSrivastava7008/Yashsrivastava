"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User } from "lucide-react";
import styles from "./AIChatbot.module.css";

const SYSTEM_PROMPT = `You are Yash's AI assistant on his portfolio website. You help visitors learn about Yash Srivastava, a UI/UX Designer based in Bangalore, India.

About Yash:
- 2+ years of experience in UI/UX design
- 5+ happy clients
- 10+ projects completed
- Skills: Figma, Adobe XD, UI Design, UX Research, Prototyping, Mobile App Design, Web Design, Branding

Projects:
- ADT Solution: Global EOR, Payroll & HR Solutions web platform
- Myrik: Ride booking & grocery delivery mobile app
- Bhaiyaa Super App: Hyperlocal delivery app for India
- Futuristic Guitar: Product design for smart guitar interface
- Wearables Tech: Smart pet wearable technology
- Dehradun Zoo: UI/UX design for zoo website

Services:
- UI/UX Design
- Mobile App Design
- Web Design
- Brand Identity
- Product Design
- User Research

Contact: Yashsrivastava7008@gmail.com
Location: Bangalore, India

Be friendly, helpful, and concise. Guide visitors to explore Yash's work or contact him for projects. Keep responses brief (2-3 sentences max).`;

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi! 👋 I'm Yash's AI assistant. Ask me about his work, skills, or services!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userMessage,
                    history: messages
                }),
            });

            const data = await response.json();

            if (data.error) {
                setMessages(prev => [...prev, {
                    role: "assistant",
                    content: "Sorry, I'm having trouble responding. Please try again!"
                }]);
            } else {
                setMessages(prev => [...prev, {
                    role: "assistant",
                    content: data.response
                }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "Oops! Something went wrong. Please try again."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                className={styles.floatingBtn}
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
            >
                <Bot size={24} />
                <span className={styles.badge}>AI</span>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.chatWindow}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className={styles.header}>
                            <div className={styles.headerInfo}>
                                <Bot size={20} />
                                <div>
                                    <h4>Yash's AI Assistant</h4>
                                    <span>Powered by Gemini</span>
                                </div>
                            </div>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className={styles.messages}>
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`${styles.message} ${styles[msg.role]}`}
                                >
                                    <div className={styles.messageIcon}>
                                        {msg.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
                                    </div>
                                    <p>{msg.content}</p>
                                </div>
                            ))}
                            {isLoading && (
                                <div className={`${styles.message} ${styles.assistant}`}>
                                    <div className={styles.messageIcon}>
                                        <Bot size={16} />
                                    </div>
                                    <div className={styles.typing}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form className={styles.inputArea} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about Yash's work..."
                                disabled={isLoading}
                            />
                            <button type="submit" disabled={isLoading || !input.trim()}>
                                {isLoading ? <Loader2 size={18} className={styles.spinner} /> : <Send size={18} />}
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
