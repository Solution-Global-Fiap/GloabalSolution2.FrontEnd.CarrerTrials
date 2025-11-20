import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function ChallengeCard({ challenge, align = "right", onClick }) {
  const typeColors = {
    Code: "#2ecc71",
    Quiz: "#6c5ce7",
    Project: "#e84393"
  };

  const difficultyColors = {
    Easy: "#27ae60",
    Medium: "#f1c40f",
    Hard: "#e74c3c"
  };

  return (
    <div
      className={`relative mb-14 flex ${
        align === "left" ? "justify-start" : "justify-end"
      }`}
      onClick={() => onClick && onClick(challenge)}
    >
      <Card
        className="p-6 rounded-xl shadow-md w-[380px] cursor-pointer hover:scale-[1.02] transition"
        style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      >
        <div className="flex justify-between">
          <h3 className="font-semibold">{challenge.title}</h3>

          <Badge style={{ background: typeColors[challenge.type], color: "#fff" }}>
            {challenge.type}
          </Badge>
        </div>

        <p className="text-sm mt-1" style={{ color: "var(--subtle-text)" }}>
          {challenge.description}
        </p>

        <div className="flex gap-2 mt-3">
          <Badge style={{ background: difficultyColors[challenge.difficulty], color: "#fff" }}>
            {challenge.difficulty}
          </Badge>

          <Badge variant="outline" style={{ borderColor: "var(--border)" }}>
            ⭐ {challenge.xp} XP
          </Badge>
        </div>
      </Card>
    </div>
  );
}
