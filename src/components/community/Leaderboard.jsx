import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export default function Leaderboard({ users }) {
    const topUsers = [...users]
        .sort((a, b) => b.xp - a.xp)
        .slice(0, 3)
        .map((user, index) => ({
            rank: index + 1,
            name: user.nome,
            xp: user.xp,
            level: user.level,
            career: user.cargo,
        }));

    return (
        <Card className="p-6">
            <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Ranking</h3>
            </div>
            <div className="space-y-3">
                {topUsers.map((entry) => (
                    <div key={entry.rank} className="flex items-center gap-3 p-3 rounded-lg bg-accent">
                        <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${entry.rank === 1
                                ? "bg-primary text-primary-foreground"
                                : "bg-primary/10"
                            }`}
                        >
                            {entry.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{entry.name}</p>
                            <p className="text-xs text-muted-foreground">Level {entry.level}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold">{entry.xp}</p>
                            <p className="text-xs text-muted-foreground">XP</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}