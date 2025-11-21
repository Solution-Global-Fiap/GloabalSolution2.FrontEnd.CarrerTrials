import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

export default function TrendingTopics({ posts }) {
    const tagCounts = posts.reduce((acc, post) => {
        post.tags?.forEach(tag => {
            acc[tag] = (acc[tag] || 0) + 1;
        });
        return acc;
    }, {});

    const topTags = Object.entries(tagCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3);

    if (topTags.length === 0) {
        return (
            <Card className="p-6">
                <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <h3 className="font-semibold">Tópicos em Alta</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                    Nenhum tópico em alta ainda
                </p>
            </Card>
        );
    }

    return (
        <Card className="p-6">
            <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Tópicos em Alta</h3>
            </div>
            <div className="space-y-2">
                {topTags.map(([tag, count]) => (
                    <Button
                        key={tag}
                        className="w-full text-left px-3 py-2 rounded-lg border border-border hover:bg-accent hover:border-primary/50 transition-all"
                    >
                        <div className="flex items-center justify-between w-full">
                            <span className="text-sm font-medium">{tag}</span>
                            <span className="text-xs text-muted-foreground">
                                {count} posts
                            </span>
                        </div>
                    </Button>
                ))}
            </div>
        </Card>
    );
}