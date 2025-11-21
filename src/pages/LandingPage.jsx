import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Users, Brain, Sparkles, Target, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router";
import { Routes } from "../routes/routes";
import GlobalThemeToggle from "@/components/GlobalThemeToggle";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: "Desafios Personalizados",
      description: "Receba desafios adaptados ao seu nível e área de atuação, criados com IA.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com desenvolvedores, compartilhe progresso e cresça junto.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "Mentoria com IA",
      description: "IA que analisa seu perfil e orienta seu desenvolvimento de forma inteligente.",
      color: "primary"
    },
  ];

  const benefits = [
    "Desafios técnicos reais do mercado",
    "Acompanhamento de progresso com XP",
    "Comunidade de desenvolvedores ativos",
    "Mentoria personalizada por IA",
    "Sistema de níveis e conquistas",
    "Feedback instantâneo nos desafios"
  ];

  return (
    <div className="min-h-screen bg-linear-to-r from-(--hero-from) via-(--hero-middle) to-(--hero-to)">
      <GlobalThemeToggle />

      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="gap-2 py-2 px-4 text-(--text-inverted)">
              <Sparkles className="h-4 w-4" />
              Powered by AI
            </Badge>

            <h1 className="text-(--text-inverted) text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
              Desenvolva sua carreira com{" "}<br/>
              <span className="bg-linear-to-r from-muted via-secondary to-muted bg-clip-text text-transparent">
                IA integrada
              </span>
            </h1>

            <p className="text-lg md:text-xl text-(--text-secondary) max-w-2xl mx-auto">
              CareerTrials conecta você com desafios personalizados, comunidade ativa e mentoria inteligente para acelerar seu desenvolvimento profissional.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => navigate(Routes.Login)}
                className="gap-2 text-lg h-12 px-8"
              >
                Entrar
              </Button>
              <Button
                size="lg"
                onClick={() => navigate(Routes.Login)}
                className="gap-2 text-lg h-12 px-8"
              >
                Começar agora
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-(--text-inverted)">1.2k+</div>
                <div className="text-sm text-(--text-secondary)">Desenvolvedores</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-(--text-inverted)">500+</div>
                <div className="text-sm text-(--text-secondary)">Desafios</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-(--text-inverted)">95%</div>
                <div className="text-sm text-(--text-secondary)">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32" style={{ background: "var(--bg-section)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="gap-2">
              <Target className="h-4 w-4" />
              Funcionalidades
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              Tudo que você precisa para evoluir
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Uma plataforma completa criada para desenvolvedores que querem ir mais longe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${feature.color}/10`}
                  >
                    <Icon className={`h-7 w-7 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="gap-2 text-(--text-inverted)">
                <TrendingUp className="h-4 w-4" />
                Vantagens
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-(--text-inverted)">
                Por que escolher o CareerTrials?
              </h2>
              <p className="text-(--text-secondary) text-lg">
                Nossa plataforma foi projetada para desenvolvedores que querem crescer de forma estruturada e eficiente, com suporte de IA em cada etapa.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-(--text-inverted) shrink-0 mt-0.5" />
                    <span className="text-lg text-(--text-inverted)">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                onClick={() => navigate(Routes.Login)}
                className="mt-4"
              >
                Começar gratuitamente
              </Button>
            </div>

            <Card className="p-8 lg:p-12 space-y-6" style={{ background: "var(--bg-section)" }}>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Nível Iniciante</div>
                    <div className="text-sm text-muted-foreground">HTML, CSS, JavaScript</div>
                  </div>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-[30%] bg-primary rounded-full" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Nível Intermediário</div>
                    <div className="text-sm text-muted-foreground">React, Node.js, APIs</div>
                  </div>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-primary rounded-full" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Nível Avançado</div>
                    <div className="text-sm text-muted-foreground">Arquitetura, Cloud, DevOps</div>
                  </div>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-primary rounded-full" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32" style={{ background: "var(--bg-section)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <Card className="flex flex-col items-center justify-center p-8 md:p-16 text-center space-y-4 bg-linear-to-r from-(--hero-from) via-(--hero-middle) to-(--hero-to)">
            <img
              src="/Logo-Dark.png"
              className="h-25 w-25 transition-none"
            />

            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Pronto para acelerar sua carreira?
            </h2>

            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Junte-se a milhares de desenvolvedores que já estão evoluindo através da plataforma com suporte de IA.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate(Routes.Login)}
                className="gap-2 text-lg h-12 px-8"
              >
                Começar Agora
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer/>
    </div>
  );
}