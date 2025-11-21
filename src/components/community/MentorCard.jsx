import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { Routes } from "@/routes/routes";
import CommunityAvatar from "./CommunityAvatar";

export default function MentorCard({ mentor }) {
    const navigate = useNavigate()

    function navigateToProfile(){
        navigate(Routes.ViewProfile.replace(":id", mentor.id))
    }

    return (
        <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
                <CommunityAvatar
                    user={mentor}
                    navigateTo={navigateToProfile}
                />
                <Button size="sm" variant="outline">
                    Solicitar Mentor
                </Button>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-medium">Especialidade:</p>
                <div className="flex flex-wrap gap-2">
                    {mentor.habilidadesTecnicas.slice(0, 5).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                        </Badge>
                    ))}
                </div>
                {mentor.localizacao && (
                    <p className="text-xs text-muted-foreground pt-2">
                        📍 {mentor.localizacao}
                    </p>
                )}
            </div>
        </Card>
    );
}