import { Activity } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Bot } from "lucide-react";
import { Card } from "../ui/card";

export default function TypingIndicator({isTyping}) {
    return (
        <Activity mode={isTyping ? "visible" : "hidden"}>
            <div className="flex gap-3 animate-in fade-in duration-300">
                <Avatar className="h-12 w-12 shrink-0">
                    <AvatarFallback className="bg-muted text-foreground">
                        <Bot className="h-6 w-6" />
                    </AvatarFallback>
                </Avatar>
                <Card className="px-4 py-4 bg-accent rounded-2xl flex justify-center">
                    <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </Activity>
    );
}