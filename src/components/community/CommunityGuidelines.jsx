import { Card } from "@/components/ui/card";

const guidelines = [
    "Seja respeitoso e solidário",
    "Compartilhe conhecimento livremente",
    "Celebre o sucesso dos outros",
    "Faça perguntas, não importa quão básicas",
];

export default function CommunityGuidelines() {
    return (
        <Card className="p-6 space-y-4 bg-accent">
            <h3 className="font-semibold">Diretrizes da Comunidade</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
                {guidelines.map((guideline, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>{guideline}</span>
                    </li>
                ))}
            </ul>
        </Card>
    );
}