import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { loginUser, getAuthenticated } from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Routes } from "../routes/routes";
import GlobalThemeToggle from "@/components/GlobalThemeToggle";
import { LogIn } from "lucide-react";


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
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "var(--bg)" }}>
      <GlobalThemeToggle />


      <Card className="w-full max-w-md p-8 rounded-2xl shadow-lg" style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}>
        <CardHeader className="space-y-3 text-center">
          <div className="flex justify-center">
            <div className="p-3 rounded-full" style={{ background: "var(--primary)", color: "var(--text-inverted)" }}>
              <LogIn className="h-6 w-6" />
            </div>
          </div>


          <CardTitle className="text-3xl font-bold">Entrar</CardTitle>
          <CardDescription style={{ color: "var(--subtle-text)" }}>
            Acesse sua conta para continuar evoluindo
          </CardDescription>
        </CardHeader>


        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="font-medium">Email</Label>
              <Input
                type="email"
                value={email}
                placeholder="seuemail@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-(--bg-section) border-border text-(--text)"
              />
            </div>


            <div className="space-y-2">
              <Label className="font-medium">Senha</Label>
              <Input
                type="password"
                value={password}
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-(--bg-section) border-border text-(--text)"
              />
            </div>


            <Button
              type="submit"
              className="w-full text-white font-semibold rounded-xl py-3"
              style={{ background: "var(--primary)" }}
            >
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}