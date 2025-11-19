import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { loginUser, getAuthenticated } from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Routes } from "../routes/routes";
import GlobalThemeToggle from "../components/GlobalThemeToggle";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function navigateHome() {
    navigate(Routes.Challenges, { replace: true });
  }

  useEffect(() => {
    if (getAuthenticated()) navigateHome();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(email, password);
    if (res.success) {
      toast.success(`Bem-vindo(a), ${res.user.nome}!`);
      navigateHome();
    } else {
      toast.error(res.message || "E-mail ou senha incorretos!");
    }
  };

  return (
    <div>
      <GlobalThemeToggle />
      <div className="min-h-screen flex items-center justify-center bg-(--bg) text-(--text) p-4">
        <Card className="w-full max-w-md bg-(--bg-card) border border-(--border) shadow-[0_0_20px_var(--shadow)]">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Login</CardTitle>
            <CardDescription className="text-center text-(--text-secondary)">
              Entre na plataforma para continuar aprendendo
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  placeholder="seuemail@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-(--bg-section) border-(--border) text-(--text)"
                />
              </div>

              <div>
                <Label>Senha</Label>
                <Input
                  type="password"
                  value={password}
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-(--bg-section) border-(--border) text-(--text)"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-(--primary) hover:bg-(--primary-hover) text-white"
              >
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
