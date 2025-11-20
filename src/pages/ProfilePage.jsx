import { useState } from "react";
import { useParams } from "react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Trophy,
  Clock,
  BarChart3,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  FileCode,
  Award,
  Languages,
} from "lucide-react";

import users from "../data/users";

export default function ProfilePage() {
  const { id } = useParams();
  const [user] = useState(() => {
    const selectedUser = users.find((u) => u.id === Number(id));
    if (!selectedUser) {
      console.warn("Usuário não encontrado para o ID:", id);
    }
    return selectedUser || null;
  });

  const [userXP] = useState(450);
  const [userLevel] = useState(3);

  if (!user) return <p className="text-center mt-20">Carregando perfil...</p>;

  const levelProgress = ((userXP % 500) / 500) * 100;

  return (
    <div className="space-y-8 my-20">
      <Card
        className="p-8 rounded-2xl shadow-md"
        style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <Avatar className="h-28 w-28">
            <AvatarImage src={user.foto} />
            <AvatarFallback
              style={{ background: "var(--primary)", color: "var(--on-primary)" }}
            >
              {user.nome.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold">{user.nome}</h1>
            <p style={{ color: "var(--subtle-text)" }}>{user.resumo}</p>

            <div className="flex flex-wrap gap-2">
              <Badge style={{ background: "var(--primary)", color: "var(--text-inverted)" }}>
                {user.cargo}
              </Badge>

              <Badge variant="outline" style={{ borderColor: "var(--border)" }}>
                <MapPin className="h-3 w-3 mr-1" /> {user.localizacao}
              </Badge>

              <Badge variant="outline" style={{ borderColor: "var(--border)" }}>
                Área: {user.area}
              </Badge>
            </div>

            <div className="space-y-2 pt-3">
              <div className="flex justify-between text-sm">
                <span style={{ color: "var(--subtle-text)" }}>
                  Progresso para Level {userLevel + 1}
                </span>
                <span>{Math.round(levelProgress)}%</span>
              </div>

              <Progress value={levelProgress} className="h-3" />
            </div>
          </div>
        </div>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          className="p-6 rounded-xl shadow-sm"
          style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Clock className="h-5 w-5" style={{ color: "var(--primary)" }} />
            <h3 className="font-semibold">Study Time</h3>
          </div>
          <p className="text-3xl font-bold">24h</p>
          <p style={{ color: "var(--subtle-text)" }}>This month</p>
        </Card>

        <Card
          className="p-6 rounded-xl shadow-sm"
          style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="h-5 w-5" style={{ color: "var(--primary)" }} />
            <h3 className="font-semibold">Streak</h3>
          </div>
          <p className="text-3xl font-bold">7 days</p>
          <p style={{ color: "var(--subtle-text)" }}>Keep it up!</p>
        </Card>

        <Card
          className="p-6 rounded-xl shadow-sm"
          style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="h-5 w-5" style={{ color: "var(--primary)" }} />
            <h3 className="font-semibold">Badges</h3>
          </div>
          <p className="text-3xl font-bold">12</p>
          <p style={{ color: "var(--subtle-text)" }}>Earned</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        
        <Card
          className="p-6 rounded-xl shadow-sm"
          style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}
        >
          <h2 className="text-xl font-semibold mb-4">Informações de Contato</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg" style={{ border: "1px solid var(--border)" }}>
              <Mail className="h-6 w-6" />
              <div>
                <p className="font-medium">Email</p>
                <p style={{ color: "var(--subtle-text)" }}>{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:underline" style={{ border: "1px solid var(--border)" }}>
              <Linkedin className="h-6 w-6" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <p style={{ color: "var(--subtle-text)" }}>
                  <a href={user.linkedin} target="_blank"> {user.linkedin || "Não informado"}</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:underline" style={{ border: "1px solid var(--border)" }}>
              <Github className="h-6 w-6" />
              <div>
                <p className="font-medium">GitHub</p>
                <p style={{ color: "var(--subtle-text)" }}>
                   <a href={user.github} target="_blank"> {user.github || "Não informado"}</a>
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card
          className="p-6 rounded-xl shadow-sm"
          style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-5 w-5" style={{ color: "var(--primary)" }} />
            <h2 className="text-xl font-semibold">Learning Activity</h2>
          </div>

          <div className="space-y-6">
            {[["Mon", "2h 30m", 80], ["Tue", "1h 45m", 60], ["Wed", "3h 15m", 100], ["Thu", "2h 00m", 70], ["Fri", "1h 30m", 50]].map(([day, time, value]) => (
              <div key={day}>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: "var(--subtle-text)" }}>{day}</span>
                  <span>{time}</span>
                </div>
                <Progress value={value} className="h-2 bg-border" />
              </div>
            ))}
          </div>
        </Card>

        <Card
          className="p-6 rounded-xl shadow-md"
          style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}
        >
          <h2 className="text-xl font-semibold mb-4">Habilidades</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-lg">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {user.habilidadesTecnicas.map((skill) => (
                  <Badge key={skill} style={{ background: "var(--primary)", color: "var(--text-inverted)" }}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-lg">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {user.softSkills.map((skill) => (
                  <Badge key={skill} variant="outline" style={{ borderColor: "var(--border)" }}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 rounded-xl shadow-md" style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5" /> Experiências Profissionais
          </h2>

          <div className="space-y-6">
            {user.experiencias.map((exp, i) => (
              <div key={i} className="p-4 rounded-lg" style={{ border: "1px solid var(--border)" }}>
                <h3 className="font-semibold">
                  {exp.cargo} — {exp.empresa}
                </h3>
                <p className="text-sm" style={{ color: "var(--subtle-text)" }}>
                  {exp.inicio} → {exp.fim}
                </p>
                <p className="mt-2">{exp.descricao}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 rounded-xl shadow-md" style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" /> Formação Acadêmica
          </h2>

          <div className="space-y-6">
            {user.formacao.map((f, i) => (
              <div key={i} className="p-4 rounded-lg" style={{ border: "1px solid var(--border)" }}>
                <h3 className="font-semibold">{f.curso}</h3>
                <p style={{ color: "var(--subtle-text)" }}>
                  {f.instituicao} — {f.ano}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-6 rounded-xl shadow-md" style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileCode className="h-5 w-5" /> Projetos
          </h2>

          <div className="space-y-6">
            {user.projetos.map((p, i) => (
              <div key={i} className="p-4 rounded-lg" style={{ border: "1px solid var(--border)" }}>
                <h3 className="font-semibold">{p.titulo}</h3>
                <p className="mt-1">{p.descricao}</p>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    className="text-sm underline"
                    style={{ color: "var(--primary)" }}
                  >
                    Ver projeto →
                  </a>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 rounded-xl shadow-md" style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5" /> Certificações
          </h2>

          <div className="flex flex-wrap gap-3">
            {user.certificacoes.map((c) => (
              <Badge key={c} style={{ background: "var(--primary)", color: "var(--text-inverted)" }}>
                {c}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6 rounded-xl shadow-md" style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Languages className="h-5 w-5" /> Idiomas
          </h2>

          <div className="space-y-3">
            {user.idiomas.map((i, idx) => (
              <div key={idx}>
                <p className="font-semibold">{i.idioma}</p>
                <p style={{ color: "var(--subtle-text)" }}>{i.nivel}</p>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
}
