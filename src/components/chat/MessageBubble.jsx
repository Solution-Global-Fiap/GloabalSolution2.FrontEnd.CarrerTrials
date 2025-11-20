import { Card } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { User, Bot } from "lucide-react";

export default function MessageBubble({ message, index }) {
    const isUser = message.sender === "user";

    return (
        <div
            className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""} animate-in fade-in duration-300`}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <Avatar className="h-12 w-12 shrink-0">
                <AvatarFallback
                    className={isUser ? "bg-primary text-(--text-inverted)" : "bg-muted text-foreground"}
                >
                    {isUser ? <User /> : <Bot />}
                </AvatarFallback>
            </Avatar>

            <div className="flex-1 max-w-[80%]">
                <Card
                    className={`px-4 py-3 rounded-xl border-0 shadow-sm 
                        ${isUser ? "bg-primary text-primary-foreground ml-auto" : "bg-accent text-accent-foreground"}
                    `}
                >
                    <p className={`text-md font-semibold whitespace-pre-wrap leading-relaxed ${isUser ? "text-(--text-inverted)" : "text-text"}`}>
                        {message.content}
                    </p>
                </Card>

                <p className="text-xs text-muted-foreground mt-1 px-2">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
            </div>
        </div>
    );
}