import { useState, useRef, useEffect } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

const AIChat = ({ initialMessage, onSendMessage }) => {
    const [messages, setMessages] = useState([
        {
            id: "1",
            content: initialMessage || "Olá! Como posso ajudar você hoje?",
            sender: "ai",
            timestamp: new Date(),
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isTyping]);

    const handleSend = async (text) => {
        if (!text || isTyping) return;

        const userMessage = {
            id: crypto.randomUUID(),
            content: text,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsTyping(true);

        try {
            const response = await onSendMessage?.(text);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            const aiMessage = {
                id: crypto.randomUUID(),
                content: response || "Entendi! Deixe-me analisar isso para você.",
                sender: "ai",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, aiMessage]);
        } 
        catch (error) {
            console.error("Error sending message:", error);
        } 
        finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-background rounded-xl overflow-hidden">
            <MessageList endRef={messagesEndRef} isTyping={isTyping} messages={messages}/>
            <ChatInput disabled={isTyping} onSend={handleSend} />
        </div>
    );
};

export default AIChat;