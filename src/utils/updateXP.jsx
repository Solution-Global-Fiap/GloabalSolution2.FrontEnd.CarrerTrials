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


export function calculateDynamicLevel(userXP, challenges) {
  const xpRequirements = getXpRequirementsByLevel(challenges);

  let level = 1;
  let remainingXP = userXP;

  while (xpRequirements[level] !== undefined && remainingXP >= xpRequirements[level]) {
    remainingXP -= xpRequirements[level];
    level++;
  }

  const xpForNext = xpRequirements[level] || 0;
  const currentLevelXP = remainingXP;
  const progress = xpForNext > 0 ? (currentLevelXP / xpForNext) * 100 : 100;

  return {
    level,
    currentLevelXP,
    xpForNext,
    progress
  };
}

export function getXpRequirementsByLevel(challenges) {
  const xpByLevel = {};

  challenges.forEach(ch => {
    if (!xpByLevel[ch.level]) {
      xpByLevel[ch.level] = 0;
    }
    xpByLevel[ch.level] += ch.xp;
  });

  return xpByLevel;
}

