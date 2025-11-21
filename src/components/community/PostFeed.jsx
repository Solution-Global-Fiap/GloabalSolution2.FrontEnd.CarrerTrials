import { MessageSquare } from "lucide-react";
import { Card } from "../ui/card";
import PostCard from "./PostCard";

export default function PostFeed({ posts, likedPosts, toggleLike, onOpenCommentDialog, comments }) {
    if (posts.length === 0) {
        return (
            <Card className="p-8 text-center space-y-4 flex flex-col justify-center items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                    <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Nenhuma publicação ainda</h3>
                    <p className="text-muted-foreground">
                        Seja o primeiro a compartilhar algo com a comunidade!
                    </p>
                </div>
            </Card>
        );
    }
    
    return (
        <>
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    comments={comments[post.id]}
                    isLiked={likedPosts.has(post.id)}
                    onToggleLike={() => toggleLike(post.id)}
                    onOpenComments={() => onOpenCommentDialog(post.id)}
                />
            ))}
        </>
    );
}