import MentorCard from "./MentorCard";

export default function MentorshipTab({ users }) {
    const mentors = users.slice(0, 5);

    if (mentors.length === 0) {
        return (
            <div className="text-center py-8 text-muted-foreground">
                Nenhum mentor disponível no momento
            </div>
        );
    }

    return (
        <>
            {mentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
            ))}
        </>
    );
}