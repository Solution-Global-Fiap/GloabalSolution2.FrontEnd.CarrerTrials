import getUsers from "../data/users";

export async function loginUser(email, password) {
  try {
    let result = getUsers.filter(user => email == user.email && password == user.senha)
    
    if (result.length > 0) {
      const user = result[0];
      setAuthenticated(true, user);
      return { success: true, user };
    } 
    else {
      return { success: false, message: "Usuário ou senha incorretos." };
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return { success: false, message: "Erro ao conectar ao servidor." };
  }
}

export async function getOrCreateSession(userId) {
  let session = localStorage.getItem("ai_session");

  if (session) {
    return JSON.parse(session);
  }

  const res = await fetch(import.meta.env.VITE_AI_API + `/session/create/${userId}`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Falha ao criar sessão");
  }

  const data = await res.json();

  localStorage.setItem("ai_session", JSON.stringify(data));

  return data;
}

export function removeCurrentSession() {
  localStorage.removeItem("ai_session");
}

export function logoutUser() {
  localStorage.removeItem("user");
  localStorage.removeItem("isAuthenticated");
}

function setAuthenticated(isAuthenticated, user) {
  if (isAuthenticated) {
    setUser(user)
  }
  localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
}

export function getAuthenticated() {
  return JSON.parse(localStorage.getItem("isAuthenticated")) || false;
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function getStoredChallenges() {
  return JSON.parse(localStorage.getItem("challenges"));
}

export function getIsChatCompleted() {
  return localStorage.getItem("chatCompleted");
}

export function setUser(user){
  localStorage.setItem("user", JSON.stringify(user));
}

export function setStoredChallenges(challenges) {
  localStorage.setItem("challenges", JSON.stringify(challenges));
}

export function setIsChatCompleted(chatCompleted) {
  localStorage.setItem("chatCompleted", chatCompleted);
}

export function clearLocalStorage() {
  localStorage.clear();
}
