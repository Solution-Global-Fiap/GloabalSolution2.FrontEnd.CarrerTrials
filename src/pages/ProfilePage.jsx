import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Trophy,
  Target,
  Calendar,
  Clock,
  BarChart3,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function ProfilePage() {
  const [careerGoal, setCareerGoal] = useState("");
  const [userXP] = useState(450);
  const [userLevel] = useState(3);

  useEffect(() => {
    const goal = sessionStorage.getItem("careerGoal") || "Full Stack Developer";
    setCareerGoal(goal);
  }, []);

  const levelProgress = ((userXP % 500) / 500) * 100;

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <Card
          className="p-8 rounded-2xl shadow-md"
          style={{
            background: "var(--bg-section)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-24 w-24">
              <AvatarFallback
                className="text-xl"
                style={{
                  background: "var(--primary)",
                  color: "var(--on-primary)",
                }}
              >
                JD
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold">{`John Doe`}</h1>
              <p style={{ color: "var(--subtle-text)" }}>
                Aspirante a {careerGoal}
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge
                  className="gap-1"
                  style={{
                    background: "var(--primary)",
                    color: "var(--on-primary)",
                  }}
                >
                  <Trophy className="h-3 w-3" />
                  Level {userLevel}
                </Badge>

                <Badge
                  variant="outline"
                  className="gap-1"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Target className="h-3 w-3" />
                  {userXP} XP
                </Badge>

                <Badge
                  variant="outline"
                  className="gap-1"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Calendar className="h-3 w-3" />
                  Joined 30 days ago
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span style={{ color: "var(--subtle-text)" }}>
                    Progress to Level {userLevel + 1}
                  </span>
                  <span>{Math.round(levelProgress)}%</span>
                </div>

                <Progress
                  value={levelProgress}
                  className="
                        h-3 
                        bg-(--border)
                    "
                />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            className="p-6 rounded-xl shadow-sm"
            style={{
              background: "var(--bg-section)",
              borderColor: "var(--border)",
            }}
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
            style={{
              background: "var(--bg-section)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <BarChart3
                className="h-5 w-5"
                style={{ color: "var(--primary)" }}
              />
              <h3 className="font-semibold">Streak</h3>
            </div>
            <p className="text-3xl font-bold">7 days</p>
            <p style={{ color: "var(--subtle-text)" }}>Keep it up!</p>
          </Card>

          <Card
            className="p-6 rounded-xl shadow-sm"
            style={{
              background: "var(--bg-section)",
              borderColor: "var(--border)",
            }}
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
            style={{
              background: "var(--bg-section)",
              borderColor: "var(--border)",
            }}
          >
            <h2 className="text-xl font-semibold mb-4">
              Informações de Contato
            </h2>

            <div className="space-y-4">
              <div
                className="flex items-center gap-4 p-3 rounded-lg"
                style={{ border: "1px solid var(--border)" }}
              >
                <Mail className="h-6 w-6" />
                <div>
                  <p className="font-medium">Email</p>
                  <p style={{ color: "var(--subtle-text)" }}>
                    joao.silva@email.com
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-3 rounded-lg"
                style={{ border: "1px solid var(--border)" }}
              >
                <Linkedin className="h-6 w-6" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p style={{ color: "var(--subtle-text)" }}>
                    linkedin.com/in/joaosilva
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-3 rounded-lg"
                style={{ border: "1px solid var(--border)" }}
              >
                <Github className="h-6 w-6" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p style={{ color: "var(--subtle-text)" }}>
                    github.com/joaosilva
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card
            className="p-6 rounded-xl shadow-sm"
            style={{
              background: "var(--bg-section)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3
                className="h-5 w-5"
                style={{ color: "var(--primary)" }}
              />
              <h2 className="text-xl font-semibold">Learning Activity</h2>
            </div>

            <div className="space-y-6">
              {[
                ["Mon", "2h 30m", 80],
                ["Tue", "1h 45m", 60],
                ["Wed", "3h 15m", 100],
                ["Thu", "2h 00m", 70],
                ["Fri", "1h 30m", 50],
              ].map(([day, time, value]) => (
                <div key={day}>
                  <div className="flex justify-between text-sm mb-1">
                    <span style={{ color: "var(--subtle-text)" }}>{day}</span>
                    <span>{time}</span>
                  </div>
                  <Progress
                    value={value}
                    className="h-2 
                               *:[[role=progressbar]]:bg-(--primary)
                               bg-(--border)
                    "
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
