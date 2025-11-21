import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import getUsers from "@/data/users";
import { useState } from "react";
import PostCommentsModal from "./PostCommentModal";
import { useNavigate } from "react-router";
import { Routes } from "@/routes/routes";

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

export default function PostCard({ post, isLiked, onToggleLike }) {
    const navigate = useNavigate()
    const user = getUsers.filter((user) => user.id === post.authorId)[0];
    const [showComments, setShowComments] = useState(false);

    
    function navigateToProfile(){
        navigate(Routes.ViewProfile.replace(":id", user.id))
    }



    return (
        <>
            <Card className="p-6 space-y-4">
                <div className="flex items-start gap-3" onClick={navigateToProfile}>
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={user.foto} alt={user.nome} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                            {user.nome.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{user.nome}</h3>
                            <Badge variant="secondary" className="text-xs">
                                Level {user.level}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{user.cargo}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{formatTimestamp(post.timestamp)}</span>
                </div>

                <p className="leading-relaxed">{post.content}</p>

                {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                )}

                <div className="flex items-center gap-6 pt-2">
                    <Button
                        onClick={onToggleLike}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Heart className={`h-4 w-4 ${isLiked ? "fill-(--text-inverted) text-(--text-inverted)" : ""}`} />
                        <span>{post.likes + (isLiked ? 1 : 0)}</span>
                    </Button>
                    <Button
                        onClick={() => setShowComments(true)}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments.length}</span>
                    </Button>
                </div>
            </Card>

            <PostCommentsModal
                post={post}
                user={user}
                open={showComments}
                onClose={() => setShowComments(false)}
            />
        </>
    );
}