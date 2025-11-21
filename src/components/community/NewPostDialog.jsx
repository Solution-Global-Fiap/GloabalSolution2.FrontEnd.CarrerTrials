import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export default function NewPostDialog({ open, onOpenChange, onSubmit }) {
    const [content, setContent] = useState("");
    const [tagInput, setTagInput] = useState("");
    const [tags, setTags] = useState([]);

    const handleAddTag = () => {
        const tag = tagInput.trim().toLowerCase().replace(/^#/, "");
        if (tag && !tags.includes(tag)) {
            setTags([...tags, tag]);
            setTagInput("");
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const handleSubmit = () => {
        if (!content.trim()) return;
        onSubmit(content, tags);
        setContent("");
        setTags([]);
        setTagInput("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddTag();
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Nova Publicação</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                    <Textarea
                        placeholder="Compartilhe algo com a comunidade..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={6}
                        className="resize-none"
                    />

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Tags (opcional)</label>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Adicionar tag (ex: react, motivação)"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <Button type="button" variant="outline" onClick={handleAddTag}>
                                Adicionar
                            </Button>
                        </div>

                        {tags.length > 0 && (
                            <div className="flex gap-2 flex-wrap pt-2">
                                {tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="gap-1 pr-1">
                                        #{tag}
                                        <Button
                                            onClick={() => handleRemoveTag(tag)}
                                            className="ml-1 hover:text-destructive"
                                        >
                                            <X className="h-3 w-3" />
                                        </Button>
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end gap-2">
                        <Button onClick={handleSubmit} disabled={!content.trim()}>
                            Publicar
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}