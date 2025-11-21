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

export function setUser(user){
  localStorage.setItem("user", JSON.stringify(user));
}

export function clearLocalStorage() {
  localStorage.clear();
}
