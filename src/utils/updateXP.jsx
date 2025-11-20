import users from "../data/users";

export function completeChallenge(userId, challenge) {
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) return;

  const user = users[userIndex];

  if (user.completedChallenges.includes(challenge.id)) {
    return { alreadyCompleted: true, updatedUser: user };
  }

  user.xp += challenge.xp;

  user.completedChallenges.push(challenge.id);

  user.level = Math.floor(user.xp / 500) + 1;

  return { alreadyCompleted: false, updatedUser: user };
}
