import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router";
import { Routes } from "@/routes/routes";

export default function MentorCard({ mentor }) {
    const navigate = useNavigate()

    function navigateToProfile(){
        navigate(Routes.ViewProfile.replace(":id", mentor.id))
    }

    return (
        <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3" onClick={navigateToProfile}>
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={mentor.foto} alt={mentor.nome} />
                        <AvatarFallback className="bg-primary/10 text-primary text-lg">
                            {mentor.nome.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{mentor.nome}</h3>
                            <Badge variant="secondary" className="text-xs">
                                Level {mentor.level}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{mentor.cargo}</p>
                    </div>
                </div>
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