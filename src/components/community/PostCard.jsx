import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import getUsers from "@/data/users";
import { useState } from "react";
import PostCommentsModal from "./PostCommentModal";
import { useNavigate } from "react-router";
import { Routes } from "@/routes/routes";
import CommunityAvatar from "../CommunityAvatar";

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

export default function PostCard({ post, comments, isLiked, onToggleLike, onOpenComments }) {
    const navigate = useNavigate()
    const user = getUsers.filter((user) => user.id === post.authorId)[0];
    const [showComments, setShowComments] = useState(false);

    
    function navigateToProfile(userId){
        navigate(Routes.ViewProfile.replace(":id", userId))
    }

    return (
        <>
            <Card onClick={() => setShowComments(true)} className="p-6 space-y-4 cursor-pointer">
                <div className="flex items-start justify-between gap-3">
                    <CommunityAvatar
                        user={user}
                        navigateTo={navigateToProfile}
                    />
                    <span className="text-sm text-muted-foreground">{formatTimestamp(post.timestamp)}</span>
                </div>

                <p className="leading-relaxed">{post.content}</p>

                {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
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
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpenComments(post.id);
                        }}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <MessageCircle className="h-4 w-4" />
                        <span>{comments.length}</span>
                    </Button>
                </div>
            </Card>

            <PostCommentsModal
                post={post}
                comments={comments}
                user={user}
                open={showComments}
                onClose={() => setShowComments(false)}
                navigateTo={navigateToProfile}
            />
        </>
    );
}