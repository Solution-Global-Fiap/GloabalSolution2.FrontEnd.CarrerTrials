import { getUser, setUser } from "@/hooks/useAuth";

export function completeChallenge(challenge) {
  const user = getUser()

  const alreadyCompleted = user.completedChallenges.includes(challenge.id);

  if (!alreadyCompleted) {
    user.xp += challenge.xp;

    user.completedChallenges.push(challenge.id);

    user.level = Math.floor(user.xp / 500) + 1;
  }

  setUser(user)

  return {
    alreadyCompleted,
    gainedXP: alreadyCompleted ? 0 : challenge.xp,
    userXP: user.xp,
    userLevel: user.level,
  };
}
