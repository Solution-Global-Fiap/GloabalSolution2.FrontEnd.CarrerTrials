import { useState, useRef, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

export default function ChatInput({ onSend, disabled }) {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (!disabled && inputRef.current) {
            requestAnimationFrame(() => {
                inputRef.current?.focus();
            });
        }
    }, [disabled, value])

    const send = () => {
        const text = value.trim();
        if (!text) return;
        onSend(text);
        setValue("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
        }
    };

    return (
        <div className="border-t border-border p-4 bg-card">
            <div className="flex gap-2">
                <Input
                    ref={inputRef}
                    value={value}
                    placeholder="Type your message..."
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={disabled}
                />

                <Button
                    onClick={send}
                    disabled={disabled || !value.trim()}
                    size="icon"
                    className="bg-primary hover:bg-primary/90"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    <Send className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}