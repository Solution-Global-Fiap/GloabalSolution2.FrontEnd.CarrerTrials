import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostFeed from "./PostFeed";
import MentorshipTab from "./MentorshipTab";

export default function CommunityTabs({ posts, comments, mentors, likedPosts, toggleLike, onOpenCommentDialog }) {
    return (
        <Tabs defaultValue="feed" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 gap-1 bg-primary/10">
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="mentorship">Mentoria</TabsTrigger>
            </TabsList>

            <TabsContent value="feed" className="space-y-4">
                <PostFeed 
                    posts={posts}
                    comments={comments}
                    likedPosts={likedPosts} 
                    toggleLike={toggleLike} 
                    onOpenCommentDialog={onOpenCommentDialog} 
                />
            </TabsContent>

            <TabsContent value="mentorship" className="space-y-4">
                <MentorshipTab users={mentors} />
            </TabsContent>
        </Tabs>
    );
}