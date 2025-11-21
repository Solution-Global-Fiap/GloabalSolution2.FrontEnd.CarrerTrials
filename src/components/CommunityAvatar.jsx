import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Activity } from "react";

export default function CommunityAvatar({ user, navigateTo, hide = false, avatarSize = 12 }) {
    return (
        <div className="flex gap-3 cursor-pointer" onClick={() => navigateTo(user.id)}>
            <Avatar className={`h-${avatarSize} w-${avatarSize}`}>
                <AvatarImage src={user.foto} alt={user.nome} />
                <AvatarFallback className="bg-primary/10 text-primary">
                    {user.nome.charAt(0)}
                </AvatarFallback>
            </Avatar>
            <Activity mode={hide ? "hidden" : "visible"}>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{user.nome}</h3>
                        <Badge variant="secondary" className="text-xs">
                            Level {user.level}
                        </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{user.cargo}</p>
                </div>
            </Activity>
        </div>
    );
}