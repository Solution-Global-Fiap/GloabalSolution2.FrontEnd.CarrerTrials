import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function NewCommentDialog({ postId, open, onOpenChange, onSubmit }) {
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        if (!content.trim()) return;
        onSubmit(content, postId);
        setContent("");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Novo Comentário</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                    <Textarea
                        placeholder="Compartilhe algo com a comunidade..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={6}
                        className="resize-none"
                    />

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