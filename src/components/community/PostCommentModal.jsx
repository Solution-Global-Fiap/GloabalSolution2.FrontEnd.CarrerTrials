import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import getUsers from "@/data/users";

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes} minutos atrás`;
    if (hours < 24) return `${hours} horas atrás`;
    if (days === 1) return "1 dia atrás";
    return `${days} dias atrás`;
}

export default function PostCommentsModal({ user, post, open, onClose }) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl bg-background border border-border p-6 pt-15 rounded-xl overflow-y-auto max-h-[90vh]">

                <DialogHeader>
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={user.foto} alt={user.nome} />
                            <AvatarFallback>{user.nome.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-semibold">{user.nome}</h3>
                            <p className="text-sm text-muted-foreground">{user.cargo}</p>
                        </div>
                        <Badge variant="secondary" className="ml-auto">
                            Level {user.level}
                        </Badge>
                    </div>
                </DialogHeader>

                <p className="mt-4 text-base leading-relaxed">{post.content}</p>

                {post.tags?.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-3">
                        {post.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}

                <hr className="my-5 border-border" />

                <h4 className="font-semibold text-lg mb-3">Comentários</h4>

                <div className="space-y-4">
                    {post.comments.length === 0 && (
                        <p className="text-sm text-muted-foreground">Nenhum comentário ainda.</p>
                    )}

                    {post.comments.map(comment => {
                        const user = getUsers.find(u => u.id === comment.authorId);

                        return (
                            <div key={comment.id} className="flex gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={user.foto} alt={user.nome} />
                                    <AvatarFallback>{user.nome.charAt(0)}</AvatarFallback>
                                </Avatar>

                                <div className="bg-secondary p-3 rounded-xl flex-1 border border-border">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium text-sm">{user.nome}</span>
                                        <span className="text-xs text-muted-foreground">
                                            {formatTimestamp(comment.timestamp)}
                                        </span>
                                    </div>

                                    <p className="text-sm mt-1">{comment.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </DialogContent>
        </Dialog>
    );
}