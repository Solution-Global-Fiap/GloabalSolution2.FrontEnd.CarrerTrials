import MessageBubble from "./MessageBubble.jsx";
import TypingIndicator from "./TypingIndicator";

export default function MessageList({ messages, isTyping, endRef }) {
    return (
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, i) => (
                <MessageBubble key={msg.id} message={msg} index={i} />
            ))}

            <TypingIndicator visible={isTyping} />

            <div ref={endRef} />
        </div>
    );
}