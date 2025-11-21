import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostFeed from "./PostFeed";
import DiscussionsTab from "./DiscussionsTab";
import MentorshipTab from "./MentorshipTab";

export default function CommunityTabs({ posts, mentors, likedPosts, toggleLike }) {
    return (
        <Tabs defaultValue="feed" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 gap-1 bg-primary/10">
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="discussions">Discussões</TabsTrigger>
                <TabsTrigger value="mentorship">Mentoria</TabsTrigger>
            </TabsList>

            <TabsContent value="feed" className="space-y-4">
                <PostFeed posts={posts} likedPosts={likedPosts} toggleLike={toggleLike} />
            </TabsContent>

            <TabsContent value="discussions" className="space-y-4">
                <DiscussionsTab />
            </TabsContent>

            <TabsContent value="mentorship" className="space-y-4">
                <MentorshipTab users={mentors} />
            </TabsContent>
        </Tabs>
    );
}