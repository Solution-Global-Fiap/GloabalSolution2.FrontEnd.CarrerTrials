import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import CommunityStats from "../components/community/CommunityStats";
import CommunityTabs from "../components/community/CommunityTabs";
import Leaderboard from "../components/community/Leaderboard";
import TrendingTopics from "../components/community/TrendingTopics";
import CommunityGuidelines from "../components/community/CommunityGuidelines";
import { MessageSquare } from "lucide-react";
import getUsers from "@/data/users";
import { getUser } from "@/hooks/useAuth";
import getPosts from "../data/posts"
import NewPostDialog from "@/components/community/NewPostDialog";
import NewCommentDialog from "@/components/community/NewCommentDialog";

export default function CommunityPage() {
    const [users] = useState(getUsers);
    const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem("community_posts");
        return saved ? JSON.parse(saved) : getPosts;
    });
    const [comments, setComments] = useState(() => {
        const saved = localStorage.getItem("community_comments");
        return saved
            ? JSON.parse(saved)
            : getPosts
                .reduce((acc, post) => {
                    acc[post.id] = post.comments || [];
                    return acc;
                }, {});
        ;
    });
    const [likedPosts, setLikedPosts] = useState(() => {
        const saved = localStorage.getItem("community_likes");
        return saved ? new Set(JSON.parse(saved)) : new Set();
    });
    const [isDialogPostOpen, setIsDialogPostOpen] = useState(false);
    const [isDialogCommentOpen, setIsDialogCommentOpen] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null);

    const currentUser = getUser();
    const currentUserId = currentUser.id;

    useEffect(() => {
        localStorage.setItem("community_posts", JSON.stringify(posts));
    }, [posts]);

    useEffect(() => {
        localStorage.setItem("community_comments", JSON.stringify(comments));
    }, [comments]);

    useEffect(() => {
        localStorage.setItem("community_likes", JSON.stringify([...likedPosts]));
    }, [likedPosts]);

    const handleOpenCommentDialog = (postId) => {
        setSelectedPostId(postId);
        setIsDialogCommentOpen(true);
    };

    const toggleLike = (postId) => {
        setLikedPosts((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(postId)) {
                newSet.delete(postId);
            } else {
                newSet.add(postId);
            }
            return newSet;
        });
    };

    const handleCreatePost = (content, tags) => {
        const newPost = {
            id: crypto.randomUUID(),
            authorId: currentUserId,
            content,
            likes: 0,
            comments: [],
            timestamp: new Date().toISOString(),
            tags,
        };

        setPosts((prev) => [newPost, ...prev]);
        setComments(prev => ({
            ...prev,
            [newPost.id]: []
        }));
        setIsDialogPostOpen(false);
    };

    const handleAddComment = (content, postId) => {
        const newComment = {
            id: crypto.randomUUID(),
            authorId: currentUserId,
            content,
            timestamp: new Date().toISOString(),
        };

        setComments((prev) => ({
            ...prev,
            [postId]: [...(prev[postId] || []), newComment],
        }));
        setIsDialogCommentOpen(false);
    };

    const mentors = users.filter(user => user.level >= 50)

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 pt-20 space-y-8">
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Comunidade</h1>
                        <p className="text-muted-foreground">
                            Conecte-se com outros aprendizes, compartilhe progresso e cresça junto
                        </p>
                    </div>
                </div>

                <CommunityStats 
                    postsCount={posts.length} 
                    usersCount={users.length}
                    mentorsCount={mentors.length} 
                />
            </div>

            <div className="grid lg:grid-cols-[1fr_340px] gap-8">
                <CommunityTabs
                    posts={posts}
                    comments={comments}
                    mentors={mentors}
                    likedPosts={likedPosts}
                    toggleLike={toggleLike}
                    onOpenCommentDialog={handleOpenCommentDialog}
                />

                <div className="space-y-6 lg:block sticky top-24 self-start">
                    <Button
                        className="w-full"
                        onClick={() => setIsDialogPostOpen(true)}
                    >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Nova Publicação
                    </Button>
                    <Leaderboard users={users} />
                    <TrendingTopics posts={posts} />
                    <CommunityGuidelines />
                </div>
            </div>
            <NewPostDialog
                open={isDialogPostOpen}
                onOpenChange={setIsDialogPostOpen}
                onSubmit={handleCreatePost}
            />
            <NewCommentDialog
                open={isDialogCommentOpen}
                onOpenChange={setIsDialogCommentOpen}
                onSubmit={handleAddComment}
                postId={selectedPostId}
            />
            <Button
                className="
                    lg:hidden
                    fixed bottom-6 right-6
                    rounded-full h-14 w-14 p-0
                    shadow-lg
                "
                onClick={() => setIsDialogPostOpen(true)}
            >
                <MessageSquare className="h-6 w-6" />
            </Button>
        </div>
    );
}