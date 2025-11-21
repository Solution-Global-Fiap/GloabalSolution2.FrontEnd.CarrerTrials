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

export default function CommunityPage() {
    const [users] = useState(getUsers);
    const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem("community_posts");
        return saved ? JSON.parse(saved) : getPosts;
    });
    const [comments, setComments] = useState(() => {
        const saved = localStorage.getItem("community_comments");
        return saved ? JSON.parse(saved) : getPosts.flatMap((post) => post.comments);
    });
    const [likedPosts, setLikedPosts] = useState(() => {
        const saved = localStorage.getItem("community_likes");
        return saved ? new Set(JSON.parse(saved)) : new Set();
    });
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
        setIsDialogOpen(false);
    };

    const handleAddComment = (postId, content) => {
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
    };

    const getCommentsForPost = (postId) => comments[postId] || [];

    const mentors = users.filter(user => user.level >= 50)

    return (
        <div className="py-10 space-y-8">
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Comunidade</h1>
                        <p className="text-muted-foreground">
                            Conecte-se com outros aprendizes, compartilhe progresso e cresça junto
                        </p>
                    </div>
                    <Button onClick={() => setIsDialogOpen(true)}>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Nova Publicação
                    </Button>
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
                    mentors={mentors}
                    likedPosts={likedPosts} 
                    toggleLike={toggleLike} 
                />

                <div className="space-y-6">
                    <Leaderboard users={users} />
                    <TrendingTopics posts={posts} />
                    <CommunityGuidelines />
                </div>
            </div>
            <NewPostDialog
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
                onSubmit={handleCreatePost}
            />
        </div>
    );
}